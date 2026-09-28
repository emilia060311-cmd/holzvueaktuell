<script setup>
const emit = defineEmits(["navigate"]);

const links = [
  { label: "Startseite", id: "start" },
  { label: "Für wen?", id: "zielgruppe" },
  { label: "Funktionen", id: "funktionen" },
  { label: "Vorteile", id: "vorteile" },
  { label: "Preise", id: "preise" },
  { label: "Kontakt", id: "kontakt" },
];

function handleNavigation(id) {
  emit("navigate", id);
}
</script>

<template>
  <header class="topbar">
    <nav class="navbar">
      <button
        v-for="link in links"
        :key="link.id"
        type="button"
        @click="handleNavigation(link.id)"
      >
        {{ link.label }}
      </button>
    </nav>
  </header>
</template>

<style scoped>
.topbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 0 4%;
  box-sizing: border-box;

  background: var(--bar-brown);

  z-index: 5000;
}

.navbar {
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: clamp(25px, 5vw, 75px);
}

.navbar button {
  appearance: none;
  border: none;
  background: none;

  padding: 0;
  margin: 0;

  color: var(--cream);
  cursor: pointer;

  font-family: "Remark", sans-serif;
  font-size: clamp(16px, 1.5vw, 18px);

  white-space: nowrap;

  transition: opacity 0.2s ease;
}

.navbar button:hover {
  opacity: 0.6;
}

@media (max-width: 768px) {
  .topbar {
    height: 55px;
    padding: 0 3%;
  }

  .navbar {
    gap: clamp(15px, 3vw, 30px);
  }

  .navbar button {
    font-size: clamp(16px, 2.2vw, 17px);
  }
}

@media (max-width: 420px) {
  .topbar {
    height: 50px;
    padding: 0 4%;
  }

  .navbar {
    width: 100%;
    justify-content: space-between;
    gap: 7px;
  }

  .navbar button {
    font-size: 16px;
  }
}
</style>
