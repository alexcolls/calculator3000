import { defineStore } from "pinia";

const useStore = defineStore("calculator", {
  state: () => {
    return {
      number: 0,
      operations: [],
      history: [],
      dark: true,
    };
  },
  getters: {
    doubleCount: (state) => state.number * 2,
  },
  actions: {
    increment() {
      this.number++;
    },
  },
});

export default useStore;
