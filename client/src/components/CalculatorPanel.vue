<script lang="ts">
// import { ref } from 'vue';
// import click_sound from '../../assets/sounds/beep.mp3';

export default {
  components: {

  },
  data() {
    return {
      number: 0,
     
    }
  },
  setup () {
    const nf = Intl.NumberFormat();


    return {
      nf
     
    }
  },
  methods: {
    clickNum(num:number): void {
      this.number = num;
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
    <div class="grid grid-cols-3 gap-1 text-s font-semibold text-center py-4 px-6 rounded-xl">
      <button @click="clickNum(1)" :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 rounded-tl-xl align-middle relative border">1</button>
      <button @click="clickNum(2)" :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 align-middle relative border">2</button>
      <button @click="clickNum(3)" :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 rounded-tr-xl align-middle relative border">3</button>
      <button @click="clickNum(4)" :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 align-middle relative border">4</button>
      <button @click="clickNum(5)" :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 align-middle relative border">5</button>
      <button @click="clickNum(6)" :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 align-middle relative border">6</button>
      <button @click="clickNum(7)" :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 rounded-bl-xl align-middle relative border">7</button>
      <button @click="clickNum(8)" :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 align-middle relative border">8</button>
      <button @click="clickNum(9)" :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 rounded-br-xl align-middle relative border">9</button>
      <button @click="resetNum()"  :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-2 px-2 rounded-3xl m-3 align-middle relative border">↻</button>
      <button @click="clickNum(0)" :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 rounded-b-xl align-middle relative border">0</button>
      <button @click="deleteNum()" :class="store.state.dark ? 'bg-gray-600 hover:bg-green-600' : 'bg-gray-50 hover:bg-green-600'" class="py-2 px-2 rounded-3xl m-3 align-middle relative border border-green-600">⛏️</button>          
    <div/>
  <div/>
</template>
