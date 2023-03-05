<script lang="ts">
import useStore from '../services/store';

export default {
  setup () {
    const store = useStore();
    const nf = Intl.NumberFormat();
    return {
      store,
      nf
    }
  }
}
</script>
<template>
  <div class="m-auto py-8">
    <div class="text-center text-semibold text-xl py-2" 
    :class="[store.dark ? 'bg-gray-800 shadow-white/20' : 'bg-gray-200 shadow-black/20', `text-${store.color}`]">
      {{ store.operations }}
    </div>
    <div class="text-4xl mt-8 font-bold py-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600">
      <span class="text-md">{{ store.operator }}</span> {{ nf.format(Number(store.number)).replaceAll(',', ' ') }}{{ store.decimals }}
    </div>
  </div>
</template>
