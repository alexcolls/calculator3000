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
      color: "blue-500",
      heart: "💙",
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
    changeHeart(heart: string) {
      this.heart = heart;
    },
  },
});

export default useStore;
