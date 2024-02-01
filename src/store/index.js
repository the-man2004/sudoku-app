import { defineStore } from "pinia";

export const usePuzzleStore = defineStore("puzzleStore", {
  state: () => {
    return {
      puzzle: null,
      solution: null,
      difficulty: null,

      mistakes: null,
    };
  },
  getters: {},
  actions: {
    async fetchGame() {
      this.mistakes = 0;

      try {
        const response = await fetch(
          "https://sudoku-api.vercel.app/api/dosuku"
        );

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const responseData = await response.json();

        console.log(responseData);

        this.puzzle = responseData.newboard.grids[0].value;
        this.solution = responseData.newboard.grids[0].solution;
        this.difficulty = responseData.newboard.grids[0].difficulty;

        console.log(this.puzzle, this.solution, this.difficulty);
      } catch (err) {
        console.log(err.message);
      }
    },
  },
});
