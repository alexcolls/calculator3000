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
    <div class="text-4xl font-bold py-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600">
      {{ store.operator }} {{ nf.format(Number(store.number)).replaceAll(',', ' ') }}{{ store.decimals }}
    </div>
    <lo class="" 
    :class="store.dark ? 'bg-gray-700 shadow-white/20' : 'bg-gray-200 shadow-black/20'">
      <div v-for="x of store.operations" :key="x">
        {{ x }}
      </div>

    </lo>
  </div>
</template>
