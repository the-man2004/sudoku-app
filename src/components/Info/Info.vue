<template>
  <div>
    <button @click="toggleModal" class="material-symbols-outlined info-button">
      info
    </button>
  </div>
  <div v-if="isModalOpen === true" @click="toggleModal" class="backdrop"></div>
  <div v-if="isModalOpen === true" class="info-modal">
    <article>
      <h2>About Sudoki</h2>
      <p>
        The popular Japanese puzzle game Sudoku is based on the logical
        placement of numbers. An online game of logic, Sudoku doesn’t require
        any calculation nor special math skills; all that is needed are brains
        and concentration.
      </p>
    </article>
    <article>
      <h2>How to play Sudoki</h2>
      <p>
        The goal of Sudoku is to fill in a 9×9 grid with digits so that each
        column, row, and 3×3 section contain the numbers between 1 to 9. At the
        beginning of the game, the 9×9 grid will have some of the squares filled
        in. Your job is to use logic to fill in the missing digits and complete
        the grid. Don’t forget, a move is incorrect if:
      </p>
      <ul>
        <li>Any row contains more than one of the same number from 1 to 9</li>
        <li>
          Any column contains more than one of the same number from 1 to 9
        </li>
        <li>
          Any 3×3 grid contains more than one of the same number from 1 to 9
        </li>
      </ul>
    </article>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isModalOpen = ref(false);

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};
</script>

<style scoped>
.info-button {
  font-size: 2rem;
  background: none;

  outline: none;
  border: none;

  cursor: pointer;
}

.backdrop {
  position: fixed;
  inset: 0;

  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.3);

  z-index: 20;
}

.info-modal {
  position: fixed;
  inset: 1rem;

  padding: 0 1rem;
  margin: auto;

  display: flex;
  flex-direction: column;

  max-width: 500px;
  max-height: 500px;

  border-radius: 15px;

  overflow-y: auto;

  background: white;

  z-index: 25;
}

.info-modal article {
  margin: 0 auto;
  max-width: 500px;
}

.info-modal h2 {
  margin: 1rem 0;
}

.info-modal ul {
  margin: 1rem;
}

.info-modal li {
  margin-bottom: 0.5rem;
}
</style>
