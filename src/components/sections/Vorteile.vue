<script setup>
const vergleichAlt = [
  "Erfassung auf Papier oder in Tabellen",
  "Messverfahren mühsam umrechnen",
  "Polter im Wald schwer wiederfinden",
  "Abrechnung in separaten Programmen",
  "Keine direkten Schnittstellen",
];

const vergleichPro = [
  "Eine der schnellsten Erfassungen am Markt",
  "Alle Listentypen und Messverfahren",
  "Polter per Karte und Umkreissuche finden",
  "Holzrechnung und Summenbildung integriert",
  "ELDAT, Import und Export direkt integriert",
  "Mehrplatz-Betrieb und kostenlose Updates",
];

const bloecke = [
  {
    titel: "Die Software fürs Holzlisten-Management",
    texte: [
      "Die Software basiert auf modernen Microsoft.NET-Elementen und einem Microsoft SQL Express Server und bietet eine der schnellsten Erfassungen von Stamm- und Schichtholzlisten am Markt. Wer täglich mit Holzlisten arbeitet, spart damit spürbar Zeit, bei gleichzeitig höherer Präzision.",
      "Von der Rundholzliste bis zur Schichtholzliste im Mantelmessverfahren deckt die Software alle gängigen Listentypen und Messverfahren ab. Polter werden übersichtlich verwaltet, lassen sich per Umkreissuche im Gelände wiederfinden und über das integrierte Kartensystem (inkl. MagicMaps und TOP25/50) verorten.",
    ],
  },
  {
    titel: "Alles in einem Programm",
    texte: [
      "Von der Holzaufnahme bis zum Lieferschein und zur Rechnung: Holzverwaltung Pro.NET bündelt alle wichtigen Arbeitsschritte. Auch Summenbildungen, ELDAT und der Rindenabzug nach RVR 2015 sind integriert.",
      "Käufer, Lieferanten und Dienstleister werden direkt verwaltet. Holzlisten können einfach versendet, importiert und exportiert werden. Für den Einsatz im Wald sind auch mobile Lösungen verfügbar.",
    ],
  },
];
</script>

<template>
  <section id="vorteile" class="vorteile">
    <div class="vorteile-header">
      <p class="vorteile-klein">Der Unterschied</p>

      <h2>Vom Papierchaos zur digitalen Übersicht</h2>

      <p>
        Weniger Aufwand, weniger Fehler und alle wichtigen Funktionen zentral in
        einem Programm.
      </p>
    </div>

    <div class="funktionen-vergleich">
      <div class="vergleich-box vergleich-box--alt">
        <p class="vergleich-klein">Bisher</p>

        <h3>Holzlisten von Hand</h3>

        <ul>
          <li v-for="item in vergleichAlt" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="vergleich-box vergleich-box--pro">
        <p class="vergleich-klein">Mit Holzverwaltung Pro</p>

        <h3>Alles in einem Programm</h3>

        <ul>
          <li v-for="item in vergleichPro" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>

    <div class="vorteile-zusatztext">
      <div v-for="block in bloecke" :key="block.titel" class="zusatztext-block">
        <h4>{{ block.titel }}</h4>

        <p v-for="text in block.texte" :key="text">
          {{ text }}
        </p>
      </div>
    </div>

    <!-- KURZE ANLEITUNG -->
    <div class="vorteile-anleitung">
      <div class="anleitung-text">
        <p class="anleitung-klein">Kurze Anleitung</p>

        <p>
          Sie möchten mehr über Holzverwaltung Pro erfahren? In unserer
          Anleitung finden Sie alle wichtigen Funktionen und eine kurze
          Erklärung zur Bedienung.
        </p>
      </div>

      <a
        href="/bilder/Bedienungsanleitung Holzverwaltung.pdf"
        target="_blank"
        rel="noopener"
        class="anleitung-button"
      >
        <span>Anleitung öffnen</span>
        <span class="anleitung-icon">↗</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.vorteile {
  color: var(--cream);
  padding: 70px 6% 90px;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  background:
    linear-gradient(rgba(50, 27, 20, 0.55), rgba(50, 27, 20, 0.55)),
    url("/bilder/dunklesholz.jpg");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* HEADER */

.vorteile-header {
  width: 100%;
  max-width: 900px;
  margin: 0 auto 45px;
  text-align: center;
}

.vorteile-klein {
  margin-bottom: 8px;
  font-family: "Allura", cursive !important;
  font-size: clamp(30px, 4vw, 45px);
  line-height: 1;
}

.vorteile-header h2 {
  margin-bottom: 18px;
  font-family: "Remark", sans-serif;
  font-weight: normal;
  text-transform: uppercase;
  font-size: clamp(36px, 5vw, 50px);
  line-height: 0.95;
}

.vorteile-header p {
  max-width: 680px;
  margin: 0 auto;
  font-family: "Remark", sans-serif;
  font-size: clamp(16px, 1.7vw, 19px);
  line-height: 1.5;
  opacity: 0.82;
}

/* VERGLEICH */

.funktionen-vergleich {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 55px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.vergleich-box {
  min-width: 0;
  padding: 24px 26px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0;
}

.vergleich-box--alt {
  background: rgba(255, 255, 255, 0.12);
  color: var(--cream);
}

.vergleich-box--pro {
  background: var(--cream);
  color: var(--bar-brown);
}

.vergleich-klein {
  margin-bottom: 8px;
  font-family: "Allura", cursive;
  font-size: clamp(24px, 3vw, 34px);
  font-weight: normal;
  line-height: 1;
  opacity: 0.7;
}

.vergleich-box h3 {
  margin: 0 0 18px;
  font-family: "Remark", sans-serif;
  font-size: clamp(21px, 2.4vw, 26px);
  font-weight: normal;
  line-height: 1.1;
}

.vergleich-box ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.vergleich-box li {
  position: relative;
  margin-bottom: 10px;
  padding-left: 22px;
  font-family: "Remark", sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

.vergleich-box li:last-child {
  margin-bottom: 0;
}

.vergleich-box li::before {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.65;
}

.vergleich-box--alt li::before {
  content: "–";
  color: var(--cream);
}

.vergleich-box--pro li::before {
  content: "✓";
  color: var(--bar-brown);
}

/* ZUSATZTEXT */

.vorteile-zusatztext {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 45px;
}

.zusatztext-block {
  text-align: center;
}

.zusatztext-block h4 {
  margin: 0 0 12px;
  color: var(--cream);
  font-family: "Remark", sans-serif;
  font-size: clamp(21px, 2.5vw, 27px);
  font-weight: normal;
  line-height: 1.15;
}

.zusatztext-block p {
  max-width: 850px;
  margin: 0 auto 14px;
  color: rgba(255, 255, 255, 0.8);
  font-family: "Remark", sans-serif;
  font-size: 16px;
  line-height: 1.55;
}

.zusatztext-block p:last-child {
  margin-bottom: 0;
}

/* KURZE ANLEITUNG */

.vorteile-anleitung {
  width: 100%;
  max-width: 900px;
  margin: 50px auto 0;
  padding: 26px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  box-sizing: border-box;

  background: rgba(246, 239, 228, 0.07);
  border: 1px solid rgba(246, 239, 228, 0.16);
  color: var(--cream);
}

.anleitung-text {
  min-width: 0;
}

.anleitung-klein {
  margin: 0 0 6px;
  font-family: "Allura", cursive;
  font-size: clamp(24px, 3vw, 32px);
  line-height: 1;
  opacity: 0.8;
}

.anleitung-text p:last-child {
  max-width: 500px;
  margin: 0;
  font-family: "Remark", sans-serif;
  font-size: 16px;
  line-height: 1.45;
  opacity: 0.82;
}

.anleitung-button {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 22px;
  background: var(--cream);
  color: var(--bar-brown);
  text-decoration: none;
  font-family: "Remark", sans-serif;
  font-size: 16px;
  white-space: nowrap;
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.anleitung-button:hover {
  opacity: 0.85;
  transform: translateY(-2px);
}

.anleitung-icon {
  font-size: 16px;
}

/* TABLET */

@media (max-width: 768px) {
  .vorteile {
    padding: 50px 5%;
    padding-top: 100px;
  }

  .funktionen-vergleich {
    grid-template-columns: 1fr;
    gap: 14px;
    margin-bottom: 40px;
  }

  .vorteile-zusatztext {
    gap: 35px;
  }

  .zusatztext-block p {
    font-size: 16px;
  }

  .vorteile-anleitung {
    flex-direction: column;
    align-items: flex-start;
  }

  .anleitung-button {
    width: 100%;
    justify-content: center;
  }
}

/* MOBILE */

@media (max-width: 420px) {
  .vorteile {
    padding: 40px 6%;
    padding-top: 100px;
  }

  .vorteile-klein {
    font-size: 30px;
  }

  .vorteile-header h2 {
    font-size: 33px;
  }

  .vorteile-header p {
    font-size: 16px;
  }

  .vergleich-box {
    padding: 21px;
  }

  .vergleich-box h3 {
    font-size: 21px;
  }

  .vergleich-box li {
    font-size: 16px;
  }

  .zusatztext-block h4 {
    font-size: 21px;
  }

  .zusatztext-block p {
    font-size: 16px;
    line-height: 1.5;
  }

  .vorteile-anleitung {
    margin-top: 40px;
    padding: 21px;
  }
}
</style>
