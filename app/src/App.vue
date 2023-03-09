<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
import ConsoleScreen from './components/ConsoleScreen.vue';
import KeyboardPanel from './components/KeyboardPanel.vue';
import MathButtons from './components/MathButtons.vue';
import FooterBar from './components/FooterBar.vue';
import useStore from './services/store';
export default defineComponent({
  name: 'App',
  components: {
    ConsoleScreen,
    KeyboardPanel,
    FooterBar,
    MathButtons,
  },
  setup() {
    const store = useStore();
    const animate: Ref<boolean> = ref(true);
    const onClick = () => { 
      animate.value = !animate.value;
      store.animate = !animate.value;
    };
    return {
      store,
      animate,
      onClick
    }
  }
});
</script>
<template>
  <div class="min-h-screen"
  :class="store.dark ?
  'bg-black/90 shadow-gray-700 border-gray-200 text-gray-200' :
  'bg-gray-100 shadow-gray-300 border-gray-900 text-gray-800'">
    <div class="p-4 pt-20 flex justify-center align-middle"
    v-on:click="onClick()">
      <a href="https://www.innocv.com/" target="_blank">
        <img alt="INNOCV logo" src="./assets/images/logo.png"
        :class="store.animate ? 'animate-fadein animate-bounce' : 'animate-none'">
      </a>
    </div>
    <div class="main">
      <console-screen />
      <keyboard-panel />
      <math-buttons class="py-8 pb-14 m-auto"/>
      <h2 class="p-2 mb-2 text-center uppercase text-xs tracking-widest text-gray-500">
        YOU CAN USE YOUR KEYBOARD
      </h2>
    </div>
    <footer-bar class="m-auto"/>
  </div>
</template>
<style>
#app {
  text-align: center;
  height: 100% !important;
  width: 100% !important;
  margin: auto;
}
html {
  box-sizing: content-box;
  overflow-x: hidden;
}
.main  {
  height: 100%;
  width: 100%;
  margin: auto;
}
::-webkit-scrollbar {
  width: 3px;
  height: 3px;
  background-color: transparent !important;
}
::-webkit-scrollbar-track {
  background-color: rgba(179, 179, 179, 0.692);
  border-radius: 1rem;
  margin: 0.4rem;
  margin-top: 0.4rem;
  border-left: 1px solid rgba(211, 211, 211, 0);
}
::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background:  linear-gradient(30deg, #F69F8A, #335B7F);
  box-shadow: inset 0 0 6px #A66684,
}
</style>