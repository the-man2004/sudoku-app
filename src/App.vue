<template>
  <h1>{{ puzzleStore.title }}</h1>
</template>

<script setup>
import { usePuzzleStore } from "./store/index";

const puzzleStore = usePuzzleStore();
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
