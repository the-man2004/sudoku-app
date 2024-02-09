<template>
  <div class="game">
    <div class="indicators">
      <span>Difficulty: {{ puzzleStore.difficulty }}</span>
      <span>Mistakes: {{ puzzleStore.mistakes }}/3</span>
    </div>
    <div class="game-board">
      <div
        v-for="(number, index) in puzzleStore.puzzleArr"
        :key="index"
        :id="index"
        :data-id="index"
        @click="handleItemClick($event)"
        class="item"
      >
        {{ number === 0 ? "" : number }}
      </div>
    </div>
    <!-- Hit -->
    <Hint></Hint>
    <!-- Placeholder -->
    <Numpad></Numpad>
  </div>
</template>

<script setup>
import { usePuzzleStore } from "../store/index";
import Numpad from "./Game/Numpad.vue";
import Hint from "./Game/Hint.vue";

const puzzleStore = usePuzzleStore();

// Functions
const removeStyling = () => {
  const gameBoard = document.querySelector(".game-board");
  const items = [...document.querySelectorAll(".item")];

  // Remove styling
  gameBoard.style.background = "rgba(0, 0, 0, 0.3)";

  items.forEach((el) => {
    el.style.color = "black";
    el.style.background = "white";
    // el.style.border = "none";
  });
};

const handleItemClick = (event) => {
  const items = [...document.querySelectorAll(".item")];

  // Remove styling
  removeStyling();

  // Checks if item has no value
  if (event.target.innerText === "") {
    puzzleStore.setSelectedItem(event.target);

    event.target.style.color = "white";
    event.target.style.background = "rgb(72, 72, 255)";
  }

  // Checks if item has a value
  if (event.target.innerText !== "") {
    puzzleStore.setSelectedItem(null);

    const selectedNum = event.target.innerText;

    const filteredItems = items.filter((el) => +el.innerText === +selectedNum);

    filteredItems.forEach((el) => {
      el.style.color = "white";
      el.style.background = "rgb(72, 72, 255)";
    });
  }
};
</script>

<style scoped>
.game {
  padding: 0 1rem;
  margin: auto;
  max-width: 500px;
}

.indicators {
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
}

.indicators span {
  font-weight: 700;
}

.game-board {
  position: relative;

  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 5px;

  aspect-ratio: 1 / 1;
  border: 5px solid black;
  z-index: 10;

  background: rgba(0, 0, 0, 0.3);
}

.game-board::after {
  content: "";
  position: absolute;
  top: calc(33% - 2.5px);
  bottom: calc(33% - 2.5px);
  left: 0;
  right: 0;

  border-top: 5px solid black;
  border-bottom: 5px solid black;

  z-index: -1;
}

.game-board::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc(33% - 2.5px);
  right: calc(33% - 2.5px);

  border-left: 5px solid black;
  border-right: 5px solid black;

  z-index: -1;
}

.game-board .item {
  display: flex;
  align-items: center;
  justify-content: center;

  aspect-ratio: 1 / 1;

  font-size: 1rem;
  font-weight: 700;

  border: 5px solid white;
  background: white;

  cursor: pointer;
  user-select: none;

  transition: all 300ms ease;
}

@media (min-width: 500px) {
  .game-board .item {
    font-size: 1.5rem;
  }
}
</style>
