import { defineStore } from "pinia";

interface State {
  number: string;
  decimals: string;
  operator: string;
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
      decimals: "",
      operator: "",
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
    addOperator(op: string): void {
      this.operator = op;
    },
    switchDark(): void {
      this.dark = !this.dark;
    },
    switchSound(): void {
      this.sound = !this.sound;
    },
    changeColor(color: string): void {
      this.color = color;
    },
    changeHeart(heart: string): void {
      this.heart = heart;
    },
  },
});

export default useStore;
