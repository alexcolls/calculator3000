
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
  <div class="p-4 mt-4 text-center text-xs text-gray-400 min-w-full" > 
    <settings-buttons />
    <social-buttons />
    <div class="flex flex-wrap justify-center items-center rounded-xl m-4 mt-8 min-w-full">
      <!-- UTC date -->
      <div class="text-center text-md tracking-widest font-semibold justify-center mr-8 text-gray-400">
        {{ date }}
      </div>
      <!-- UTC time -->
      <div class="text-center text-md tracking-widest font-semibold justify-center mr-8 text-gray-400">
        {{ time }}<span class="text-xs"> UTC</span>
      </div>
    </div>
    <div class="mt-8">
      Made with 💙 for INNOCV SOLUTIONS <br/>2023 © <a href="https://github.com/quantium-rock/innocv-calculator" target="_blank">Free rights of use.</a>
    </div>
  </div>
</template>
