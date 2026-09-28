<script setup>
import { ref } from "vue";

const modus = ref("monat");

const pakete = [
  {
    name: "Holzverwaltung Pro",
    untertitel: "Holzliste & Polterverwaltung",
    beliebt: false,
    preisMonat: 29,
    preisJahr: 290,
    leistungen: [
      "Alle 6 Listentypen",
      "Polterverwaltung mit GPS & Umkreissuche",
      "Lieferscheine direkt aus Poltern",
      "Integrierte Karte & Export",
      "Adressverwaltung",
      "Kostenlose Updates",
    ],
  },
  {
    name: "Holzverwaltung Pro RM",
    untertitel: "Holzliste, Polterverwaltung & Holzrechnung",
    beliebt: true,
    preisMonat: 39,
    preisJahr: 390,
    leistungen: [
      "Alle Funktionen von Holzverwaltung Pro",
      "Holzrechnung",
      "Erträge je fm/rm automatisch",
      "Anpassbares Druckbild",
    ],
  },
];

const erweiterungen = [
  {
    titel: "ELDAT-Schnittstelle",
    preis: "+5 €/Monat",
    text: "Elektronischer Datenaustausch von Holzdaten nach ELDAT-Standard.",
  },
  {
    titel: "Containerverladung",
    preis: "+5 €/Monat",
    text: "Verwaltung und Dokumentation der Container-Verladung.",
  },
  {
    titel: "Dokumenten-Management",
    preis: "+8 €/Monat",
    text: "Belege und Dokumente direkt am Polter und Vorgang ablegen.",
  },
];
</script>

<template>
  <section
    id="preise"
    class="preise wood-background"
    :class="{ jahresmodus: modus === 'jahr' }"
  >
    <!-- =====================================================
         HEADER
         ===================================================== -->

    <div class="preise-header">
      <p class="preise-klein">Transparent</p>

      <h2>Preise &amp; Tarife</h2>

      <p>Monatlich kündbar oder günstiger im Jahresabo. Preise inkl. MwSt.</p>
    </div>

    <!-- =====================================================
         PREIS TOGGLE
         ===================================================== -->

    <div class="preis-toggle" role="tablist" aria-label="Abrechnungszeitraum">
      <button
        type="button"
        class="preis-toggle-button"
        :class="{ active: modus === 'monat' }"
        role="tab"
        :aria-selected="modus === 'monat'"
        @click="modus = 'monat'"
      >
        Monatlich
      </button>

      <button
        type="button"
        class="preis-toggle-button"
        :class="{ active: modus === 'jahr' }"
        role="tab"
        :aria-selected="modus === 'jahr'"
        @click="modus = 'jahr'"
      >
        Jährlich
        <span>17 % sparen</span>
      </button>
    </div>

    <!-- =====================================================
         PREIS CARDS
         ===================================================== -->

    <div class="preise-grid">
      <div
        v-for="paket in pakete"
        :key="paket.name"
        class="preis-card"
        :class="{ 'preis-card--beliebt': paket.beliebt }"
      >
        <span v-if="paket.beliebt" class="preis-badge"> BELIEBT </span>

        <h3>{{ paket.name }}</h3>

        <p class="preis-untertitel">
          {{ paket.untertitel }}
        </p>

        <!-- Monatlich -->
        <p class="preis-betrag preis-betrag--monat">
          {{ paket.preisMonat }} €
          <span>/ Monat</span>
        </p>

        <!-- Jährlich -->
        <p class="preis-betrag preis-betrag--jahr">
          {{ paket.preisJahr }} €
          <span>/ Jahr</span>
        </p>

        <p class="preis-sparen">17 % sparen</p>

        <ul class="preis-liste">
          <li v-for="leistung in paket.leistungen" :key="leistung">
            {{ leistung }}
          </li>
        </ul>

        <a href="#kontakt" class="preis-cta"> Anfragen </a>
      </div>
    </div>

    <!-- =====================================================
         ERWEITERUNGEN
         ===================================================== -->

    <div class="erweiterungen">
      <div v-for="e in erweiterungen" :key="e.titel" class="erweiterung">
        <h4>{{ e.titel }}</h4>

        <p class="erweiterung-preis">
          {{ e.preis }}
        </p>

        <p>
          {{ e.text }}
        </p>
      </div>
    </div>

    <!-- =====================================================
         DEMO CTA
         ===================================================== -->

    <div class="funktionen-cta">
      <div class="funktionen-cta-text">
        <h3>Überzeugen Sie sich selbst:</h3>

        <p>
          Demoversion 14 Tage kostenlos testen — wir richten sie gemeinsam mit
          Ihnen ein.
        </p>
      </div>

      <div class="funktionen-cta-actions">
        <a class="funktionen-cta-phone" href="tel:+494321602097">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2
              19.79 19.79 0 0 1-8.63-3.07
              19.5 19.5 0 0 1-6-6
              A19.79 19.79 0 0 1 2.12 4.18
              2 2 0 0 1 5.11 2h3
              a2 2 0 0 1 2 1.72
              c.12.9.33 1.78.62 2.63
              a2 2 0 0 1-.45 2.11L9 9.73
              a16 16 0 0 0 6 6l1.27-1.27
              a2 2 0 0 1 2.11-.45
              c.85.29 1.73.5 2.63.62
              A2 2 0 0 1 22 16.92z"
            />
          </svg>

          <span>+49 4321 602097</span>
        </a>

        <a
          class="funktionen-cta-button"
          href="https://mbd-team.de/kontakt"
          target="_blank"
          rel="noopener"
        >
          Kostenloses Erstgespräch
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* =========================================================
   PREISE
   ========================================================= */

.preise {
  color: var(--cream);

  padding: 45px 8% 35px;
  padding-top: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* =========================================================
   HEADER
   ========================================================= */

.preise-header {
  max-width: 850px;

  margin: 0 auto 25px;

  text-align: center;
}

.preise-klein {
  font-family: "Allura", cursive !important;

  font-size: clamp(30px, 4vw, 45px);

  line-height: 1;

  margin-bottom: 5px;
}

.preise-header h2 {
  font-family: "Remark", sans-serif;

  font-weight: normal;

  text-transform: uppercase;

  font-size: clamp(34px, 5.5vw, 50px);

  line-height: 0.95;

  margin-bottom: 12px;
}

.preise-header p {
  font-family: "Remark", sans-serif;

  font-size: clamp(16px, 1.8vw, 19px);

  line-height: 1.4;

  opacity: 0.85;
}

/* =========================================================
   PREIS TOGGLE
   ========================================================= */

.preis-toggle {
  position: relative;

  display: inline-flex;

  align-items: center;

  margin: 0 auto 24px;

  padding: 4px;

  background: rgba(246, 239, 228, 0.08);

  border: 1px solid rgba(246, 239, 228, 0.2);

  border-radius: 50px;
}

.preis-toggle-button {
  position: relative;

  border: none;

  border-radius: 50px;

  padding: 9px 20px;

  background: transparent;

  color: var(--cream);

  font-family: "Remark", sans-serif;

  font-size: 16px;

  cursor: pointer;

  transition:
    background 0.25s ease,
    color 0.25s ease,
    transform 0.2s ease;
}

.preis-toggle-button:hover {
  transform: translateY(-1px);
}

.preis-toggle-button.active {
  background: var(--cream);

  color: var(--bar-brown);
}

.preis-toggle-button span {
  margin-left: 5px;

  font-size: 16px;

  opacity: 0.7;
}

/* =========================================================
   PREIS GRID
   ========================================================= */

.preise-grid {
  max-width: 1000px;

  width: 100%;

  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 18px;
}

/* =========================================================
   PREIS CARD
   ========================================================= */

.preis-card {
  position: relative;

  background: rgba(246, 239, 228, 0.07);

  border: 1px solid rgba(246, 239, 228, 0.18);

  padding: 23px 26px;

  display: flex;

  flex-direction: column;

  transition:
    background 0.25s ease,
    transform 0.25s ease,
    border-color 0.25s ease;
}

.preis-card:hover {
  background: rgba(246, 239, 228, 0.11);

  transform: translateY(-3px);

  border-color: rgba(246, 239, 228, 0.3);
}

.preis-card--beliebt {
  background: rgba(246, 239, 228, 0.13);

  border-color: rgba(246, 239, 228, 0.4);
}

.preis-card--beliebt:hover {
  background: rgba(246, 239, 228, 0.17);
}

/* =========================================================
   BADGE
   ========================================================= */

.preis-badge {
  position: absolute;

  top: -11px;

  right: 20px;

  padding: 4px 12px;

  color: var(--bar-brown);

  background: var(--cream);

  font-family: "Remark", sans-serif;

  font-size: 16px;

  letter-spacing: 0.04em;
}

/* =========================================================
   CARD CONTENT
   ========================================================= */

.preis-card h3 {
  margin: 0 0 5px;

  font-family: "Remark", sans-serif;

  font-size: clamp(22px, 2.6vw, 28px);

  font-weight: normal;

  line-height: 1.05;
}

.preis-untertitel {
  margin-bottom: 15px;

  font-family: "Remark", sans-serif;

  font-size: 16px;

  line-height: 1.35;

  opacity: 0.68;
}

/* =========================================================
   PREIS
   ========================================================= */

.preis-betrag {
  font-family: "Remark", sans-serif;

  font-size: clamp(38px, 4.5vw, 50px);

  line-height: 0.95;

  white-space: nowrap;
}

.preis-betrag span {
  font-size: 16px;

  opacity: 0.65;
}

.preis-betrag--jahr {
  display: none;
}

.preis-sparen {
  display: none;

  margin-top: 7px;

  margin-bottom: 14px;

  font-family: "Remark", sans-serif;

  font-size: 16px;

  opacity: 0.75;
}

/* =========================================================
   JAHRESMODUS
   ========================================================= */

.preise.jahresmodus .preis-betrag--monat {
  display: none;
}

.preise.jahresmodus .preis-betrag--jahr {
  display: block;
}

.preise.jahresmodus .preis-sparen {
  display: block;
}

/* =========================================================
   LEISTUNGEN
   ========================================================= */

.preis-liste {
  list-style: none;

  margin: 0 0 18px;

  padding: 0;

  flex: 1;

  font-family: "Remark", sans-serif;

  font-size: clamp(16px, 1.4vw, 16px);

  line-height: 1.55;
}

.preis-liste li {
  position: relative;

  margin-bottom: 5px;

  padding-left: 19px;

  opacity: 0.9;
}

.preis-liste li:last-child {
  margin-bottom: 0;
}

.preis-liste li::before {
  content: "✓";

  position: absolute;

  left: 0;

  top: 0;

  opacity: 0.65;
}

/* =========================================================
   ANFRAGEN BUTTON
   ========================================================= */

.preis-cta {
  align-self: flex-start;

  display: inline-flex;

  align-items: center;

  justify-content: center;

  padding: 10px 22px;

  color: var(--bar-brown);

  background: var(--cream);

  text-decoration: none;

  font-family: "Remark", sans-serif;

  font-size: 16px;

  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.preis-cta:hover {
  opacity: 0.82;

  transform: translateY(-2px);
}

/* =========================================================
   ERWEITERUNGEN
   ========================================================= */

.erweiterungen {
  max-width: 1000px;

  width: 100%;

  margin-top: 15px;

  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 12px;
}

.erweiterung {
  padding: 13px 16px;

  background: rgba(246, 239, 228, 0.06);

  border: 1px solid rgba(246, 239, 228, 0.13);
}

.erweiterung h4 {
  margin: 0 0 3px;

  font-family: "Remark", sans-serif;

  font-size: 16px;

  font-weight: normal;
}

.erweiterung-preis {
  margin-bottom: 4px;

  font-family: "Remark", sans-serif;

  font-size: 16px;
}

.erweiterung p {
  margin: 0;

  font-family: "Remark", sans-serif;

  font-size: 16px;

  line-height: 1.4;

  opacity: 0.65;
}
/* =========================================================
   DEMO CTA
   ========================================================= */

.funktionen-cta {
  width: 100%;
  max-width: 1000px;

  margin: 20px auto 0;

  padding: 30px 32px;

  display: flex;

  align-items: center;
  justify-content: space-between;

  gap: 30px;

  background: color-mix(in srgb, var(--cream) 88%, transparent);

  color: var(--bar-brown);

  border: 1px solid rgba(50, 27, 20, 0.12);
}

.funktionen-cta-text {
  min-width: 0;
}

.funktionen-cta-text h3 {
  margin: 0 0 6px;

  font-family: "Remark", sans-serif;

  font-size: clamp(22px, 2.5vw, 28px);

  font-weight: normal;

  line-height: 1.1;
}

.funktionen-cta-text p {
  margin: 0;

  font-family: "Remark", sans-serif;

  font-size: clamp(16px, 1.5vw, 16px);

  line-height: 1.45;

  opacity: 0.8;
}

.funktionen-cta-actions {
  display: flex;

  align-items: center;

  gap: 22px;

  flex-shrink: 0;
}

.funktionen-cta-phone {
  display: flex;

  align-items: center;

  gap: 9px;

  color: var(--bar-brown);

  text-decoration: none;

  font-family: "Remark", sans-serif;

  font-size: 16px;

  white-space: nowrap;
}

.funktionen-cta-phone svg {
  width: 20px;
  height: 20px;
}

.funktionen-cta-button {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  padding: 13px 20px;

  background: var(--bar-brown);

  color: var(--cream);

  text-decoration: none;

  font-family: "Remark", sans-serif;

  font-size: 16px;

  white-space: nowrap;

  transition:
    background 0.25s ease,
    transform 0.25s ease;
}

.funktionen-cta-button:hover {
  background: var(--light-brown);

  transform: translateY(-2px);
}

/* =========================================================
   TABLET / MOBILE
   ========================================================= */

@media (max-width: 768px) {
  .preise {
    padding: 45px 5% 40px;

    padding-top: 100px;

    justify-content: flex-start;
  }

  .preise-header {
    margin-bottom: 25px;
  }

  .preise-grid {
    grid-template-columns: 1fr;

    max-width: 600px;

    gap: 15px;
  }

  .preis-card {
    padding: 22px;
  }

  .preis-toggle {
    margin-bottom: 20px;
  }

  .preis-toggle-button {
    padding: 8px 17px;

    font-size: 16px;
  }

  .preis-betrag {
    font-size: 40px;
  }

  .erweiterungen {
    grid-template-columns: 1fr;

    max-width: 600px;

    gap: 10px;
  }

  /* DEMO CTA */

  .funktionen-cta {
    flex-direction: column;

    align-items: flex-start;

    gap: 18px;
  }

  .funktionen-cta-actions {
    width: 100%;

    flex-direction: column;

    align-items: stretch;
  }

  .funktionen-cta-phone {
    justify-content: center;
  }

  .funktionen-cta-button {
    width: 100%;
  }
}

/* =========================================================
   SMALL MOBILE
   ========================================================= */

@media (max-width: 420px) {
  .preise {
    padding-top: 100px;
  }

  .preise-header {
    margin-bottom: 25px;
  }

  .preise-klein {
    font-size: 27px;
  }

  .preise-header h2 {
    font-size: 34px;
  }

  .preise-header p {
    font-size: 16px;
  }

  .preise-grid {
    grid-template-columns: 1fr;
  }

  .preis-card {
    padding: 20px;
  }

  .preis-card h3 {
    font-size: 22px;
  }

  .preis-untertitel {
    font-size: 16px;
  }

  .preis-betrag {
    font-size: 36px;
  }

  .preis-betrag span {
    font-size: 16px;
  }

  .preis-liste {
    font-size: 16px;

    line-height: 1.55;
  }

  .preis-liste li {
    margin-bottom: 5px;
  }

  .preis-cta {
    width: 100%;

    padding: 11px 18px;

    font-size: 16px;
  }

  .erweiterungen {
    grid-template-columns: 1fr;

    gap: 12px;
  }

  .erweiterung {
    padding: 12px 14px;
  }

  .erweiterung h4,
  .erweiterung-preis,
  .erweiterung p {
    font-size: 16px;
  }

  .preis-toggle {
    margin-bottom: 18px;
  }

  .preis-toggle-button {
    padding: 8px 14px;

    font-size: 16px;
  }

  .preis-toggle-button span {
    font-size: 16px;
  }
}
</style>
