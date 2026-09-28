<script setup>
const karten = [
  {
    nummer: "01",
    titel: "Förster & Waldbesitzer",
    text: "Holzbestände, Mengen und Einschläge einfach erfassen, verwalten und für Verkauf und Abrechnung bereitstellen.",
  },
  {
    nummer: "02",
    titel: "Forstbetriebsgemeinschaften",
    text: "Holzlisten verschiedener Waldbesitzer zentral organisieren und Holzverkäufe effizient koordinieren.",
  },
  {
    nummer: "03",
    titel: "Speditionen",
    text: "Holztransporte, Lieferungen und Holzlisten zentral verwalten und jederzeit den Überblick behalten.",
  },
  {
    nummer: "04",
    titel: "Sägewerke & Holzhandel",
    text: "Eingehende Holzlisten schnell erfassen, Bestände verwalten und Holzeinkauf, Verkauf und Abrechnung vereinfachen.",
  },
];
</script>

<template>
  <section id="zielgruppe" class="zielgruppe">
    <div class="zielgruppe-header">
      <p class="zielgruppe-klein">Für wen?</p>

      <h2>Für alle, die mit Holz arbeiten</h2>

      <p>
        Wo Holzlisten schnell und präzise erfasst, verwaltet und abgerechnet
        werden. Im Einsatz in Deutschland und EU-weit.
      </p>
    </div>

    <div class="zielgruppen-grid">
      <div v-for="karte in karten" :key="karte.nummer" class="zielgruppe-card">
        <span class="card-number">
          {{ karte.nummer }}
        </span>

        <h3>{{ karte.titel }}</h3>

        <p>{{ karte.text }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.zielgruppe {
  color: var(--cream);
  padding: 70px 8%;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background:
    linear-gradient(rgba(50, 27, 20, 0.55), rgba(50, 27, 20, 0.55)),
    url("/bilder/dunklesholz.jpg");

  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.zielgruppe-header {
  max-width: 850px;
  margin: 0 auto 45px;
  text-align: center;
}

.zielgruppe-klein {
  font-family: "Allura", cursive !important;
  font-size: clamp(30px, 4vw, 45px);
  line-height: 0.9;
  margin-bottom: 8px;
}
.zielgruppe-header h2 {
  font-family: "Remark", sans-serif;
  font-weight: normal;
  text-transform: uppercase;
  font-size: clamp(38px, 6vw, 50px);
  line-height: 0.95;
  margin-bottom: 22px;
}

.zielgruppe-header p {
  font-family: "Remark", sans-serif;
  font-size: clamp(16px, 2vw, 21px);
  line-height: 1.5;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.9;
}

.zielgruppen-grid {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

.zielgruppe-card {
  position: relative;
  background: rgba(246, 239, 228, 0.07);
  border: 1px solid rgba(246, 239, 228, 0.17);
  padding: 25px 30px;
  transition:
    background 0.25s ease,
    transform 0.25s ease;
}

.zielgruppe-card:hover {
  background: rgba(246, 239, 228, 0.12);
  transform: translateY(-3px);
}

.card-number {
  display: block;
  margin-bottom: 20px;
  font-size: 16px;
  opacity: 0.5;
}

.zielgruppe-card h3 {
  font-family: "Remark", sans-serif;
  font-weight: normal;
  font-size: clamp(23px, 3vw, 31px);
  line-height: 1.05;
  margin-bottom: 12px;
}

.zielgruppe-card p {
  font-family: "Remark", sans-serif;
  font-size: clamp(16px, 1.7vw, 18px);
  line-height: 1.45;
  opacity: 0.82;
}

@media (max-width: 768px) {
  .zielgruppe {
    padding: 50px 5%;
    padding-top: 100px;
  }

  .zielgruppen-grid {
    gap: 15px;
  }
}

@media (max-width: 420px) {
  .zielgruppe {
    padding: 40px 6%;
    padding-top: 100px;
  }

  .zielgruppe-header {
    margin-bottom: 25px;
  }

  .zielgruppe-klein {
    font-size: 27px;
  }

  .zielgruppe-header h2 {
    font-size: 34px;
  }

  .zielgruppe-header p {
    font-size: 16px;
  }

  .zielgruppen-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .zielgruppe-card {
    padding: 18px;
  }

  .zielgruppe-card h3 {
    font-size: 21px;
  }

  .zielgruppe-card p {
    font-size: 16px;
  }
}
</style>
