import { defineStore } from "pinia";
import { State, History, MoveCursor, CursorCmd } from "../types";
import { formatNumber } from "../utils";

const useStore = defineStore("main", {
  state: (): State => {
    return {
      console: "0",
      number: "0",
      decimals: "",
      operator: "",
      operations: "",
      history: [],
      idx: 0,
      dark: true,
      sound: true,
      color: "blue-500",
      heart: "💙",
      message: "👋 Welcome to CALCULATOR 3000",
      cursor: 0,
      startMsg: "",
      endMsg: "",
      animate: true,
    };
  },
  actions: {
    updateConsole(): void {
      this.console =
        formatNumber(Number(this.number)).replaceAll(",", " ") + this.decimals;
    },
    concatConsole(): void {
      const msg: string[] = (this.startMsg + this.endMsg).split(".");
      try {
        this.number = msg[0];
        this.decimals = msg[1];
      } catch {
        this.number = "0";
        this.decimals = "";
      }
      this.updateConsole();
    },
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
        result: this.console,
      };
      this.history.unshift(hist);
    },
    moveCursor(cmd: CursorCmd): MoveCursor | string {
      if (cmd === "<") this.cursor++;
      else if (cmd === ">") this.cursor--;
      else return "ERROR";
      const consoleTxt = this.number + this.decimals;
      if (this.cursor < 0) this.cursor = consoleTxt.length - 1;
      if (this.cursor > consoleTxt.length) this.cursor = 0;
      if (this.cursor === 0) this.message = "";
      const startMsg = consoleTxt.slice(0, consoleTxt.length - this.cursor);
      const endMsg = consoleTxt.slice(
        consoleTxt.length - this.cursor,
        consoleTxt.length
      );
      this.startMsg = startMsg;
      this.endMsg = endMsg;
      return {
        startMsg,
        endMsg,
      };
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
