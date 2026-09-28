<script setup>
// Echte Inhalte aus dem alten Projekt
const karten = [
  {
    titel: "Holzlisten erfassen",
    text: "Stamm- und Schichtholz schnell und präzise erfassen, in allen gängigen Messverfahren.",
    bild: "/bilder/hv_tabelle.jfif",
    wide: true,
  },
  {
    titel: "Integriertes Kartensystem",
    text: "Polter übersichtlich verwalten und per Karte oder Umkreissuche schnell wiederfinden.",
    bild: "/bilder/hv_kartensystem.jfif",
    wide: false,
  },
  {
    titel: "Abrechnung",
    text: "Holzrechnung und Summenbildung direkt im Programm erledigen.",
    bild: "/bilder/hv_ausgabetabelle.jfif",
    wide: false,
  },
  {
    titel: "Ausgabe & Schnittstellen",
    text: "Daten als PDF exportieren sowie ELDAT-Schnittstelle nutzen.",
    bild: "/bilder/Ausgabeformat.JPG",
    wide: false,
  },
  {
    titel: "Mehrplatz & Fernwartung",
    text: "Im Netzwerk arbeiten und von kostenlosen Updates und Fernwartung profitieren.",
    bild: "/bilder/mehrplatz.jpeg",
    wide: false,
  },
];
</script>

<template>
  <section id="funktionen" class="funktionen">
    <div class="funktionen-header">
      <p class="funktionen-klein">Was steckt drin?</p>

      <h2>Was Holzverwaltung Pro kann</h2>

      <p>
        Alles für die schnelle Erfassung, Verwaltung und Abrechnung von Holz, in
        einem Programm.
      </p>
    </div>

    <div class="funktionen-grid">
      <div
        v-for="karte in karten"
        :key="karte.titel"
        class="funktion-card"
        :class="{ 'funktion-card--wide': karte.wide }"
      >
        <div class="vorschau">
          <img :src="karte.bild" :alt="karte.titel" />
        </div>

        <h3>{{ karte.titel }}</h3>
        <p>{{ karte.text }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.funktionen {
  color: var(--cream);
  min-height: 100vh;
  padding: 70px 6% 90px;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow-y: auto;

  background:
    linear-gradient(rgba(50, 27, 20, 0.55), rgba(50, 27, 20, 0.55)),
    url("/bilder/dunklesholz.jpg");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.funktionen-header {
  width: 100%;
  max-width: 900px;
  margin: 0 auto 45px;
  text-align: center;
}

.funktionen-klein {
  margin-bottom: 8px;
  font-family: "Allura", cursive !important;
  font-size: clamp(30px, 4vw, 45px);
  line-height: 1;
}

.funktionen-header h2 {
  margin-bottom: 18px;
  font-family: "Remark", sans-serif;
  font-weight: normal;
  text-transform: uppercase;
  font-size: clamp(36px, 5vw, 50px);
  line-height: 0.95;
}

.funktionen-header p {
  max-width: 680px;
  margin: 0 auto;
  font-family: "Remark", sans-serif;
  font-size: clamp(16px, 1.7vw, 19px);
  line-height: 1.5;
  opacity: 0.82;
}

.funktionen-grid {
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.funktion-card {
  min-width: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: rgba(246, 239, 228, 0.07);
  border: 1px solid rgba(246, 239, 228, 0.16);
  border-radius: 2px;
  transition:
    background 0.25s ease,
    transform 0.25s ease,
    border-color 0.25s ease;
}

.funktion-card:hover {
  background: rgba(246, 239, 228, 0.11);
  border-color: rgba(246, 239, 228, 0.28);
  transform: translateY(-4px);
}

.funktion-card--wide {
  grid-column: span 2;
}

.vorschau {
  width: 100%;
  aspect-ratio: 16 / 7;
  margin: 0;
  overflow: hidden;
  border-radius: 0;
}

.vorschau img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
  transition: transform 0.25s ease;
}

.funktion-card:hover .vorschau img {
  transform: scale(1.035);
}

.funktion-card--wide .vorschau {
  height: 220px;
}

.funktion-card h3 {
  margin: 8px 0 10px;
  font-family: "Remark", sans-serif;
  font-size: clamp(20px, 2vw, 25px);
  font-weight: normal;
  line-height: 1.1;
}

.funktion-card p {
  margin: 0;
  font-family: "Remark", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  opacity: 0.76;
}

@media (max-width: 900px) {
  .funktionen {
    padding: 55px 5% 70px;
    padding-top: 100px;
  }

  .funktionen-header {
    margin-bottom: 35px;
  }

  .funktionen-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }

  .funktion-card--wide {
    grid-column: span 2;
  }

  .vorschau {
    height: 200px;
  }

  .funktion-card--wide .vorschau {
    height: 230px;
  }
}

@media (max-width: 768px) {
  .funktionen {
    padding: 50px 5%;
    padding-top: 100px;
  }

  .funktionen-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .funktion-card--wide {
    grid-column: span 2;
  }
}

@media (max-width: 520px) {
  .funktionen {
    padding: 42px 5% 60px;
    padding-top: 100px;
  }

  .funktionen-header {
    margin-bottom: 28px;
  }

  .funktionen-klein {
    font-size: 27px;
  }

  .funktionen-header h2 {
    font-size: 33px;
    margin-bottom: 13px;
  }

  .funktionen-header p {
    font-size: 16px;
    line-height: 1.5;
  }

  .funktionen-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .funktion-card--wide {
    grid-column: span 1;
  }

  .vorschau,
  .funktion-card--wide .vorschau {
    height: 190px;
    margin-bottom: 18px;
  }

  .funktion-card {
    padding: 15px;
  }

  .funktion-card h3 {
    font-size: 20px;
    margin-bottom: 8px;
  }

  .funktion-card p {
    font-size: 16px;
    line-height: 1.5;
  }
}
</style>
