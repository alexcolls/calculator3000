import { defineStore } from "pinia";

interface State {
  number: string;
  operations: string[];
  result: number;
  history: string[];
  dark: boolean;
  sound: boolean;
  color: string;
  heart: string;
}

const useStore = defineStore("main", {
  state: (): State => {
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
