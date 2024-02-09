<template>
  <div class="hint-container">
    <button @click="handleHintClick" class="hint">
      Hint
      <span class="hint-count">{{ puzzleStore.hasHint === true ? 1 : 0 }}</span>
    </button>
  </div>
</template>

<script setup>
import { usePuzzleStore } from "@/store";

const puzzleStore = usePuzzleStore();

const handleHintClick = () => {
  if (puzzleStore.selectedItem !== null && puzzleStore.hasHint === true) {
    puzzleStore.fillHint();
  }
};
</script>

<style scoped>
.hint-container {
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hint {
  padding: 0.3rem 1rem;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  color: black;
  border: 2px solid black;
  border-radius: 5px;

  font-size: 1rem;
  font-weight: 800;

  cursor: pointer;

  transition: all 300ms ease;
}

.hint:hover,
.hint:focus {
  color: blue;
  border-color: blue;
}

.hint-count {
  position: absolute;
  top: -10px;
  right: -10px;

  width: 25px;
  height: 25px;
  border-radius: 100px;

  text-align: center;

  color: white;
  background: blue;
}
</style>
