<script lang="ts">
import { ref , Ref } from 'vue';
import useStore from '../services/store';
import { History } from '../types';
export default {
  setup () {
    const store = useStore();
    const maxMemory = 10; // max operations cache
    // Keyboard functionality
    window.addEventListener('keypress', e => {
      if (e.key === '(') {
        store.openParenthesis();
      } else if (e.key === ')') {
        store.closeParenthesis();
      }
    });
    function clickANS(inverse: boolean): void {
      store.animate = false;
      if (store.history.length === 0) {
        store.message = 'Make calculations first to use ANS';
        return;
      }
      store.message = '';
      let hist: History;
      if (!inverse) {
        if (store.history.length === store.idx) {
          store.message = '✋ You have no more history!';
          return;
        }
        if (store.idx === maxMemory) {
          store.idx = 0;
          store.resetConsole();
          return alert(`Sorry, I can only record last ${maxMemory} operations 😞`);
        }
        hist = store.history[store.idx];
        store.idx++;
      } else {
        store.idx--;
        if (store.idx === 0) {
          store.message = "I'm ready, give me numbers! 😋";
          store.resetConsole();
          return;
        }
        hist = store.history[store.idx - 1];
      }
      store.operations = hist.operations;
      store.concatConsole(hist.result);
      store.operator = '=';
      return;
    }
    function delLastOperation(): void {
      const ops = store.operations.split(' ');
      const temp = ops.slice(0, ops.length - 2);
      store.operations = temp.join(' ');
      if (!store.operations) {
        store.backBtn = false;
        return;
      }
    }
    return {
      store,
      clickANS,
      delLastOperation
    }
  }
}
</script>
<template>
  <div class="my-8">
    <h1 class="p-2 mb-2 text-center uppercase text-sm tracking-widest text-gray-400" 
    :class="`text-${store.color}`">
      CALCULATOR 3000
    </h1>
    <div class="m-auto py-2 w-80 rounded-xl border shadow-inner"
    :class="store.dark ? `bg-black/50 text-white/80 border-white/30 shadow-${store.color}` : `bg-white/50 text-black/80 border-black/30 shadow-${store.color}`" >
      <!-- Parenthesis buttons -->
      <div class="flex justify-between">
        <button class="ml-3 rounded-full h-6 w-6 m-2 flex justify-center items-center shadow-xl text-xs font-bold" 
        :class="store.dark ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'"
        @click="store.openParenthesis()" >
          (
        </button>
        <button v-if="store.backBtn" :onclick="delLastOperation"
        class="text-md text-transparent bg-clip-text bg-gradient-to-r" 
        :class="`from-${store.color} to-orange-500`" >
          🗑️
        </button>
        <button class="mr-3 rounded-full h-6 w-6 m-2 flex justify-center items-center shadow-xl text-xs font-bold" 
        :class="store.dark ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'"
        @click="store.closeParenthesis()" >
          )
        </button>
      </div>
      <div class="m-auto px-8">
        {{ store.operations }}
      </div>
      <!-- Console number -->
      <div class="py-2 px-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r" 
      :class="`from-${store.color} to-orange-500`" >
        <div v-if="store.cursor > 0" >
          <span class="text-md">
            {{ store.operator }}
          </span> 
          {{ store.startMsg }}
          <span class="blink inline-block font-light -mx-1">
            |
          </span>
          {{ store.endMsg }}
        </div>
        <div v-else >
          <span class="text-md">
            {{ store.operator }}
          </span> 
          {{ store.console }}
        </div>
      </div>
      <!-- ANS & ^ buttons -->
      <div class="flex justify-between">
        <div class="flex">
          <button class="ml-3 rounded-full h-6 w-12 m-2 flex justify-center items-center shadow-sm text-xs font-bold" 
          :class="store.dark ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-gray-400' : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'"
          @click="clickANS(false)" >
            ANS
          </button>
          <button v-if="store.idx > 0"
          class="rounded-full mt-2 pt-1 h-6 w-6 flex justify-center items-center shadow-sm text-xs font-bold" 
          :class="store.dark ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-gray-400' : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'"
          @click="clickANS(true)" >
            ^
          </button>
        </div>
        <p class="pt-4 text-xs">
          {{ store.message }}
        </p>
        <div class="mt-2">
          <p class="mr-3 rounded-full h-6 w-8 m-2 flex justify-center text-xs text-gray-500" >
            [ {{String(store.idx)}} ]
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.blink {
  animation: blink-animation 1s steps(10, start) infinite;
  -webkit-animation: blink-animation 1s steps(5, start) infinite;
}
@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
@-webkit-keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
</style>