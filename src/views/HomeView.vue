<script setup>
import { ref } from "vue";
import { useSlider } from "../composables/useSlider";

import AppTopbar from "../components/AppTopbar.vue";
import AppFooter from "../components/AppFooter.vue";

import Startseite from "../components/sections/Startseite.vue";
import Zielgruppe from "../components/sections/Zielgruppe.vue";
import Funktionen from "../components/sections/Funktionen.vue";
import Vorteile from "../components/sections/Vorteile.vue";
import Preise from "../components/sections/Preise.vue";
import Kontakt from "../components/sections/Kontakt.vue";

// Reihenfolge der Slides
const SLIDE_IDS = ["zielgruppe", "funktionen", "vorteile", "preise", "kontakt"];

const slidesContainer = ref(null);
const slideEls = ref([]);

function setSlideRef(el, index) {
  if (el) slideEls.value[index] = el;
}

const {
  currentIndex,
  slideMode,
  enterSlideMode,
  goToSlide,
  leaveSlideModeToStart,
  scrollToSlides,
} = useSlider(slidesContainer, slideEls);

function onDotClick(index) {
  if (!slideMode.value) {
    enterSlideMode(index);
  } else {
    goToSlide(index);
  }
}

// Navigation der Topbar
function handleNavigate(id) {
  if (id === "start") {
    if (slideMode.value) {
      leaveSlideModeToStart();
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    return;
  }

  const index = SLIDE_IDS.indexOf(id);

  if (index === -1) return;

  if (!slideMode.value) {
    enterSlideMode(index);
  } else {
    goToSlide(index);
  }
}
</script>

<template>
  <div class="home-page">
    <AppTopbar @navigate="handleNavigate" />

    <Startseite @scroll-to-slides="scrollToSlides" />

    <div ref="slidesContainer" class="slides-container">
      <div
        v-for="(id, index) in SLIDE_IDS"
        :key="id"
        :ref="(el) => setSlideRef(el, index)"
        class="slide"
      >
        <Zielgruppe v-if="id === 'zielgruppe'" />

        <Funktionen v-else-if="id === 'funktionen'" />

        <Vorteile v-else-if="id === 'vorteile'" />

        <Preise v-else-if="id === 'preise'" />

        <Kontakt
          v-else-if="id === 'kontakt'"
          @back-to-top="leaveSlideModeToStart"
        />
      </div>
    </div>

    <nav id="dots" aria-label="Slide-Navigation">
      <button
        v-for="(id, index) in SLIDE_IDS"
        :key="id"
        type="button"
        :class="{ active: index === currentIndex }"
        :aria-label="id"
        @click="onDotClick(index)"
      />
    </nav>

    <AppFooter />
  </div>
</template>

<style scoped>
.home-page {
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}

.slides-container {
  position: relative;

  width: 100%;
  height: calc(100vh - var(--footer-h));

  margin: 0;
  padding: 0;

  overflow: hidden;

  background:
    linear-gradient(rgba(50, 27, 20, 0.55), rgba(50, 27, 20, 0.55)),
    url("/bilder/dunklesholz.jpg");

  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.slide {
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: calc(100vh - var(--footer-h));

  min-width: 100%;
  min-height: calc(100vh - var(--footer-h));

  margin: 0;

  overflow-y: auto;
  overflow-x: hidden;

  color: var(--cream);

  transform: translateX(100vw);

  visibility: visible;

  z-index: 1;

  will-change: transform;

  transition: transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
}

@media (prefers-reduced-motion: reduce) {
  .slide {
    transition-duration: 1ms;
  }
}
</style>
