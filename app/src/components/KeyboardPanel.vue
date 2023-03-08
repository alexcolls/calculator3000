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
    function clickNum(n: number): void {
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
    function clickOperator(op: string): void {
      store.message = '';
      store.idx = 0;
      if (store.operator === '=') {
        clickAC();
        return;
      }
      if (store.number === '0') {
        store.addOperator(op);
      } else {
        let operator = '+';
        if (store.operator) operator = store.operator;
        store.addOperation(`${operator} ${store.number}${store.decimals}`);
        store.addOperator(op);
        resetNum();
      }
    }
    function clickDecimals(): void {
      if (store.operator === '0') return;
      if (store.operator === '=') {
        clickAC();
        return;
      }
      if (store.decimals) store.decimals = '';
      else store.decimals = '.';
      store.updateConsole();
    }
    function resetNum(): void {
      store.number = '0';
      store.decimals = '';
      store.updateConsole();
    }
    function clickDEL(): void {
      store.message = '';
      store.idx = 0;
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
    }
    function clickAC(): void {
      resetNum();
      store.operator = '';
      store.operations = '';
      store.message = '';
      store.idx = 0;
      store.cursor = 0;
      return;
    } 
    function calculate(): void {
      if (store.operator === '=' 
       || (!store.operations && store.number === '0')) {
        playBeep();
        clickAC();
        return;
      }
      clickOperator(store.operator);
      store.addOperator('=');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const operations: any = {
        '+': (a: number, b: number): number => { return a + b },
        '-': (a: number, b: number): number => { return a - b },
        'x': (a: number, b: number): number => { return a * b },
        '÷': (a: number, b: number): number => { return a / b },
        'ⁿ': (a: number, b: number): number => { return Math.pow(a, b) },
        '√': (a: number, b: number): number => { return a + Math.sqrt(b) },
      };
      const ops = store.operations.split(' ');
      let result = Number(ops[1]);
      if (ops[0] === '-') result = -result;
      let num = 0;
      for (const op of ops) {
        console.log(op);
        if (/\d/.test(op)) {
          num = Number(op);
        } else {
          const opSplit = op.split(' '); // For negative operations. Example: op: 'x -'
          result = operations[opSplit[0]](result, num);
          if (opSplit.length > 1) result = -result;
        }
        console.log()
      }
      store.console = String(Math.round((result + Number.EPSILON) * Math.pow(10, maxDecimals)) / Math.pow(10, maxDecimals));
      // Sounds
      if (!Number(store.number)) playError();
      else playSuccess();
      // Success messages
      const randomMsgs = [
        'Great calculation!',
        'You are a 🧠',
        "2+2 is not always 4, isn't it? 🤔",
        'Fantastic! 👍',
        'You are a genius!'
      ];
      const idx = Math.floor(Math.random() * randomMsgs.length + 1);
      store.message = randomMsgs[idx];
      store.addHistory();
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
      calculate
    };
  }
}
</script>
<template>
  <div class="m-auto w-80">
    <div class="grid grid-cols-5 gap-1 text-s font-semibold text-center rounded-xl">
      <!-- 1 -->
      <button @click="[clickNum(1), playBeep()]" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm rounded-tl-xl">
        1
      </button>
      <!-- 2 -->
      <button @click="[clickNum(2), playBeep()]" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm">
        2
      </button>
      <!-- 3 -->
      <button @click="[clickNum(3), playBeep()]" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm rounded-tr-xl">
        3
      </button>
      <!-- DEL -->
      <button @click="[clickDEL(), playBeep()]" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm rounded-tl-xl text-sm">
        DEL
      </button>
      <!-- AC -->
      <button @click="[clickAC(), playBeep()]"
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm rounded-tr-xl text-sm">
        AC
      </button>
      <!-- 4 -->
      <button @click="[clickNum(4), playBeep()]" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm">
        4
      </button>
      <!-- 5 -->
      <button @click="[clickNum(5), playBeep()]" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm">
        5
      </button>
      <!-- 6 -->
      <button @click="[clickNum(6), playBeep()]" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm">
        6
      </button>
      <!-- + -->
      <button @click="[clickOperator('+'), playBeep()]" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm">
        +
      </button>
      <!-- - -->
      <button @click="[clickOperator('-'), playBeep()]" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm">
        -
      </button>
      <!-- 7 -->
      <button @click="[clickNum(7), playBeep()]" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm">
        7
      </button>
      <!-- 8 -->
      <button @click="[clickNum(8), playBeep()]" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm">
        8
      </button>
      <!-- 9 -->
      <button @click="[clickNum(9), playBeep()]" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm">
        9
      </button>
       <!-- x -->
      <button @click="[clickOperator('x'), playBeep()]" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm text-sm">
        x
      </button>
      <!-- ÷ -->
      <button @click="[clickOperator('÷'), playBeep()]" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm">
        ÷
      </button>
      <!-- · -->
      <button @click="[clickDecimals(), playBeep()]" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm rounded-bl-xl">
        ·
      </button>
      <!-- 0 -->
      <button @click="[clickNum(0), playBeep()]" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm">
        0
      </button>
      <!-- = -->
      <button @click="calculate()" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm rounded-br-xl">
        =
      </button>
      <!-- xⁿ -->
      <button @click="[clickOperator('×ⁿ'), playBeep()]" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm rounded-bl-xl">
        ×ⁿ
      </button>
      <!-- √ -->
      <button @click="[clickOperator('√'), playBeep()]" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm rounded-br-xl text-sm">
        √
      </button>
    </div>
  </div>
</template>
