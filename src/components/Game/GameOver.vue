<template>
  <transition>
    <div v-if="puzzleStore.gameOver === true" class="backdrop"></div>
  </transition>
  <div v-if="puzzleStore.gameOver === true" class="game-over">
    <div>
      <h1>Game Over!</h1>
      <p>You lost the game because you made 3 mistakes.</p>
      <div>
        <NewGameBtn></NewGameBtn>
      </div>
    </div>
  </div>
</template>

<script setup>
import NewGameBtn from "../NewGameBtn.vue";
import { usePuzzleStore } from "@/store";

const puzzleStore = usePuzzleStore();
</script>

<style scoped>
.backdrop {
  position: fixed;
  inset: 0;

  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.3);

  z-index: 10;
}

.game-over {
  padding: 0 1rem;
  margin: 1rem;
}

.game-over > div {
  position: fixed;
  inset: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: auto;
  max-width: 500px;
  max-height: 500px;

  text-align: center;
  border-radius: 15px;

  background: white;

  z-index: 15;
}

.game-over h1 {
  margin-bottom: 30px;

  font-size: 2rem;
  font-weight: 800;
}

.game-over p {
  margin-bottom: 30px;
  padding: 0 0.5rem;

  font-size: 1.2rem;
}

/* Transiion styles */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
