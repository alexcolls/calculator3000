import { defineStore } from "pinia";

const useStore = defineStore("main", {
  state: () => {
    return {
      number: 0,
      operations: [],
      history: [],
      dark: true,
      sound: true,
      color: "white/20",
    };
  },
  getters: {
    switchDark: (state) => !state.dark,
  },
  actions: {
    switchDark() {
      this.dark = !this.dark;
    },
    switchSound() {
      this.sound = !this.sound;
    },
    changeColor(color: string) {
      this.color = color;
    },
  },
});

export default useStore;
