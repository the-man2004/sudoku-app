<template>
  <button @click="puzzleStore.fetchGame" class="new-game">New Game</button>
</template>

<script setup>
import { usePuzzleStore } from "@/store";

const puzzleStore = usePuzzleStore();
</script>

<style scoped>
.new-game {
  padding: 0.5rem 1rem;

  border: none;
  border-radius: 100px;

  background: rgb(72, 72, 255);
  color: white;

  cursor: pointer;
  transition: all 300ms ease;
}

.new-game:hover,
.new-game:focus {
  background: blue;
}
</style>
