<script lang="ts">
import useStore from '../services/store';
// import click_sound from '../assets/sound/beep.mp3';

export default {
  setup () {
    const store = useStore();
    const nf = Intl.NumberFormat();
    const maxNumber = 1000000000000; // trillion
    const maxDecimals = 8;
    const audio = new Audio();
    const audio2 = new Audio();
    function playSound(): void {
      if (store.sound) audio.play();
    }
    function playSound2(): void {
      if (store.sound) audio2.play();
    }
    // Keyboard functionality
    function clickNum(n: number): void {
      store.message = '';
      store.idx = 0;
      if (store.operator === '=') clickAC();
      if (!store.decimals) {
        if (store.number[0] === '0') {
          store.number = String(n);
          return;
        }
        if (Number(store.number) + n <= maxNumber) {
          store.number += n;
          return;
        } else {
          return alert(`Number must be between -${nf.format(maxNumber)} and ${nf.format(maxNumber)}, including both.`);
        }
      } else {
        if (store.decimals.length > maxDecimals)
          return alert(`Sorry, maximum ${maxDecimals} decimals allowed.`);
        else store.decimals += n;
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
    }
    function resetNum(): void {
      store.number = '0';
      store.decimals = '';
    }
    function clickDEL(): void {
      store.message = '';
      store.idx = 0;
      if (store.operator === '=') {
        clickAC();
        return;
      }
      if (store.number === '0') {
        store.operator = '';
        return;
      }
      if (store.decimals) {
        store.decimals = store.decimals.slice(0, -1);
        return;
      }
      if (store.number.length > 1) {
        store.number = store.number.slice(0, -1);
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
      return;
    } 
    function calculate(): void {
      if (store.operator === '=' 
       || (!store.operations && store.number === '0')) {
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
      store.number = String(Math.round((result + Number.EPSILON) * Math.pow(10, maxDecimals)) / Math.pow(10, maxDecimals));
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
      playSound,
      playSound2,
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
      <!-- φ -->
      <button @click="[clickDecimals(), playSound()]" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm rounded-bl-xl rounded-tl-xl">
        φ
      </button>
      <!-- 0 -->
      <button @click="[clickNum(0), playSound()]" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm">
        0
      </button>
      <!-- = -->
      <button @click="[calculate(), playSound2()]" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm">
        =
      </button>
      <!-- xⁿ -->
      <button @click="[clickOperator('×ⁿ'), playSound()]" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm">
        ×ⁿ
      </button>
      <!-- √ -->
      <button @click="[clickOperator('√'), playSound()]" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm rounded-br-xl rounded-tr-xl">
        √
      </button>
    </div>
  </div>
</template>
