<template>
  <Header></Header>
  <Game
    v-if="
      puzzleStore.isLoading === false &&
      puzzleStore.puzzle !== null &&
      puzzleStore.gameOver !== true
    "
  ></Game>
  <GameOver v-if="puzzleStore.gameOver === true"></GameOver>
</template>

<script setup>
import { onMounted } from "vue";
import { usePuzzleStore } from "./store/index";
import Header from "./components/Header.vue";
import Game from "./components/Game.vue";
import GameOver from "./components/GameOver.vue";

const puzzleStore = usePuzzleStore();

onMounted(() => {
  puzzleStore.fetchGame();
});
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  min-height: 100vh;

  background: linear-gradient(145deg, #93a5cf, #e4efe9);
  color: #2c3e50;
}
</style>
