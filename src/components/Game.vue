<template>
  <div class="game">
    <div class="indicators">
      <span>Difficulty: {{ puzzleStore.difficulty }}</span>
      <span>Mistakes: {{ 0 }}/3</span>
    </div>
    <div class="game-board"></div>
  </div>
</template>

<script setup>
import { usePuzzleStore } from "../store/index";

const puzzleStore = usePuzzleStore();
</script>

<style scoped>
.game {
  padding: 0 1rem;
  margin: 0 auto;
  max-width: 500px;
}

.indicators {
  display: flex;
  justify-content: space-between;
}

.indicators span {
  font-weight: 700;
}
</style>
