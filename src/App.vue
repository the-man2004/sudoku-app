<template>
  <Header></Header>
  <loading v-if="puzzleStore.isLoading === true"></loading>
  <Game
    v-if="puzzleStore.isLoading === false && puzzleStore.puzzle !== null"
  ></Game>
  <GameOver v-if="puzzleStore.gameOver === true"></GameOver>
  <YouWon v-if="puzzleStore.finnished === true"></YouWon>
</template>

<script setup>
import { onMounted } from "vue";
import { usePuzzleStore } from "./store/index";
import Header from "./components/Header.vue";
import Game from "./components/Game.vue";
import Loading from "./components/Loading.vue";
import GameOver from "./components/Game/GameOver.vue";
import YouWon from "./components/Game/YouWon.vue";

const puzzleStore = usePuzzleStore();

onMounted(() => {
  puzzleStore.fetchGame();
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  min-height: 100vh;

  background: linear-gradient(145deg, #93a5cf, #e4efe9);
  color: #2c3e50;
}
</style>
