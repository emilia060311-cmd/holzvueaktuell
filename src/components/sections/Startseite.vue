<script setup>
defineEmits(["scroll-to-slides"]);

const startBoxen = [
  {
    nummer: "01",
    titel: "Holzlisten",
    text: "Stamm- und Schichtholzlisten schnell und übersichtlich erfassen.",
  },
  {
    nummer: "02",
    titel: "Digital",
    text: "Schluss mit Papierchaos und unübersichtlichen Listen.",
  },
  {
    nummer: "03",
    titel: "Übersicht",
    text: "Alle wichtigen Daten an einem zentralen Ort.",
  },
  {
    nummer: "04",
    titel: "Einfach",
    text: "Intuitive Bedienung für Forstbetriebe, Sägewerke und Holzhandel.",
  },
];
</script>

<template>
  <section class="startseite">
    <div class="brand">
      <div class="logo-box">
        <img src="/bilder/logo.png" alt="Logo Deine Holzverwaltung" />
      </div>

      <div class="brand-text">
        <p class="deine">Deine</p>
        <p class="holz">Holzverwaltung</p>
        <p class="subtitle">Holzlisten, Management auf höchstem Niveau.</p>
      </div>
    </div>

    <div class="startseite-unterbereich">
      <div class="startseite-boxen">
        <div v-for="box in startBoxen" :key="box.nummer" class="start-box">
          <span class="start-box-nummer">
            {{ box.nummer }}
          </span>

          <h3>{{ box.titel }}</h3>

          <p>{{ box.text }}</p>
        </div>
      </div>

      <div class="start-info-row">
        <div class="start-info-box">
          <div class="start-info-inhalt">
            <div class="start-info-text">
              <p class="start-info-klein">Einfacher arbeiten</p>

              <h2>Deine Holzverwaltung</h2>

              <p>
                Erfasse Stamm- und Schichtholzlisten schneller als je zuvor,
                präzise, zuverlässig und genau auf die Bedürfnisse von
                Forstbetrieben, Sägewerken und dem Holzhandel abgestimmt.
              </p>

              <div class="start-info-aktionen">
                <a
                  href="#kontakt"
                  class="start-info-kontakt"
                  @click.prevent="$emit('scroll-to-slides')"
                >
                  Kontakt aufnehmen
                </a>
              </div>
            </div>
          </div>
        </div>

        <button
          class="scroll-cue"
          type="button"
          @click="$emit('scroll-to-slides')"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>

          Mehr entdecken
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.startseite {
  position: relative;
  width: 100%;
  min-height: 170vh;
  padding-bottom: var(--footer-h);

  color: var(--cream);

  background-color: #321b14;
  background-image:
    linear-gradient(rgba(50, 27, 20, 0.3), rgba(50, 27, 20, 0.6)),
    url("/bilder/hero1.png");

  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
}

/* =========================================
   BRAND / LOGO
   ========================================= */

.brand {
  position: absolute;
  top: 34.2vh;
  left: 20%;
  right: 6%;

  display: flex;
  align-items: center;
  gap: 20px;

  z-index: 2;
}

.logo-box {
  flex-shrink: 0;

  width: 17%;
  aspect-ratio: 1 / 0.8;
  min-width: 80px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 0;
  overflow: hidden;
}

.logo-box img {
  width: 100%;
  height: 100%;

  object-fit: contain;
  display: block;
}

.brand-text {
  flex: 1;

  color: var(--cream);
  font-family: "Remark", sans-serif;
}

.deine {
  font-family: "Allura", cursive;
  font-weight: 400;

  font-size: clamp(38px, 7vw, 58px);
  line-height: 0.9;
  letter-spacing: 0.02em;

  margin-left: 2px;
  margin-bottom: 5px;
}

.holz {
  font-family: "Remark", sans-serif;
  font-weight: normal;

  text-transform: uppercase;

  font-size: clamp(52px, 12vw, 90px);
  line-height: 0.88;
  letter-spacing: 0.01em;
}

.subtitle {
  margin-top: 22px;

  color: var(--cream);

  font-family: "Remark", sans-serif;
  font-size: clamp(22px, 4.5vw, 34px);
  line-height: 1.05;
  letter-spacing: 0.01em;
}

/* =========================================
   UNTERER BEREICH
   ========================================= */

.startseite-unterbereich {
  position: absolute;

  top: 86vh;
  left: 0;
  right: 0;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 5;
}

/* =========================================
   START BOXEN
   ========================================= */

.startseite-boxen {
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 0;
}

.start-box {
  min-height: 100px;

  padding: 12px 18px;

  color: var(--cream);

  border: 1px solid rgba(246, 239, 228, 0.16);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);

  transition:
    background 0.25s ease,
    transform 0.25s ease;
}

.start-box:nth-child(1) {
  background: rgba(35, 19, 14, 0.7);
}

.start-box:nth-child(2) {
  background: rgba(55, 34, 25, 0.7);
}

.start-box:nth-child(3) {
  background: rgba(42, 27, 21, 0.7);
}

.start-box:nth-child(4) {
  background: rgba(14, 26, 20, 0.7);
}

.start-box:nth-child(1):hover {
  background: rgba(35, 19, 14, 0.96);
  transform: translateY(-4px);
}

.start-box:nth-child(2):hover {
  background: rgba(55, 34, 25, 0.96);
  transform: translateY(-4px);
}

.start-box:nth-child(3):hover {
  background: rgba(42, 27, 21, 0.96);
  transform: translateY(-4px);
}

.start-box:nth-child(4):hover {
  background: rgba(20, 38, 29, 0.98);
  transform: translateY(-4px);
}

.start-box-nummer {
  display: block;

  margin-bottom: 13px;

  font-family: "Remark", sans-serif;
  font-size: 16px;

  opacity: 0.6;
}

.start-box h3 {
  font-family: "Remark", sans-serif;
  font-weight: normal;

  text-transform: uppercase;

  font-size: clamp(21px, 2.2vw, 25px);
  line-height: 0.95;

  margin-bottom: 7px;
}

.start-box p {
  font-family: "Remark", sans-serif;

  font-size: clamp(16px, 1vw, 16px);
  line-height: 1.4;

  opacity: 0.78;

  max-width: 260px;
}

/* =========================================
   INFO BEREICH
   ========================================= */

.start-info-row {
  width: 100%;

  display: flex;
  align-items: stretch;

  margin: 0;
  padding: 0;
}

.start-info-box {
  width: 50%;

  min-height: 230px;

  margin: 0;
  padding: 40px 4%;

  color: var(--beige-dark);

  background: var(--beige);

  border: 1px solid rgba(246, 239, 228, 0.35);

  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);

  display: flex;
  align-items: center;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.start-info-box:hover {
  transform: translateY(-2px);

  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.17);
}

.start-info-inhalt {
  width: 100%;

  display: flex;
  align-items: center;
}

.start-info-text {
  width: 100%;
  max-width: 850px;
}

.start-info-klein {
  font-family: "Allura", cursive !important;
  font-weight: 400;

  font-size: clamp(30px, 4vw, 45px);
  line-height: 1;

  margin-bottom: 5px;

  opacity: 0.75;
}

.start-info-text h2 {
  font-family: "Remark", sans-serif;
  font-weight: normal;

  text-transform: uppercase;

  font-size: clamp(30px, 4vw, 50px);
  line-height: 0.95;

  margin-bottom: 15px;
}

.start-info-text p {
  max-width: 800px;

  font-family: "Remark", sans-serif;

  font-size: clamp(16px, 1.5vw, 18px);
  line-height: 1.5;

  opacity: 0.78;
}

/* =========================================
   KONTAKT BUTTON
   ========================================= */

.start-info-aktionen {
  display: flex;
  align-items: center;

  margin-top: 22px;
}

.start-info-kontakt {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  padding: 11px 20px;

  color: var(--beige);
  background: var(--beige-dark);

  text-decoration: none;

  font-size: 16px;

  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.start-info-kontakt:hover {
  opacity: 0.85;
  transform: translateY(-2px);
}

/* =========================================
   SCROLL CUE
   ========================================= */

.scroll-cue {
  width: 50%;

  min-height: 230px;

  margin: 0;
  padding: 20px 4%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 18px;

  background: transparent;
  border: none;

  color: var(--cream);

  font-family: "Remark", sans-serif;

  font-size: clamp(20px, 5.5vw, 38px);
  line-height: 0.85;

  text-transform: uppercase;
  text-align: center;

  z-index: 10;

  cursor: pointer;

  text-shadow:
    0 4px 4px rgba(0, 0, 0, 0.9),
    0 8px 10px rgba(0, 0, 0, 0.75),
    0 12px 20px rgba(0, 0, 0, 0.55);

  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.scroll-cue svg {
  width: clamp(32px, 4vw, 48px);

  height: auto;

  flex-shrink: 0;

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

/* =========================================
   TABLET / MOBILE
   ========================================= */

@media (max-width: 768px) {
  .startseite {
    min-height: 145vh;
  }

  .brand {
    top: 32.4vh;

    left: 12%;
    right: 5%;

    align-items: center;
  }

  .holz {
    font-size: clamp(38px, 9vw, 65px);
  }

  .subtitle {
    font-size: clamp(17px, 3.5vw, 25px);
  }

  .startseite-unterbereich {
    top: 86.4vh;

    left: 0;
    right: 0;

    width: 100%;
  }

  .startseite-boxen {
    width: 100%;

    grid-template-columns: repeat(2, 1fr);

    gap: 12px;
  }

  .start-box {
    min-height: 145px;

    padding: 17px;
  }

  .start-box-nummer {
    margin-bottom: 10px;
  }

  .start-info-row {
    flex-direction: column;
  }

  .start-info-box {
    width: 100%;

    padding: 25px;
  }

  .scroll-cue {
    width: 100%;

    min-height: 140px;

    font-size: clamp(20px, 7vw, 38px);
  }
}

/* =========================================
   KLEINE SMARTPHONES
   ========================================= */

@media (max-width: 420px) {
  .startseite {
    min-height: 150vh;
  }

  .brand {
    top: 31.45vh;

    left: 7%;
    right: 4%;

    gap: 10px;

    align-items: center;
  }

  .logo-box {
    min-width: 55px;
    width: 18%;

    margin-top: 0;
  }

  .deine {
    font-size: 28px;
  }

  .holz {
    font-size: 32px;
  }

  .subtitle {
    font-size: 16px;

    margin-top: 13px;
  }

  .startseite-unterbereich {
    top: 88.8vh;

    left: 0;
    right: 0;

    width: 100%;
  }

  .startseite-boxen {
    width: 100%;

    grid-template-columns: repeat(2, 1fr);

    gap: 8px;
  }

  .start-box {
    min-height: 130px;

    padding: 13px;
  }

  .start-box-nummer {
    margin-bottom: 9px;

    font-size: 16px;
  }

  .start-box h3 {
    font-size: 19px;

    margin-bottom: 6px;
  }

  .start-box p {
    font-size: 16px;

    line-height: 1.4;
  }

  .start-info-box {
    padding: 20px 18px;
  }

  .start-info-klein {
    font-size: 25px;
  }

  .start-info-text h2 {
    font-size: 28px;

    margin-bottom: 12px;
  }

  .start-info-text p {
    font-size: 16px;

    line-height: 1.5;
  }

  .start-info-aktionen {
    align-items: flex-start;

    flex-direction: column;

    gap: 12px;

    margin-top: 17px;
  }

  .start-info-kontakt {
    padding: 10px 16px;

    font-size: 16px;
  }

  .scroll-cue {
    width: 100%;

    min-height: 110px;

    margin-top: 0;

    font-size: 30px;

    gap: 12px;
  }

  .scroll-cue svg {
    width: 30px;
  }
}

/* =========================================
   REDUCED MOTION
   ========================================= */

@media (prefers-reduced-motion: reduce) {
  .scroll-cue svg {
    animation: none;
  }
}
</style>
