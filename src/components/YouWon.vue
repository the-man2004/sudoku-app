<template>
  <div class="backdrop"></div>
  <div class="congratulations">
    <div>
      <h1>Congratulations!</h1>
      <p>You won the game</p>
      <div>
        <NewGameBtn></NewGameBtn>
      </div>
    </div>
  </div>
</template>

<script setup>
import NewGameBtn from "./NewGameBtn.vue";
</script>

<style scoped>
.backdrop {
  position: absolute;
  inset: 0;

  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.3);

  z-index: 10;
}

.congratulations {
  padding: 0 1rem;
  margin: 1rem;
}

.congratulations > div {
  position: absolute;
  inset: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: auto;
  max-width: 500px;

  text-align: center;
  aspect-ratio: 1 / 1;
  border-radius: 15px;

  background: white;
  border: 5px solid rgb(135, 199, 40);

  z-index: 15;
}

.congratulations h1 {
  margin-bottom: 30px;

  color: rgb(135, 199, 40);
  font-size: 2rem;
  font-weight: 800;
}

.congratulations p {
  margin-bottom: 30px;

  font-size: 1.2rem;
}

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
