
<script lang="ts">
import { ref } from 'vue';
import { getTime, getDate } from '../utils';
import useStore from '../services/store';

export default {

  setup() {
    const store = useStore();
    const time = ref('');
    const date = ref('');
    const trans = [] as any;
    setInterval( () => {
      time.value = getTime();
      date.value = getDate();
    }, 1000);
    return { 
      store,
      time,
      date,
      trans
    };
  }
}
</script>
<template>
<div class="mt-4">
        <div class=" grid grid-cols-12 font-semibold text-gray-400 ustify-center align-center align-middle pb-2">
          <div class="text-[11px] text-center col-span-2 ml-2">
            Date
          </div>
<div class="text-[11px] text-center col-span-2">
            Time
          </div>
<div class="text-[11px] text-center col-span-2">
            Type
          </div>
<div class="text-[11px] text-center col-span-2">
            BEEN
          </div>
<div class="text-[11px] text-center col-span-2 ml-2">
            From
          </div>
<div class="text-[11px] text-center col-span-1 ml-2">
            To
          </div>
        </div>
          <lo class="max-h-56 min-h-56 h-56 max-w-[330px] min-w-[280px] flex flex-col align-start overflow-y-auto p-2 rounded-xl shadow-inner" 
          :class="store.dark ? 'bg-gray-700 shadow-white/20' : 'bg-gray-200 shadow-black/20'">
  <div v-for="x of trans" :key="x.date+x.time">

     

  </div>
</lo>
</div>
</template>