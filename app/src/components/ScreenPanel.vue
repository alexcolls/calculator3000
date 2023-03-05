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
  :class="store.dark ? `bg-black/50 text-white/80 border-white/30 shadow-${store.color}` : `bg-white/50 text-black/80 border-black/30 shadow-${store.color}`">
    <div class="py-2 mt-2">
      {{ store.operations }}
    </div>
    <div class="py-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600" >
      <span class="text-md">{{ store.operator }}</span> {{ nf.format(Number(store.number)).replaceAll(',', ' ') }}{{ store.decimals }}
    </div>
  </div>
</template>
