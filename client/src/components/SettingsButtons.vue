<script lang="ts">
import useStore from '../services/store';

export default {
  setup() {
    const store = useStore();
    return { store };
  },
  data() {
    return {
      colorModal: false,
      sound_black: require("../../../assets/ico/sound.png"),
      sound_white: require("../../../assets/ico/sound-white.png"),
      mute_black: require("../../../assets/ico/mute.png"),
      mute_white: require("../../../assets/ico/mute-white.png"),
      userColor: {
        white: 'white',
        black: 'black',
        red: 'red',
        green: 'green',
        blue: 'blue',
        purple: 'purple',
        pink: 'pink',
        violet: 'violet'

      }
    }
  }
}
</script>
<template>
<div>
<div class="z-50 absolute top-0 -bottom-50 h-full left-0 right-0 w-full" @click="colorModal=false" v-if="colorModal"></div>
<div class="flex justify-center p-4">
  <!-- Sound Button -->
  <button class="rounded-full h-8 w-8 m-2 flex justify-center items-center shadow-xl" 
  @click="store.dispatch('switchSound')" 
  :class="store.state.dark ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'">
    <img v-if="store.state.sound" :src="store.state.dark ? sound_white : sound_black" class="h-4 w-4"/>
    <img v-else :src="store.state.dark ? mute_white : mute_black" class="h-4 w-4"/>
  </button>
  <!-- Color Button -->
  <button 
  class="rounded-full h-8 w-8 m-2 flex justify-center items-center shadow-xl"
  @click="colorModal=!colorModal"
  :class="store.state.dark ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'">
    <div class="h-4 w-4 rounded-full"
    :class="`bg-${store.state.userColor}`"></div>
    <div v-if="colorModal"
    class="z-50 absolute mt-72 py-4 flex flex-wrap justify-center w-36 p-2 rounded-xl shadow-xl"
    :class="store.state.dark ? 'bg-gray-900 shadow-gray-700' : 'bg-white'">
      <!-- dark mode -->
      <button class="rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl" 
      @click="store.dispatch('dispatchUserColor', 'white/90')"
      :class="store.state.dark ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'"
      v-if="store.state.dark">
        <div class="h-4 w-4 bg-white/90 rounded-full"></div>
      </button>
      <button class="rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl" 
      @click="store.dispatch('dispatchUserColor', 'white/60')"
      :class="store.state.dark ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'"
      v-if="store.state.dark">
        <div class="h-4 w-4 bg-white/60 rounded-full"></div>
      </button>
      <button class="rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl" 
      @click="store.dispatch('dispatchUserColor', 'white/20')"
      :class="store.state.dark ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'"
      v-if="store.state.dark">
        <div class="h-4 w-4 bg-white/20 rounded-full"></div>
      </button>
      <!-- light mode -->
      <div class="flex" v-if="!store.state.dark">
        <button class="rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl" 
        @click="store.dispatch('dispatchUserColor', 'black/90')"
        :class="store.state.dark ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'">
          <div class="h-4 w-4 bg-black/90 rounded-full"></div>
        </button>
        <button class="rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl" 
        @click="store.dispatch('dispatchUserColor', 'black/60')"
        :class="store.state.dark ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'">
          <div class="h-4 w-4 bg-black/60 rounded-full"></div>
        </button>
        <button class="rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl"
        @click="store.dispatch('dispatchUserColor', 'black/20')"
        :class="store.state.dark ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'">
          <div class="h-4 w-4 bg-black/20 rounded-full"></div>
        </button>
      </div>
      <!-- Red Colors -->
      <button class="rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl"
      @click="store.dispatch('dispatchUserColor', 'red-500')"
      :class="store.state.dark ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'">
        <div class="h-4 w-4 bg-red-500 rounded-full"></div>
      </button>
      <button class="rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl"
      @click="store.dispatch('dispatchUserColor', 'orange-500')"
      :class="store.state.dark ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'">
        <div class="h-4 w-4 bg-orange-500 rounded-full"></div>
      </button>
      <button class="rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl" 
      @click="store.dispatch('dispatchUserColor', 'yellow-500')"
      :class="store.state.dark ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'">
        <div class="h-4 w-4 bg-yellow-500 rounded-full"></div>
      </button>
      <!-- Green Colors -->
      <button class="rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl" 
      @click="store.dispatch('dispatchUserColor', 'green-500')"
      :class="store.state.dark ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'">
        <div class="h-4 w-4 bg-green-500 rounded-full"></div>
      </button>
      <button class="rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl" 
      @click="store.dispatch('dispatchUserColor', 'lime-500')"
      :class="store.state.dark ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'">
        <div class="h-4 w-4 bg-lime-500 rounded-full"></div>
      </button>
      <button class="rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl"
      @click="store.dispatch('dispatchUserColor', 'emerald-500')"
      :class="store.state.dark ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'">
        <div class="h-4 w-4 bg-emerald-300 rounded-full"></div>
      </button>
      <!-- Blue Colors -->
      <button class="rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl"
      @click="store.dispatch('dispatchUserColor', 'blue-500')"
      :class="store.state.dark ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'">
        <div class="h-4 w-4 bg-blue-600 rounded-full"></div>
      </button>
      <button class="rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl" 
      @click="store.dispatch('dispatchUserColor', 'sky-500')"
      :class="store.state.dark ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'">
        <div class="h-4 w-4 bg-sky-500 rounded-full"></div>
      </button>
      <button class="rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl" 
      @click="store.dispatch('dispatchUserColor', 'cyan-500')"
      :class="store.state.dark ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'">
        <div class="h-4 w-4 bg-cyan-400 rounded-full"></div>
      </button>
      <!-- Pink Colors -->
      <button class="rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl" 
      @click="store.dispatch('dispatchUserColor', 'purple-500')"
      :class="store.state.dark ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'">
        <div class="h-4 w-4 bg-purple-500 rounded-full"></div>
      </button>
      <button class="rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl" 
      @click="store.dispatch('dispatchUserColor', 'fuchsia-500')"
      :class="store.state.dark ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'">
        <div class="h-4 w-4 bg-fuchsia-500 rounded-full"></div>
      </button>
      <button class="rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl"
      @click="store.dispatch('dispatchUserColor', 'pink-500')"
      :class="store.state.dark ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'">
        <div class="h-4 w-4 bg-pink-500 rounded-full"></div>
      </button>
    </div>
  </button>
  <!-- Dark/Light Button -->
  <button class="rounded-full h-8 w-8 m-2 flex justify-center items-center shadow-xl" 
  @click="[store.dispatch('switchDark'), 
  store.state.userColor.includes('white') && !store.state.dark ? store.dispatch('dispatchUserColor', store.state.userColor.replace('white', 'black')) : '',
  store.state.userColor.includes('black') && store.state.dark ? store.dispatch('dispatchUserColor', store.state.userColor.replace('black', 'white')) : '']" 
  :class="store.state.dark ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'">
    <svg v-if="store.state.dark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  </button>
</div>
<div class="bg-black/90 shadow-black/90"></div>
<div class="bg-black/60 shadow-black/60"></div>
<div class="bg-black/20 shadow-black/20"></div>
<div class="bg-white/90 shadow-white/90"></div>
<div class="bg-white/60 shadow-white/60"></div>
<div class="bg-white/20 shadow-white/20"></div>
<div class="bg-red-500 shadow-red-500"></div>
<div class="bg-orange-500 shadow-orange-500"></div>
<div class="bg-yellow-500 shadow-yellow-500"></div>
<div class="bg-green-500 shadow-green-500"></div>
<div class="bg-emerald-500 shadow-emerald-500"></div>
<div class="bg-lime-500 shadow-lime-500"></div>
<div class="bg-blue-500 shadow-blue-500"></div>
<div class="bg-sky-500 shadow-sky-500"></div>
<div class="bg-cyan-500 shadow-cyan-500"></div>
<div class="bg-purple-500 shadow-purple-500"></div>
<div class="bg-fuchsia-500 shadow-fuchsia-500"></div>
<div class="bg-pink-500 shadow-pink-500"></div>
</div>
</template>