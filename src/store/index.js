import { defineStore } from "pinia";

export const usePuzzleStore = defineStore("puzzleStore", {
  state: () => {
    return {
      title: "Sudoki",
    };
  },
  getters: {},
  actions: {},
});
