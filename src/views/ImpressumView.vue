<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="datenschutz-page">
    <button type="button" class="zurueck-button" @click="router.push('/')">
      ← Zurück
    </button>

    <div class="datenschutz-header">
      <p class="datenschutz-klein">Rechtliches</p>
      <h1>Impressum</h1>
    </div>
    <div class="datenschutz-box">
      <p>
        Angaben gemäß § 5 TMG: Möhle und Braker Datentechnik GbR Bahnhofstraße
        24 24647 Wasbek
      </p>

      <h2>Gesellschaftsform</h2>

      <p>Gesellschaft bürgerlichen Rechts</p>

      <h2>Vertreten durch</h2>
      <p>Rainer Braker</p>
      <p>Michael Möhle</p>

      <h2>Kontakt</h2>
      <p>Telefon: +49 4321 602097</p>
      <p>Telefax: +49 4321 602098</p>
      <p>E-Mail: info@mbd-team.de</p>

      <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
      <p>Michael Möhle</p>
      <p>Bahnhofstraße 24</p>
      <p>24647 Wasbek</p>
    </div>
  </div>
</template>

<style scoped>
.datenschutz-page {
  width: 100%;
  min-height: 100vh;
  padding: 120px 5% 100px;

  background:
    linear-gradient(rgba(50, 27, 20, 0.72), rgba(50, 27, 20, 0.82)),
    url("/bilder/dunklesholz.jpg");

  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  box-sizing: border-box;
}

.datenschutz-header {
  text-align: center;
  margin-bottom: 45px;
}

.datenschutz-klein {
  font-family: "Allura", cursive;
  color: var(--cream);
  font-size: clamp(28px, 4vw, 48px);
  line-height: 1;
  margin-bottom: 8px;
}

.datenschutz-header h1 {
  margin: 0;
  font-family: "Remark", sans-serif;
  color: var(--cream);
  font-size: clamp(28px, 4vw, 52px);
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.datenschutz-box {
  width: min(100%, 1000px);
  margin: 0 auto;
  padding: clamp(28px, 5vw, 60px);
  box-sizing: border-box;
  background: rgba(246, 239, 228, 0.94);
  border: 1px solid rgba(246, 239, 228, 0.5);
  color: var(--beige-dark);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
}

.datenschutz-box h2 {
  margin-top: 0;
  margin-bottom: 18px;
  font-family: "Remark", sans-serif;
  font-size: clamp(20px, 2vw, 28px);
  font-weight: normal;
  color: var(--beige-dark);
}

.datenschutz-box h2:not(:first-child) {
  margin-top: 42px;
}

.datenschutz-box p {
  margin: 0 0 18px;
  font-family: "Remark", sans-serif;
  font-size: clamp(16px, 1.2vw, 17px);
  line-height: 1.7;
  color: var(--beige-dark);
}

.datenschutz-box ul,
.datenschutz-box ol {
  margin: 0 0 20px;
  padding-left: 25px;
  font-family: "Remark", sans-serif;
  font-size: clamp(16px, 1.2vw, 17px);
  line-height: 1.7;
}

.datenschutz-box a {
  color: var(--light-brown);
  text-decoration: underline;
}

.datenschutz-box a:hover {
  opacity: 0.65;
}

.zurueck-button {
  position: fixed;
  top: 85px;
  left: 6%;
  padding: 11px 20px;
  background: transparent;
  color: var(--cream);
  border: 1px solid rgba(246, 239, 228, 0.35);
  font-family: "Remark", sans-serif;
  font-size: 16px;
  cursor: pointer;
  z-index: 20;
}

.zurueck-button:hover {
  background: var(--cream);
  color: var(--bar-brown);
  transform: translateX(-3px);
}

@media (max-width: 700px) {
  .datenschutz-page {
    padding: 100px 5% 90px;
    background-attachment: scroll;
  }

  .datenschutz-header {
    margin-bottom: 30px;
  }

  .datenschutz-box {
    padding: 25px 20px;
  }
}

@media (max-width: 420px) {
  .zurueck-button {
    top: 70px;
    left: 6%;
    padding: 9px 15px;
    font-size: 16px;
  }
}
</style>
