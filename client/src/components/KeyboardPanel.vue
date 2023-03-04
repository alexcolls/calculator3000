<script lang="ts">
import useStore from '../services/store';
// import click_sound from '../assets/sound/beep.mp3';

export default {
  setup () {
    const store = useStore();
    const nf = Intl.NumberFormat();
    const maxNumber = 1000000000000; // trillion
    const maxDecimals = 8;
    // const audio = new Audio(click_sound);
    // Keyboard functionality
    function clickNum(n: number): void {
      if (store.sound)
        // audio.play();
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
          return alert(`Sorry, maximum decimals allowed is ${maxDecimals}.`);
        else
          store.decimals += n;
      }
    }
    function clickOperator(op: string): void {
      if (store.sound)
        // audio.play();
      if (store.number === '0' && op === '-')
        store.negative = true;
      else store.operations.push(`${op} ${store.number}${store.decimals}`);
      resetNum();

      return;
    }
    function clickDecimals(): void {
      if (store.sound)
        // audio.play();
      if (store.decimals)
        store.decimals = '';
      else
        store.decimals = '.';
    }
    function deleteNum(): void {
      if (store.sound)
        // audio.play();
      if (store.number.length > 1)
        store.number = store.number.slice(0, -1);
      else resetNum();
    }
    function resetNum(): void {
      if (store.sound)
        // audio.play();
      store.number = '0';
      store.decimals = '';
      store.negative = false;
    }
    function clickAC(): void {
      resetNum();
      store.operations = [];
      return;
    }
    function calculate(): void {
      return;
    }
    return {
      store,
      // audio
      clickNum,
      clickOperator,
      clickDecimals,
      deleteNum,
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
      <button @click="deleteNum()" 
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
      <button @click="clickOperator('*')" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm text-sm">
        x
      </button>
      <!-- ÷ -->
      <button @click="clickOperator('/')" 
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
      <button @click="clickOperator('.')" 
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
      <button @click="clickOperator('^')" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm rounded-bl-xl">
        ×ⁿ
      </button>
      <!-- √ -->
      <button @click="clickOperator('//')" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm rounded-br-xl text-sm">
        √
      </button> 
    </div>
  </div>
</template>
