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
  <div class="m-auto w-80">
    <div class="grid grid-cols-5 gap-1 text-s font-semibold text-center rounded-xl">
      <!-- 1 -->
      <button @click="clickNum(1)" :class="store.dark ? 'bg-gray/900 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 rounded-tl-xl align-middle relative border">
        1
      </button>
      <!-- 2 -->
      <button @click="clickNum(2)" :class="store.dark ? 'bg-gray/900 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 align-middle relative border">
        2
      </button>
      <!-- 3 -->
      <button @click="clickNum(3)" :class="store.dark ? 'bg-gray/900 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 rounded-tr-xl align-middle relative border">
        3
      </button>
      <!-- DEL -->
      <button @click="clickNum(4)" :class="store.dark ? 'bg-gray/900 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 align-middle relative border">
        DEL
      </button>
      <!-- AC -->
      <button @click="clickNum(4)" :class="store.dark ? 'bg-gray/900 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 align-middle relative border">
        AC
      </button>
      <!-- 4 -->
      <button @click="clickNum(4)" :class="store.dark ? 'bg-gray/900 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 align-middle relative border">
        4
      </button>
      <!-- 5 -->
      <button @click="clickNum(5)" :class="store.dark ? 'bg-gray/900 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 align-middle relative border">
        5
      </button>
      <!-- 6 -->
      <button @click="clickNum(6)" :class="store.dark ? 'bg-gray/900 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 align-middle relative border">
        6
      </button>
      <!-- X -->
      <button @click="clickNum(6)" :class="store.dark ? 'bg-gray/900 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 align-middle relative border">
        X
      </button>
      <!-- ÷ -->
      <button @click="clickNum(6)" :class="store.dark ? 'bg-gray/900 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 align-middle relative border">
        ÷
      </button>
      <!-- 7 -->
      <button @click="clickNum(7)" :class="store.dark ? 'bg-gray/900 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 rounded-bl-xl align-middle relative border">
        7
      </button>
      <!-- 8 -->
      <button @click="clickNum(8)" :class="store.dark ? 'bg-gray/900 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 align-middle relative border">
        8
      </button>
      <!-- 9 -->
      <button @click="clickNum(9)" :class="store.dark ? 'bg-gray/900 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 rounded-br-xl align-middle relative border">
        9
      </button>
      <!-- none -->
      <button @click="resetNum()"  :class="store.dark ? 'bg-gray/900 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-2 px-2 rounded-3xl m-3 align-middle relative border"></button>
      <!-- 0 -->
      <button @click="clickNum(0)" :class="store.dark ? 'bg-gray/900 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 rounded-b-xl align-middle relative border">
        0
      </button>
      <!-- reset -->
      <button @click="deleteNum()" :class="store.dark ? 'bg-gray/900 hover:bg-green-600' : 'bg-gray-50 hover:bg-green-600'" class="py-2 px-2 rounded-3xl m-3 align-middle relative border border-green-600">⛏️</button>          
    </div>
  </div>
</template>
