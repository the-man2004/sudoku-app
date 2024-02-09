import { defineStore } from "pinia";

export const usePuzzleStore = defineStore("puzzleStore", {
  state: () => {
    return {
      isLoading: false,

      puzzle: null,
      solution: null,
      difficulty: null,

      mistakes: null,
      hasHint: true,
      gameOver: false,
      finnished: false,
      selectedItem: null,
    };
  },
  getters: {
    puzzleArr: (state) => state.puzzle,
    solutionArr: (state) => state.solution,
    occurrencesOfNumber: (state) => {
      const counter = {};

      state.puzzle.forEach((el) => {
        if (counter[el]) {
          counter[el] += 1;
        } else {
          counter[el] = 1;
        }
      });

      console.log(counter);

      return counter;
    },
  },
  actions: {
    fillHint() {
      const id = this.selectedItem.dataset.id;

      this.puzzle[id] = this.solution[id];

      this.hasHint = false;
    },

    checkVictory() {
      if (!this.puzzle.includes(0)) {
        console.log("You won!!!");

        setTimeout(() => {
          this.finnished = true;
        }, 1500);
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
        setTimeout(() => {
          this.gameOver = true;
        }, 1500);
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
      this.hasHint = true;
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
