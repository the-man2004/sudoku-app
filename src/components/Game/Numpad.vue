<template>
  <div class="numpad">
    <button
      v-for="(_, index) in 9"
      :key="index"
      @click="handleBtnClick(index + 1)"
      :class="{ invisible: 9 - occurrence[index + 1] === 0 }"
    >
      {{ index + 1 }}
      <span>
        {{ `${index + 1}` in occurrence ? 9 - occurrence[index + 1] : 9 }}
      </span>
    </button>
  </div>
</template>

<script setup>
import { usePuzzleStore } from "@/store";
import { computed } from "vue";

const puzzleStore = usePuzzleStore();

const occurrence = computed(() => puzzleStore.occurrencesOfNumber);
console.log(occurrence.value[1]);

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
  padding: 1rem 0 2rem 0;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 3px;

  overflow-y: hidden;
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
  transition: color 300ms ease;
}

.numpad button:hover,
.numpad button:focus {
  background: blue;
}

.numpad button span {
  font-size: 0.6em;
  font-weight: 500;
}

/* Invisible styles */
.invisible {
  transform: translateY(100px);
}

/* Media query */
@media (min-width: 500px) {
  .numpad {
    margin: 15px 0;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    gap: 5px;
  }
}
</style>
