<template>
  <div
    v-if="puzzleStore.isLoading === false && puzzleStore.puzzle !== null"
    class="game"
  >
    <div class="indicators">
      <span>Difficulty: {{ puzzleStore.difficulty }}</span>
      <span>Mistakes: {{ 0 }}/3</span>
    </div>
    <div class="game-board">
      <div
        v-for="(number, index) in puzzleStore.puzzleArr"
        :key="index"
        :data-id="index"
        @click="handleItemClick($event)"
        class="item"
      >
        {{ number === 0 ? "" : number }}
      </div>
    </div>
    <div class="numpad">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
    </div>
  </div>
</template>

<script setup>
import { usePuzzleStore } from "../store/index";

const puzzleStore = usePuzzleStore();

// Functions
const handleItemClick = (event) => {
  const items = [...document.querySelectorAll(".item")];

  // Remove styling
  items.forEach((el) => {
    el.style.color = "black";
    el.style.background = "white";
  });

  // Checks if item has no value
  if (event.target.innerText === "") {
    puzzleStore.setSelectedItem(event.target.dataset.id);

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
  margin: 0 auto;
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
  padding: 5px;

  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 5px;

  aspect-ratio: 1 / 1;

  background: rgba(0, 0, 0, 0.3);
}

.game-board .item {
  display: flex;
  align-items: center;
  justify-content: center;

  aspect-ratio: 1 / 1;

  font-size: 1.5rem;
  font-weight: 600;

  background: white;

  cursor: pointer;
  user-select: none;

  transition: all 300ms ease;
}

/* Number buttons */
.numpad {
  margin: 15px 0;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 5px;
}

.numpad button {
  aspect-ratio: 1 / 1;

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
</style>
