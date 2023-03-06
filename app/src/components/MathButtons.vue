<script lang="ts">
import useStore from '../services/store';
// import click_sound from '../assets/sound/beep.mp3';

export default {
  setup () {
    const store = useStore();
    const audio = new Audio();
    function playSound(): void {
      if (store.sound) audio.play();
    }
    // Keyboard functionality
    function clickPi(): void {
      store.message = 'The great Pi!';
      store.number = '3'
      store.decimals = '.1415926536';
    }
    function clickPhi(): void {
      store.message = 'Phi, the Golden Ratio!';
      store.number = '1'
      store.decimals = '.6180339887';
    }
    function clickEuler(): void {
      store.message = "Euler's number!";
      store.number = '2'
      store.decimals = '.7182818284';
    }
    function clickLeft(): void {
      store.message = '< Left';
      return;
    }
    function clickRight(): void {
      store.message = 'Right >';
      return;
    }
    return {
      store,
      playSound,
      clickPi,
      clickPhi,
      clickEuler,
      clickLeft,
      clickRight,
    };
  }
}
</script>
<template>
  <div class="m-auto w-80">
    <div class="grid grid-cols-5 gap-1 text-s font-semibold text-center rounded-xl">
      <!-- π -->
      <button @click="[clickPi(), playSound()]" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm rounded-bl-xl rounded-tl-xl">
        π
      </button>
      <!-- Φ -->
      <button @click="[clickPhi(), playSound()]" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm">
        Φ
      </button>
      <!-- e -->
      <button @click="[clickEuler(), playSound()]" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm rounded-br-xl rounded-tr-xl">
        e
      </button>
      <!-- < -->
      <button @click="[clickLeft(), playSound()]" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm rounded-bl-xl rounded-tl-xl">
        &lt;
      </button>
      <!-- > -->
      <button @click="[clickRight(), playSound()]" 
      :class="[store.dark ? 'bg-gray/900 hover:bg-gray-600 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100',
      `shadow-${store.color}`]" 
      class="py-4 px-2 align-middle relative border shadow-sm rounded-br-xl rounded-tr-xl">
        &gt;
      </button>
    </div>
  </div>
</template>
