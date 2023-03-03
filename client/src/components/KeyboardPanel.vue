<script lang="ts">
import useStore from '../services/store';
// import click_sound from '../assets/sound/beep.mp3';

export default {
  setup () {
    const store = useStore();
    const nf = Intl.NumberFormat();
    const maxNumber = 1000000000;
    // const audio = new Audio(click_sound);
    // Keyboard functionality
    function clickNum(n: number) {
      if (store.sound)
        // audio.play();
      if (store.number[0] === '0') {
        store.number = String(n);
        return;
      }
      if (Number(store.number) + n <= maxNumber) {
        store.number += n;
        return;
      } else {
        return alert(`store.number must be between -${nf.format(maxNumber)} and ${nf.format(maxNumber)}, including both.`);
      }
    }
    function deleteNum() {
      if (store.number.length > 1)
        store.number = store.number.slice(0, -1);
      else resetNum();
    }
    function resetNum() {
      store.number = '0';
    }
    return {
      store,
      nf,
      clickNum,
      deleteNum,
      resetNum,
      // audio
    };
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
      <!-- x -->
      <button @click="clickNum(6)" :class="store.dark ? 'bg-gray/900 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 align-middle relative border">
        x
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
      <!-- + -->
      <button @click="clickNum(9)" :class="store.dark ? 'bg-gray/900 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 rounded-br-xl align-middle relative border">
        +
      </button>
      <!-- - -->
      <button @click="clickNum(9)" :class="store.dark ? 'bg-gray/900 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 rounded-br-xl align-middle relative border">
        -
      </button>
      <!-- 0 -->
      <button @click="clickNum(7)" :class="store.dark ? 'bg-gray/900 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 rounded-bl-xl align-middle relative border">
        0
      </button>
      <!-- · -->
      <button @click="clickNum(7)" :class="store.dark ? 'bg-gray/900 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 rounded-bl-xl align-middle relative border">
        ·
      </button>
      <!-- ×10^ -->
      <button @click="clickNum(7)" :class="store.dark ? 'bg-gray/900 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 rounded-bl-xl align-middle relative border">
        ×10^
      </button>
      <!-- ANS -->
      <button @click="clickNum(7)" :class="store.dark ? 'bg-gray/900 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 rounded-bl-xl align-middle relative border">
        ANS
      </button>
      <!-- = -->
      <button @click="clickNum(7)" :class="store.dark ? 'bg-gray/900 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 rounded-bl-xl align-middle relative border">
        =
      </button> 
    </div>
  </div>
</template>
