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
  },
  methods: {
    clickNum(num:number): void {
      console.log(num);
      // TODO
    },
    resetNum(): void {
      // TODO
    },
    deleteNum(): void {
      // TODO
    }
  }
}
</script>
<template>
  <div class="m-auto p-2 py-8">
    <div class="text-4xl font-bold py-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600">
      {{ nf.format(Number(store.number)).replaceAll(',', ' ') }}
    </div>
   
  </div>
</template>
