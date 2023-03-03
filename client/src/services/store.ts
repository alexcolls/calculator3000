import { defineStore } from "pinia";

const useStore = defineStore("main", {
  state: () => {
    return {
      number: "0",
      operations: [],
      result: 0,
      history: [],
      dark: true,
      sound: true,
      color: "white/20",
    };
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
