
<script lang="ts">
import { ref } from 'vue';
import { getTime, getDate } from '../utils';
import useStore from '../services/store';
import SettingsButtons from './SettingsButtons.vue';
export default {
  components: {
    SettingsButtons
  },
  setup() {
    const store = useStore();
    const time = ref('');
    const date = ref('');
   
    setInterval( () => {
      time.value = getTime();
      date.value = getDate();
    }, 1000);
    return { 
      store,
      time,
      date,
    };
  }
}
</script>
<template>
  <div class="py-8 mt-16 text-center text-xs text-gray-400" 
  :class="store.dark ?
  'bg-black/90 shadow-gray-700 border-gray-200 text-gray-200' :
  'bg-white/90 shadow-gray-300 border-gray-900 text-gray-800'"> 
    <settings-buttons class="mt-4"/>
    <div class="py-4 flex flex-wrap justify-center items-center rounded-xl min-w-full">
      <!-- UTC date -->
      <div class="text-md tracking-widest font-semibold justify-center mr-4">
        {{ date }}
      </div>
      <!-- UTC time -->
      <div class="text-md tracking-widest font-semibold justify-center ml-4">
        {{ time }}<span class="text-xs"> UTC</span>
      </div>
    </div>
    <!-- Credits -->
    <div class="py-4 -mb-2">
      Calculator 3000 © 2023 — MIT License — Free rights of use.
    </div>  
  </div>
</template>