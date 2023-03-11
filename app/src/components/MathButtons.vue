<script lang="ts">
import { ref, Ref } from 'vue';
import { MoveCursor } from '../types';
import useStore from '../services/store';
import beep_sound from '../assets/sounds/beep.mp3';
export default {
  setup () {
    const store = useStore();
    const cursorConsole: Ref<MoveCursor | string> = ref({
      startMsg: '',
      endMsg: ''
    });
    // Sounds
    const beep_ = new Audio(beep_sound);
    function playBeep(): void { if (store.sound) beep_.play(); }
    // Keyboard functionality
    window.addEventListener('keypress', e => {
      if (e.key === 'left') {
        clickLeft();
      } else if (e.key === 'right') {
        clickRight();
      } else if (e.key === '=') {
        store.animate = false;
        store.message = 'Keyboard input not supported: ' + e.key;
        store.tempMsg(2000);
      } else if (e.key == 'p') {
        clickPi();
      } else if (e.key == 'g') {
        clickPi();
      } else if (e.key == 'u') {
        clickPi();
      }
    });
    function clickPi(): void {
      if (store.operator === '=') store.resetConsole();
      store.message = 'The Great Pi!';
      store.number = '3'
      store.decimals = '.1415926536';
      store.updateConsole();
    }
    function clickPhi(): void {
      if (store.operator === '=') store.resetConsole();
      store.message = 'Phi, the Golden Ratio!';
      store.number = '1'
      store.decimals = '.6180339887';
      store.updateConsole();
    }
    function clickEuler(): void {
      if (store.operator === '=') store.resetConsole();
      store.message = "Euler's number!";
      store.number = '2'
      store.decimals = '.7182818284';
      store.updateConsole();
    }
    function clickLeft(): void {
      if (store.number === '0') return;
      store.message = '< Left';
      store.tempMsg(2000);
      cursorConsole.value = store.moveCursor('<');
      if (cursorConsole.value === 'ERROR') console.log("Move cursor left input error! Should be '<' ");
    }
    function clickRight(): void {
      if (store.number === '0') return;
      store.message = 'Right >';
      store.tempMsg(2000);
      cursorConsole.value = store.moveCursor('>');
      if (cursorConsole.value === 'ERROR') console.log("Move cursor right input error! Should be '>' ");
    }
    return {
      store,
      playBeep,
      clickPi,
      clickPhi,
      clickEuler,
      clickLeft,
      clickRight
    };
  }
}
</script>
<template>
  <div class="m-auto w-80">
    <div class="grid grid-cols-5 gap-1 text-s font-semibold text-center rounded-xl">
      <!-- π -->
      <button @click="[clickPi(), playBeep()]" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm rounded-bl-xl rounded-tl-xl">
        π
      </button>
      <!-- Φ -->
      <button @click="[clickPhi(), playBeep()]" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm">
        Φ
      </button>
      <!-- e -->
      <button @click="[clickEuler(), playBeep()]" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm rounded-br-xl rounded-tr-xl">
        e
      </button>
      <!-- < -->
      <button @click="[clickLeft(), playBeep()]"
      v-on:keyup.left="[clickLeft(), playBeep()]"
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm rounded-bl-xl rounded-tl-xl">
        &lt;
      </button>
      <!-- > -->
      <button @click="[clickRight(), playBeep()]"
      v-on:keyup.right="[clickRight(), playBeep()]"
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm rounded-br-xl rounded-tr-xl">
        &gt;
      </button>
    </div>
  </div>
</template>