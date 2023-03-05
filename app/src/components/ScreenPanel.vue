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
  <div class="m-auto my-8 py-2 w-80 rounded-xl border shadow-inner"
  :class="store.dark ? `bg-black border-${store.color} shadow-white/20` : 'bg-gray-400'">
    <div class="py-2 text-center text-2xl text-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600">
      {{ store.operations }}
    </div>
    <div class="py-4 text-4xl font-bold"
    :class="`text-${store.color}`" >
      <span class="text-md">{{ store.operator }}</span> {{ nf.format(Number(store.number)).replaceAll(',', ' ') }}{{ store.decimals }}
    </div>
  </div>
</template>
