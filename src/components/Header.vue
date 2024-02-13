<template>
  <div class="header">
    <nav>
      <span class="logo">Sudoki</span>
      <div class="navigation-buttons">
        <NewGameBtn></NewGameBtn>
        <info></info>
      </div>
    </nav>
  </div>
</template>

<script setup>
import NewGameBtn from "./NewGameBtn.vue";
import Info from "./Info/Info.vue";
</script>

<style scoped>
nav {
  margin-bottom: 30px;
  padding: 15px 0;

  grid-area: nav;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  background: rgba(255, 255, 255, 0.3);
}

.logo {
  padding: 0 0.5rem;
  font-size: 2rem;
  font-weight: 700;
}

.navigation-buttons {
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.5rem;
}

button {
  outline: none;
  border: none;

  cursor: pointer;
}

.new-game {
  padding: 0.5rem 1rem;

  border-radius: 100px;

  background: rgb(72, 72, 255);
  color: white;

  transition: all 300ms ease;
}

.new-game:hover,
.new-game:focus {
  background: blue;
}

@media (min-width: 900px) {
  .logo {
    font-size: 3rem;
  }

  .header {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: ". nav nav";
  }

  nav {
    margin-top: 30px;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;

    background: white;
  }

  .logo {
    text-align: center;
  }
}
</style>
