<script lang="ts">
import useStore from '../services/store';
import beep_sound from '../assets/sounds/beep.mp3';
import success_sound from '../assets/sounds/success.mp3';
import error_sound from '../assets/sounds/error.wav';
export default {
  setup () {
    const store = useStore();
    const nf = Intl.NumberFormat();
    const maxNumber = 1000000000000; // trillion
    const maxDecimals = 8;
    // Sounds
    const beep_ = new Audio(beep_sound);
    const success_ = new Audio(success_sound);
    const error_ = new Audio(error_sound);
    function playBeep(): void { if (store.sound) beep_.play(); }
    function playSuccess(): void { if (store.sound) success_.play(); }
    function playError(): void { if (store.sound) error_.play(); }
    // Keyboard functionality
    window.addEventListener('keypress', e => {
      if (e.key === 'Enter') {
        calculateResult();
      } else if (e.key === 'Delete') {
        clickDEL();
      } else if (e.key === '=') {
        calculateResult();
      } else if (e.key === '.' || e.key === ',') {
        clickDecimals();
      } else if (!isNaN(Number(e.key))) {
        clickNum(Number(e.key));
      } else if (['+', '-'].includes(e.key)) {
        clickOperator(e.key);
      } else if (e.key === 'x' || e.key === '*') {
        clickOperator('x');
      } else if (e.key === '/' || e.key === ':' || e.key === '÷') {
        clickOperator('÷');
      } else if (e.key == 'e' || e.key === '^' || e.key === 'ⁿ') {
        clickOperator('×ⁿ');
      } else if (e.key == 'r' || e.key == 's' || e.key === '√') {
        clickOperator('√');
      } else { 
        if (e.key == 'p') return; // Pi number
        if (e.key == 'o') return; // Golden ratio (Phi)
        if (e.key == 'd') return; // Euler number)
        if (e.key === '(' || e.key === ')') return;
        store.animate = false;
        store.message = 'Keyboard input not supported: ' + e.key;
        store.tempMsg(2000);
      }
    });
    function clickNum(n: number): void {
      playBeep();
      store.animate = false;
      store.message = '';
      store.idx = 0;
      if (store.operator === '=') clickAC();
      if (!store.decimals) {
        if (store.number[0] === '0') {
          store.number = String(n);
          store.updateConsole();
          return;
        }
        if (Number(store.number) + n <= maxNumber) {
          store.number += n;
          store.updateConsole();
          return;
        } else {
          return alert(`Number must be between -${nf.format(maxNumber)} and ${nf.format(maxNumber)}, including both.`);
        }
      } else {
        if (store.decimals.length > maxDecimals)
          return alert(`Sorry, maximum ${maxDecimals} decimals allowed.`);
        else { 
          store.decimals += n;
          store.updateConsole();
        }
      }
    }
    function clickDecimals(): void {
      playBeep();
      store.animate = false;
      if (store.operator === '0') return;
      if (store.operator === '=') {
        clickAC();
        return;
      }
      if (store.decimals) store.decimals = '';
      else store.decimals = '.';
      store.updateConsole();
    }
    function clickOperator(op: string): void {
      playBeep();
      store.backBtn = true;
      store.animate = false;
      store.message = '';
      store.idx = 0;
      if (store.operator === op) {
        store.operator = '';
        return;
      }
      if (!store.number || store.number === '0') {
        store.operator = op;
        return;
      }
      if (store.operator === '=') {
        clickAC();
        return;
      } 
      if (store.operator === '√') {
        store.operator = op + store.operator;
        return;
      }
      store.addOperator(op);
      if (!store.operations) {
        store.addOperation(store.console);
      } else {
        const operation = store.operator + ' ' + store.console;
        store.addOperation(operation);
      }
      resetNum();
      return;
    }
    function resetNum(): void {
      store.number = '0';
      store.decimals = '';
      store.updateConsole();
    }
    function clickDEL(): void {
      playBeep();
      if (store.console === '0') {
        store.operator = '';
        return;
      }
      store.animate = false;
      store.message = 'DEL 💀';
      store.tempMsg(2000);
      store.idx = 0;
      if (store.cursor > 0) {
        store.startMsg = store.startMsg.slice(0, store.startMsg.length -1);
        store.concatConsole();
        return;
      }
      if (store.operator === '=') {
        clickAC();
        return;
      }
      if (store.number === '0' && !store.decimals) {
        store.operator = '';
        return;
      }
      if (store.decimals) {
        store.decimals = store.decimals.slice(0, -1);
        store.updateConsole();
        return;
      }
      if (store.number.length > 1) {
        store.number = store.number.slice(0, -1);
        store.updateConsole();
        return;
      }
      resetNum();
      store.message = '';
      return;
    }
    function clickAC(): void {
      playBeep();
      resetNum();
      store.resetConsole();
      store.backBtn = false;
      store.animate = false;
      store.idx = 0;
      store.cursor = 0;
      store.message = "Let's go 🚀";
      store.tempMsg(2000);
      return;
    } 
    function calculateResult(): void {
      playBeep();
      store.animate = false;
      if (!store.operator) {
        store.message = 'Select an operator for your number.';
        store.tempMsg(2000);
        return;
      }
      if (store.operator === '=' 
      || (!store.operations && store.console === '0')) {
        clickAC();
        return;
      }
      // Add last operation before calculating
      store.operations = `${store.operations} ${store.operator} ${store.console}`;
      if (store.openPar &&
        store.operations[store.operations.length - 1] != ')') {
        store.operations = store.operations + ' )';
      }
      // Calculate operations
      store.addOperator('=');
      const operations = store.operations
        .replaceAll('x', '*')
        .replaceAll('÷', '/')
        .replaceAll('×ⁿ', '**')
        .replaceAll(/√\s*(\d+)/g, 'Math.sqrt($1)')
        .replaceAll(' ', '');
      let result = 0;
      try { 
        result = eval(operations);
      } catch {
        result = NaN;
        store.console = 'ERROR';
        return;
      }
      const total = Math.round((result + Number.EPSILON) * Math.pow(10, maxDecimals)) / Math.pow(10, maxDecimals);
      const totalSpit = String(total).split('.');
      store.number = totalSpit[0];
      if (totalSpit.length > 1) store.decimals = '.' + totalSpit[1];
      else store.decimals = '';
      store.updateConsole();
      store.addHistory();
      store.backBtn = false;
      // Sounds
      if (!total) playError();
      else playSuccess();
      // Success messages
      const randomMsgs = [
        'Great calculation!',
        'You are a 🧠',
        "2+2 is not always 4, isn't it? 🤔",
        'Fantastic! 👍',
        'You are a genius!',
        'Good job!',
        'Amazing!'
      ];
      const idx = Math.floor(Math.random() * randomMsgs.length + 1);
      store.message = randomMsgs[idx];
      return;
    }
    return {
      store,
      playBeep,
      clickNum,
      clickOperator,
      clickDecimals,
      clickDEL,
      clickAC,
      calculateResult,
    };
  }
}
</script>
<template>
  <div class="m-auto w-80">
    <div class="grid grid-cols-5 gap-1 text-s font-semibold text-center rounded-xl">
      <!-- 1 -->
      <button @click="clickNum(1)" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm rounded-tl-xl">
        1
      </button>
      <!-- 2 -->
      <button @click="clickNum(2)" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm">
        2
      </button>
      <!-- 3 -->
      <button @click="clickNum(3)" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm rounded-tr-xl">
        3
      </button>
      <!-- DEL -->
      <button @click="clickDEL()" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm rounded-tl-xl text-sm">
        DEL
      </button>
      <!-- AC -->
      <button @click="clickAC()"
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm rounded-tr-xl text-sm">
        AC
      </button>
      <!-- 4 -->
      <button @click="clickNum(4)" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm">
        4
      </button>
      <!-- 5 -->
      <button @click="clickNum(5)" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm">
        5
      </button>
      <!-- 6 -->
      <button @click="clickNum(6)" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm">
        6
      </button>
      <!-- + -->
      <button @click="clickOperator('+')" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm">
        +
      </button>
      <!-- - -->
      <button @click="clickOperator('-')" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm">
        -
      </button>
      <!-- 7 -->
      <button @click="clickNum(7)" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm">
        7
      </button>
      <!-- 8 -->
      <button @click="clickNum(8)" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm">
        8
      </button>
      <!-- 9 -->
      <button @click="clickNum(9)" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm">
        9
      </button>
       <!-- x -->
      <button @click="clickOperator('x')" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm text-sm">
        x
      </button>
      <!-- ÷ -->
      <button @click="clickOperator('÷')" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm">
        ÷
      </button>
      <!-- · -->
      <button @click="clickDecimals()" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm rounded-bl-xl">
        ·
      </button>
      <!-- 0 -->
      <button @click="clickNum(0)" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm">
        0
      </button>
      <!-- = -->
      <button @click="calculateResult()"
      v-on:keyup.enter="calculateResult()"
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm rounded-br-xl">
        =
      </button>
      <!-- xⁿ -->
      <button @click="clickOperator('×ⁿ')" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm rounded-bl-xl">
        ×ⁿ
      </button>
      <!-- √ -->
      <button @click="clickOperator('√')" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm rounded-br-xl text-sm">
        √
      </button>
    </div>
  </div>
</template>
