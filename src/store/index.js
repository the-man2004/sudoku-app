import { defineStore } from "pinia";

export const usePuzzleStore = defineStore("puzzleStore", {
  state: () => {
    return {
      isLoading: false,

      puzzle: null,
      solution: null,
      difficulty: null,

      mistakes: null,
      selectedItem: null,
    };
  },
  getters: {
    puzzleArr: (state) => {
      let finalArr = [];

      state.puzzle.forEach((el) => finalArr.push(...el));

      return finalArr;
    },
  },
  actions: {
    setSelectedItem(val) {
      console.log(val);

      this.selectedItem = val;
    },

    async fetchGame() {
      this.isLoading = true;
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

        this.isLoading = false;
      } catch (err) {
        console.log(err.message);

        this.isLoading = false;
      }
    },
  },
});
