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
  </div>
</template>

<script setup>
import { usePuzzleStore } from "../store/index";

const puzzleStore = usePuzzleStore();

const handleItemClick = (event) => {
  console.log(event.target.dataset.id);
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

.item {
  display: flex;
  align-items: center;
  justify-content: center;

  aspect-ratio: 1 / 1;

  font-size: 1.5rem;
  font-weight: 600;

  background: white;
}
</style>
