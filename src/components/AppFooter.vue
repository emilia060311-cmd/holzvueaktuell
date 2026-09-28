<script setup>
const links = [
  {
    label: "info@mbd-team.de",
    href: "mailto:info@mbd-team.de",
  },
  {
    label: "+49 4321 602097",
    href: "tel:+494321602097",
  },
  {
    label: "Impressum",
    to: "/impressum",
  },
  {
    label: "Datenschutz",
    to: "/datenschutz",
  },
];
</script>

<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-logo">Deine Holzverwaltung</div>

      <nav class="footer-links">
        <a
          v-for="link in links.filter((l) => l.href)"
          :key="link.href"
          :href="link.href"
        >
          {{ link.label }}
        </a>

        <RouterLink
          v-for="link in links.filter((l) => l.to)"
          :key="link.to"
          :to="link.to"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="footer-copy">
        © {{ new Date().getFullYear() }} Deine Holzverwaltung
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: fixed;

  left: 0;
  bottom: 0;

  width: 100%;
  height: var(--footer-h, 80px);

  background: var(--bar-brown);
  color: var(--cream);

  border-top: 1px solid rgba(255, 255, 255, 0.16);

  z-index: 5000;
}

.footer-inner {
  width: 100%;
  max-width: 1200px;
  height: 100%;

  margin: 0 auto;
  padding: 0 4%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 30px;
}

/* =====================================================
   LOGO
   ===================================================== */

.footer-logo {
  flex-shrink: 0;

  font-family: "Remark", sans-serif;
  font-size: 16px;
  font-weight: 400;

  white-space: nowrap;
  opacity: 0.9;
}

/* =====================================================
   LINKS
   ===================================================== */

.footer-links {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: clamp(14px, 2.5vw, 28px);

  white-space: nowrap;
}

.footer-links a {
  font-family: "Remark", sans-serif;
  font-size: 16px;
  font-weight: 400;

  color: var(--cream);
  text-decoration: none;

  opacity: 0.7;

  transition: opacity 0.2s ease;
}

.footer-links a:hover {
  opacity: 1;
}

/* =====================================================
   COPYRIGHT
   ===================================================== */

.footer-copy {
  flex-shrink: 0;

  font-family: "Remark", sans-serif;
  font-size: 16px;

  white-space: nowrap;

  opacity: 0.55;
}

/* =====================================================
   TABLET
   ===================================================== */

@media (max-width: 900px) {
  .footer-inner {
    gap: 20px;
  }

  .footer-logo,
  .footer-links a,
  .footer-copy {
    font-size: 14px;
  }

  .footer-links {
    gap: 12px 20px;
  }
}

/* =====================================================
   MOBILE
   ===================================================== */

@media (max-width: 650px) {
  .footer {
    height: auto;
    min-height: 120px;
  }

  .footer-inner {
    min-height: 120px;

    padding: 20px 6%;

    flex-direction: column;
    justify-content: center;

    text-align: center;

    gap: 12px;
  }

  .footer-logo {
    font-size: 16px;
  }

  .footer-links {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-wrap: wrap;

    gap: 8px 18px;

    white-space: normal;
  }

  .footer-links a {
    font-size: 13px;
  }

  .footer-copy {
    font-size: 12px;
  }
}
</style>
