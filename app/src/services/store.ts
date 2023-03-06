import { defineStore } from "pinia";

interface State {
  number: string;
  decimals: string;
  operator: string;
  operations: string;
  result: number;
  history: History[];
  idx: number;
  dark: boolean;
  sound: boolean;
  color: string;
  heart: string;
  message: string;
}

interface History {
  operations: string;
  number: string;
}

const useStore = defineStore("main", {
  state: (): State => {
    return {
      number: "0",
      decimals: "",
      operator: "",
      operations: "",
      result: 0,
      history: [],
      idx: 0,
      dark: true,
      sound: true,
      color: "blue-500",
      heart: "💙",
      message: "👋 Welcome to CALCULATOR 3000",
    };
  },
  actions: {
    addOperator(op: string): void {
      const rest = ["+", "-"];
      if (
        op === "-" &&
        !rest.includes(this.operator) &&
        !this.operator.includes("-")
      )
        this.operator = this.operator + " -";
      else this.operator = op;
    },
    addOperation(op: string): void {
      if (!this.operations) this.operations = op;
      else this.operations += " " + op;
    },
    addHistory(): void {
      const hist: History = {
        operations: this.operations,
        number: this.number,
      };
      this.history.push(hist);
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
