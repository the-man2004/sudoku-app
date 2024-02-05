import { defineStore } from "pinia";

export const usePuzzleStore = defineStore("puzzleStore", {
  state: () => {
    return {
      isLoading: false,

      puzzle: null,
      solution: null,
      difficulty: null,

      mistakes: null,
      gameOver: false,
      finnished: false,
      selectedItem: null,
    };
  },
  getters: {
    puzzleArr: (state) => state.puzzle,
    solutionArr: (state) => state.solution,
  },
  actions: {
    checkVictory() {
      if (!this.puzzle.includes(0)) {
        console.log("You won!!!");

        this.finnished = true;
      }
    },

    addPuzzlePiece(position, val) {
      this.puzzle[position] = val;
    },

    setSelectedItem(val) {
      this.selectedItem = val;
    },

    increaseMistakes() {
      this.mistakes++;

      if (this.mistakes >= 3) {
        this.gameOver = true;
      }
    },

    unpackArr(array) {
      let finalArr = [];

      array.forEach((el) => finalArr.push(...el));

      return finalArr;
    },

    async fetchGame() {
      this.isLoading = true;
      this.mistakes = 0;
      this.gameOver = false;
      this.finnished = false;

      try {
        const response = await fetch(
          "https://sudoku-api.vercel.app/api/dosuku"
        );

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const responseData = await response.json();

        console.log(responseData);

        this.puzzle = this.unpackArr(responseData.newboard.grids[0].value);
        this.solution = this.unpackArr(responseData.newboard.grids[0].solution);
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
