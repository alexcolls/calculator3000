<script lang="ts">
// import { ref } from 'vue';
import useStore from '../services/store';
// import click_sound from '../../assets/sounds/beep.mp3';

export default {
  components: {

  },
  data() {
    return {
      number: 0
    }
  },
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
  <div class="m-auto w-[420px] p-2 mt-0">
    <div class="text-2xl py-1 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-600">
      <a class="text-xl mr-5 ">
        ⛏️ CALCULATE 
      </a>
      {{ nf.format(Number(number)).replaceAll(',', ' ') }}
    </div>
   
  </div>
</template>
