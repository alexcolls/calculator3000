<script lang="ts">
import useStore from '../services/store';

export default {
  setup () {
    const store = useStore();
    const nf = Intl.NumberFormat();
    function openParenthesis() {
      let op = store.operator;
      if (!op) op = '*';
      store.operations = `${store.operations} ${op} (`;
    }
    function closeParenthesis() {
      store.operations = store.operations + ' )';
    }
    return {
      store,
      nf,
      openParenthesis,
      closeParenthesis
    }
  }
}
</script>
<template>
  <div class="my-8">
    <h1 class="p-2 mb-2 text-center uppercase text-sm tracking-widest text-gray-400" 
    :class="`text-${store.color}`">
      CALCULATOR 3000
    </h1>
    <div class="m-auto py-2 w-80 rounded-xl border shadow-inner"
    :class="store.dark ? `bg-black/50 text-white/80 border-white/30 shadow-${store.color}` : `bg-white/50 text-black/80 border-black/30 shadow-${store.color}`" >
      <button class="ml-3 rounded-full h-6 w-6 m-2 flex justify-center items-center shadow-xl text-xs font-bold" 
      @click="openParenthesis()" 
      :class="store.dark ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'">
       (
      </button>
      <div class="py-2 mt-2">
        {{ store.operations }}
      </div>
      <div class="py-2 mb-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r" 
      :class="`from-${store.color} to-orange-600`" >
        <span class="text-md">{{ store.operator }}</span> {{ nf.format(Number(store.number)).replaceAll(',', ' ') }}{{ store.decimals }}
      </div>
    </div>
  </div>
</template>
