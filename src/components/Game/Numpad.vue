<template>
  <div class="numpad">
    <button @click="handleBtnClick(1)">
      1
      <span>{{
        "1" in puzzleStore.occurrencesOfNumber
          ? 9 - puzzleStore.occurrencesOfNumber["1"]
          : 9
      }}</span>
    </button>
    <button @click="handleBtnClick(2)">
      2
      <span>{{
        "2" in puzzleStore.occurrencesOfNumber
          ? 9 - puzzleStore.occurrencesOfNumber["2"]
          : 9
      }}</span>
    </button>
    <button @click="handleBtnClick(3)">
      3
      <span>{{
        "3" in puzzleStore.occurrencesOfNumber
          ? 9 - puzzleStore.occurrencesOfNumber["3"]
          : 9
      }}</span>
    </button>
    <button @click="handleBtnClick(4)">
      4
      <span>{{
        "4" in puzzleStore.occurrencesOfNumber
          ? 9 - puzzleStore.occurrencesOfNumber["4"]
          : 9
      }}</span>
    </button>
    <button @click="handleBtnClick(5)">
      5
      <span>{{
        "5" in puzzleStore.occurrencesOfNumber
          ? 9 - puzzleStore.occurrencesOfNumber["5"]
          : 9
      }}</span>
    </button>
    <button @click="handleBtnClick(6)">
      6
      <span>{{
        "6" in puzzleStore.occurrencesOfNumber
          ? 9 - puzzleStore.occurrencesOfNumber["6"]
          : 9
      }}</span>
    </button>
    <button @click="handleBtnClick(7)">
      7
      <span>{{
        "7" in puzzleStore.occurrencesOfNumber
          ? 9 - puzzleStore.occurrencesOfNumber["7"]
          : 9
      }}</span>
    </button>
    <button @click="handleBtnClick(8)">
      8
      <span>{{
        "8" in puzzleStore.occurrencesOfNumber
          ? 9 - puzzleStore.occurrencesOfNumber["8"]
          : 9
      }}</span>
    </button>
    <button @click="handleBtnClick(9)">
      9
      <span>{{
        "9" in puzzleStore.occurrencesOfNumber
          ? 9 - puzzleStore.occurrencesOfNumber["9"]
          : 9
      }}</span>
    </button>
  </div>
</template>

<script setup>
import { usePuzzleStore } from "@/store";

const puzzleStore = usePuzzleStore();

const removeStyling = () => {
  const gameBoard = document.querySelector(".game-board");
  const items = [...document.querySelectorAll(".item")];

  // Remove styling
  gameBoard.style.background = "rgba(0, 0, 0, 0.3)";

  items.forEach((el) => {
    el.style.color = "black";
    el.style.background = "white";
  });
};

const showError = (item) => {
  const gameBoard = document.querySelector(".game-board");

  gameBoard.style.background = "rgba(255, 0, 0, 0.2)";

  item.style.background = "red";
  item.style.border = "5px solid white";

  setTimeout(() => {
    removeStyling();
  }, 1000);
};

const handleBtnClick = (num) => {
  if (puzzleStore.selectedItem !== null) {
    const item = document.getElementById(puzzleStore.selectedItem.dataset.id);
    const id = puzzleStore.selectedItem.dataset.id;

    const items = [...document.querySelectorAll(".item")];

    if (puzzleStore.solutionArr[id] === num) {
      puzzleStore.addPuzzlePiece(id, num);

      const filteredItems = items.filter((el) => +el.innerText === num);

      filteredItems.forEach((el) => {
        el.style.color = "white";
        el.style.background = "rgb(72, 72, 255)";
      });

      puzzleStore.checkVictory();
    } else {
      showError(item);
      puzzleStore.setSelectedItem(null);
      puzzleStore.increaseMistakes();
    }
  }
};

// Listens for a number button click
window.addEventListener("keydown", (event) => {
  const allowedKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  if (allowedKeys.includes(event.key) && puzzleStore.selectedItem !== null) {
    handleBtnClick(+event.key);
  }
});
</script>

<style scoped>
.numpad {
  margin: 15px 0;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 5px;
}

.numpad button {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 5px 0;

  font-size: 1.5rem;
  font-weight: 600;

  border-radius: 5px;

  background: rgb(72, 72, 255);
  color: white;

  cursor: pointer;
  transition: all 300ms ease;
}

.numpad button:hover,
.numpad button:focus {
  background: blue;
}

.numpad button span {
  font-size: 0.6em;
  font-weight: 500;
}
</style>
