
<script lang="ts">
import { defineComponent } from 'vue';
import useStore from './services/store';
import ScreenPanel from './components/ScreenPanel.vue';
import KeyboardPanel from './components/KeyboardPanel.vue';
import FooterBar from './components/FooterBar.vue';
// import HistoryList from './components/HistoryList.vue';

export default defineComponent({
  name: 'App',
  components: {
    ScreenPanel,
    KeyboardPanel,
    FooterBar,
    // HistoryList
  },
  setup() {
    const store = useStore();
    return {
      store
    }
  }
});
</script>

<template>
  <div class="lg:h-screen"
    :class="store.dark ?
    'bg-black/90 shadow-gray-700 border-gray-200 text-gray-200' :
    'bg-gray-100 shadow-gray-300 border-gray-900 text-gray-800'">
    <div class="flex justify-center align-middle p-4 pt-14">
      <a href="https://www.innocv.com/" target="_blank">
        <img alt="INNOCV logo" src="./assets/image/logo.png">
      </a>
    </div>
    <screen-panel />
    <keyboard-panel />
    <!-- <history-list /> -->
    <footer-bar />
  </div>
</template>

<style>
#app {
  text-align: center;
  height: 100% !important;
  width: 100% !important;
}
html {
  overflow-x: hidden;
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
  background:  linear-gradient(30deg, #1bd3247c, #21b913be);
  box-shadow: inset 0 0 6px #30d31b,
}
</style>