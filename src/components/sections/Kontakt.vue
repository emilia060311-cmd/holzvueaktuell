<script setup>
defineEmits(["back-to-top"]);
</script>

<template>
  <section id="kontakt" class="kontakt">
    <div class="kontakt-inner">
      <p class="kontakt-klein">Fragen?</p>

      <h2>Lass uns sprechen</h2>

      <p>
        Du möchtest mehr über Deine Holzverwaltung erfahren oder hast Fragen zu
        den Funktionen? Melde dich gerne bei uns.
      </p>

      <div class="kontakt-aktionen">
        <a href="tel:+494321602097" class="kontakt-telefon">
          +49 4321 602097
        </a>

        <a href="mailto:info@deine-holzverwaltung.de" class="kontakt-cta">
          Kontakt aufnehmen
        </a>
      </div>

      <button
        type="button"
        class="zurueck-nach-oben"
        @click="$emit('back-to-top')"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>

        Zurück nach oben
      </button>
    </div>
  </section>
</template>

<style scoped>
.kontakt {
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  box-sizing: border-box;

  color: var(--cream);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 60px 8%;

  background:
    linear-gradient(rgba(50, 27, 20, 0.55), rgba(50, 27, 20, 0.55)),
    url("/bilder/dunklesholz.jpg");

  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.kontakt-inner {
  width: 100%;
  max-width: 700px;
  text-align: center;
}

.kontakt-klein {
  font-family: "Allura", cursive;
  font-size: clamp(30px, 4vw, 45px);
  line-height: 1;
  margin: 0 0 5px;
}

.kontakt-inner h2 {
  font-family: "Remark", sans-serif;
  font-weight: normal;
  text-transform: uppercase;
  font-size: clamp(34px, 5.5vw, 50px);
  line-height: 0.95;
  margin: 0 0 20px;
}

.kontakt-inner > p:not(.kontakt-klein) {
  font-size: clamp(16px, 2vw, 20px);
  line-height: 1.6;
  opacity: 0.9;
  margin: 0 0 32px;
}

.kontakt-aktionen {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.kontakt-telefon {
  color: var(--cream);
  font-size: clamp(18px, 2.4vw, 24px);
  text-decoration: none;
  border-bottom: 1px solid rgba(246, 239, 228, 0.4);
}

.kontakt-cta {
  color: var(--bar-brown);
  background: var(--cream);
  text-decoration: none;
  font-size: clamp(16px, 1.8vw, 17px);
  padding: 14px 28px;
}

.zurueck-nach-oben {
  margin-top: 40px;

  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  background: none;
  border: none;
  cursor: pointer;

  color: var(--cream);
  opacity: 0.6;

  font-family: "Remark", sans-serif;
  font-size: 16px;

  transition: opacity 0.2s ease;
}

.zurueck-nach-oben:hover {
  opacity: 1;
}

.zurueck-nach-oben svg {
  transform: rotate(180deg);
  animation: cue-bob 1.8s ease-in-out infinite;
}

@keyframes cue-bob {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(8px);
  }
}

@media (max-width: 768px) {
  .kontakt {
    padding: 50px 5%;
  }
}

@media (max-width: 420px) {
  .kontakt {
    padding: 40px 6%;
  }

  .kontakt-klein {
    font-size: 27px;
  }

  .kontakt-inner h2 {
    font-size: 34px;
  }

  .kontakt-aktionen {
    flex-direction: column;
    gap: 14px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .zurueck-nach-oben svg {
    animation: none;
  }
}
</style>
