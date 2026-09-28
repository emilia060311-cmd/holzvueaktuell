import { ref, onMounted, onUnmounted, nextTick } from "vue";

const ANIMATION_DURATION = 1200;
const WHEEL_THRESHOLD = 45;
const START_BOTTOM_TOLERANCE = 30;

/**
 * Portierung der ursprünglichen script.js Slide-Logik nach Vue.
 *
 * Verwendung in einer View-Komponente:
 *
 *   const slidesContainer = ref(null);
 *   const slideEls = ref([]); // per :ref="el => slideEls[i] = el" befüllen
 *   const { currentIndex, slideMode, dotEls, enterSlideMode, goToSlide,
 *           leaveSlideModeToStart, backToTop } = useSlider(slidesContainer, slideEls);
 */
export function useSlider(slidesContainerRef, slideElsRef) {
  const currentIndex = ref(0);
  const slideMode = ref(false);
  const isAnimating = ref(false);

  function slides() {
    return slideElsRef.value.filter(Boolean);
  }

  function getHorizontalWrapper(slide) {
    if (!slide) return null;
    return slide.querySelector("[data-horizontal-slide]");
  }

  function isSlideAtBottom(slide) {
    if (!slide) return true;
    const hWrapper = getHorizontalWrapper(slide);
    if (hWrapper) {
      const maxScroll = hWrapper.scrollWidth - hWrapper.clientWidth;
      return hWrapper.scrollLeft >= maxScroll - 2;
    }
    const maxScroll = slide.scrollHeight - slide.clientHeight;
    return slide.scrollTop >= maxScroll - 2;
  }

  function isSlideAtTop(slide) {
    if (!slide) return true;
    const hWrapper = getHorizontalWrapper(slide);
    if (hWrapper) return hWrapper.scrollLeft <= 2;
    return slide.scrollTop <= 2;
  }

  function findHorizontalScroller(element) {
    let current = element;
    while (current && current !== document.body) {
      const style = window.getComputedStyle(current);
      const canScrollHorizontally =
        current.scrollWidth > current.clientWidth + 2 &&
        (style.overflowX === "auto" || style.overflowX === "scroll");
      if (canScrollHorizontally) return current;
      current = current.parentElement;
    }
    return null;
  }

  function isInsideHorizontalScroller(event) {
    if (!event || !event.target) return false;
    return Boolean(findHorizontalScroller(event.target));
  }

  function updateDots() {
    // Dots werden reaktiv über currentIndex im Template eingefärbt (:class="{ active: i === currentIndex }")
  }

  function revealCurrentSlide() {
    const current = slides()[currentIndex.value];
    if (!current) return;
    current
      .querySelectorAll(".fly")
      .forEach((el) => el.classList.add("visible"));
  }

  function isAtStartseiteBottom() {
    if (!slidesContainerRef.value) return false;
    const startseiteBottom = slidesContainerRef.value.offsetTop;
    const currentBottom = window.scrollY + window.innerHeight;
    return currentBottom >= startseiteBottom - START_BOTTOM_TOLERANCE;
  }

  function enterSlideMode(index = 0) {
    const list = slides();
    if (!list.length || isAnimating.value) return;

    isAnimating.value = true;
    slideMode.value = true;
    currentIndex.value = Math.max(0, Math.min(index, list.length - 1));

    document.body.classList.add("slide-mode");

    if (slidesContainerRef.value) {
      window.scrollTo({
        top: slidesContainerRef.value.offsetTop,
        behavior: "auto",
      });
    }

    list.forEach((slide, i) => {
      slide.style.transition = "none";
      slide.style.zIndex = "1";

      if (i < currentIndex.value) {
        slide.style.transform = "translateX(-100vw)";
      } else if (i === currentIndex.value) {
        slide.style.transform = "translateX(100vw)";
        slide.style.zIndex = "100";
      } else {
        slide.style.transform = "translateX(100vw)";
      }

      slide.scrollTop = 0;
      const hWrapper = getHorizontalWrapper(slide);
      if (hWrapper) hWrapper.scrollLeft = 0;
    });

    updateDots();

    void list[currentIndex.value].offsetWidth;

    requestAnimationFrame(() => {
      list[currentIndex.value].style.transition =
        "transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)";
      list[currentIndex.value].style.transform = "translateX(0)";

      setTimeout(() => {
        list.forEach((slide, i) => {
          slide.style.transition =
            "transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)";
          if (i < currentIndex.value) {
            slide.style.transform = "translateX(-100vw)";
            slide.style.zIndex = "1";
          } else if (i === currentIndex.value) {
            slide.style.transform = "translateX(0)";
            slide.style.zIndex = "10";
          } else {
            slide.style.transform = "translateX(100vw)";
            slide.style.zIndex = "1";
          }
        });
        isAnimating.value = false;
      }, ANIMATION_DURATION);
    });
  }

  function leaveSlideModeToStart() {
    if (isAnimating.value) return;
    isAnimating.value = true;
    slideMode.value = false;
    document.body.classList.remove("slide-mode");

    slides().forEach((slide) => {
      slide.style.transition = "none";
      slide.style.transform = "translateX(100vw)";
      slide.style.zIndex = "1";
    });

    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      isAnimating.value = false;
    }, ANIMATION_DURATION);
  }

  function leaveSlideModeToStartBottom() {
    if (isAnimating.value) return;
    isAnimating.value = true;
    slideMode.value = false;
    document.body.classList.remove("slide-mode");

    slides().forEach((slide) => {
      slide.style.transition = "none";
      slide.style.transform = "translateX(100vw)";
      slide.style.zIndex = "1";
    });

    if (slidesContainerRef.value) {
      const bottomPosition =
        slidesContainerRef.value.offsetTop - window.innerHeight;
      window.scrollTo({ top: Math.max(0, bottomPosition), behavior: "smooth" });
    }

    setTimeout(() => {
      isAnimating.value = false;
    }, ANIMATION_DURATION);
  }

  function goToSlide(index) {
    const list = slides();
    if (isAnimating.value) return;

    if (index < 0) {
      leaveSlideModeToStartBottom();
      return;
    }
    if (index >= list.length) {
      leaveSlideModeToStart();
      return;
    }
    if (index === currentIndex.value) return;

    const oldIndex = currentIndex.value;
    const currentSlide = list[oldIndex];
    const targetSlide = list[index];
    const isForward = index > oldIndex;

    isAnimating.value = true;

    targetSlide.scrollTop = 0;
    const targetHWrapper = getHorizontalWrapper(targetSlide);
    if (targetHWrapper) {
      targetHWrapper.scrollLeft = isForward
        ? 0
        : targetHWrapper.scrollWidth - targetHWrapper.clientWidth;
    }

    if (isForward) {
      targetSlide.style.transition = "none";
      targetSlide.style.transform = "translateX(100vw)";
      targetSlide.style.zIndex = "100";
      currentSlide.style.zIndex = "10";

      void targetSlide.offsetWidth;

      targetSlide.style.transition =
        "transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)";
      requestAnimationFrame(() => {
        targetSlide.style.transform = "translateX(0)";
      });
    } else {
      targetSlide.style.transition = "none";
      targetSlide.style.transform = "translateX(0)";
      targetSlide.style.zIndex = "10";
      currentSlide.style.zIndex = "100";
      currentSlide.style.transition =
        "transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)";

      void currentSlide.offsetWidth;

      requestAnimationFrame(() => {
        currentSlide.style.transform = "translateX(100vw)";
      });
    }

    currentIndex.value = index;
    updateDots();
    nextTick(revealCurrentSlide);

    setTimeout(() => {
      list.forEach((slide, i) => {
        slide.style.transition = "none";
        if (i < currentIndex.value) {
          slide.style.transform = "translateX(-100vw)";
          slide.style.zIndex = "1";
        } else if (i === currentIndex.value) {
          slide.style.transform = "translateX(0)";
          slide.style.zIndex = "10";
        } else {
          slide.style.transform = "translateX(100vw)";
          slide.style.zIndex = "1";
        }
      });

      requestAnimationFrame(() => {
        list.forEach((slide) => {
          slide.style.transition =
            "transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)";
        });
      });

      isAnimating.value = false;
    }, ANIMATION_DURATION);
  }

  function nextSlide() {
    if (!slideMode.value) return;
    if (currentIndex.value < slides().length - 1) {
      goToSlide(currentIndex.value + 1);
    } else {
      leaveSlideModeToStart();
    }
  }

  function previousSlide() {
    if (!slideMode.value) return;
    if (currentIndex.value > 0) {
      goToSlide(currentIndex.value - 1);
    } else {
      leaveSlideModeToStartBottom();
    }
  }

  function scrollToSlides() {
    if (!slidesContainerRef.value) return;
    const target = slidesContainerRef.value.offsetTop - window.innerHeight;
    window.scrollTo({ top: Math.max(0, target), behavior: "smooth" });
  }

  function goToSectionById(targetId) {
    const list = slides();
    const targetElement = document.getElementById(targetId.replace("#", ""));
    if (!targetElement) return;
    const targetIndex = list.indexOf(targetElement);
    if (targetIndex === -1) return;
    enterSlideMode(targetIndex);
  }

  // --------- globale Event-Handler (wheel / touch / keydown) ---------

  function handleWheel(event) {
    if (!slideMode.value) {
      if (!isAtStartseiteBottom()) return;
      if (Math.abs(event.deltaY) < WHEEL_THRESHOLD) return;
      if (event.deltaY > WHEEL_THRESHOLD) {
        event.preventDefault();
        enterSlideMode(0);
      }
      return;
    }

    if (isAnimating.value) {
      event.preventDefault();
      return;
    }

    const list = slides();
    const currentSlide = list[currentIndex.value];
    if (!currentSlide) return;

    if (isInsideHorizontalScroller(event)) {
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
    }

    const deltaY = event.deltaY;
    if (Math.abs(deltaY) < WHEEL_THRESHOLD) return;

    const goingDown = deltaY > WHEEL_THRESHOLD;
    const goingUp = deltaY < -WHEEL_THRESHOLD;
    const hWrapper = getHorizontalWrapper(currentSlide);

    if (goingDown) {
      if (hWrapper) {
        const maxScroll = hWrapper.scrollWidth - hWrapper.clientWidth;
        event.preventDefault();
        if (hWrapper.scrollLeft < maxScroll - 2) {
          hWrapper.scrollLeft = Math.min(
            maxScroll,
            hWrapper.scrollLeft + deltaY,
          );
          return;
        }
        nextSlide();
        return;
      }
      if (!isSlideAtBottom(currentSlide)) return;
      event.preventDefault();
      nextSlide();
      return;
    }

    if (goingUp) {
      if (hWrapper) {
        event.preventDefault();
        if (hWrapper.scrollLeft > 2) {
          hWrapper.scrollLeft = Math.max(0, hWrapper.scrollLeft + deltaY);
          return;
        }
        previousSlide();
        return;
      }
      if (!isSlideAtTop(currentSlide)) return;
      event.preventDefault();
      previousSlide();
    }
  }

  let touchStartX = 0;
  let touchStartY = 0;

  function handleTouchStart(event) {
    if (!event.touches.length) return;
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
  }

  function handleTouchEnd(event) {
    if (isAnimating.value || !event.changedTouches.length) return;

    const touch = event.changedTouches[0];
    const diffX = touchStartX - touch.clientX;
    const diffY = touchStartY - touch.clientY;

    if (Math.max(Math.abs(diffX), Math.abs(diffY)) < 60) return;

    if (!slideMode.value) {
      if (diffY > 60 && isAtStartseiteBottom()) enterSlideMode(0);
      return;
    }

    const currentSlide = slides()[currentIndex.value];
    if (!currentSlide) return;

    const hWrapper = getHorizontalWrapper(currentSlide);

    if (Math.abs(diffX) > Math.abs(diffY)) {
      const touchTarget = event.target;
      if (touchTarget && findHorizontalScroller(touchTarget)) return;
      if (hWrapper) return;
      diffX > 0 ? nextSlide() : previousSlide();
      return;
    }

    if (diffY > 60) {
      if (hWrapper) {
        const maxScroll = hWrapper.scrollWidth - hWrapper.clientWidth;
        if (hWrapper.scrollLeft < maxScroll - 2) {
          hWrapper.scrollLeft = Math.min(
            maxScroll,
            hWrapper.scrollLeft + diffY,
          );
          return;
        }
        nextSlide();
        return;
      }
      if (!isSlideAtBottom(currentSlide)) return;
      nextSlide();
      return;
    }

    if (diffY < -60) {
      if (hWrapper) {
        if (hWrapper.scrollLeft > 2) {
          hWrapper.scrollLeft = Math.max(0, hWrapper.scrollLeft + diffY);
          return;
        }
        previousSlide();
        return;
      }
      if (!isSlideAtTop(currentSlide)) return;
      previousSlide();
    }
  }

  function handleKeydown(event) {
    if (!slideMode.value) return;

    const currentSlide = slides()[currentIndex.value];
    const hWrapper = getHorizontalWrapper(currentSlide);

    if (
      event.key === "ArrowDown" ||
      event.key === "PageDown" ||
      event.key === " "
    ) {
      event.preventDefault();
      if (currentSlide && !isSlideAtBottom(currentSlide)) {
        if (hWrapper) {
          hWrapper.scrollBy({
            left: window.innerWidth * 0.8,
            behavior: "smooth",
          });
        } else {
          currentSlide.scrollBy({
            top: window.innerHeight * 0.8,
            behavior: "smooth",
          });
        }
        return;
      }
      nextSlide();
      return;
    }

    if (event.key === "ArrowUp" || event.key === "PageUp") {
      event.preventDefault();
      if (currentSlide && !isSlideAtTop(currentSlide)) {
        if (hWrapper) {
          hWrapper.scrollBy({
            left: -window.innerWidth * 0.8,
            behavior: "smooth",
          });
        } else {
          currentSlide.scrollBy({
            top: -window.innerHeight * 0.8,
            behavior: "smooth",
          });
        }
        return;
      }
      previousSlide();
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      nextSlide();
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      previousSlide();
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      leaveSlideModeToStart();
    }
  }

  onMounted(() => {
    // Startposition wie im Original: alle Slides nach rechts, dann einblenden
    slideMode.value = false;
    currentIndex.value = 0;
    document.body.classList.remove("slide-mode");

    slides().forEach((slide) => {
      slide.style.transition = "none";
      slide.style.transform = "translateX(100vw)";
      slide.style.zIndex = "1";
      slide.scrollTop = 0;
      const hWrapper = getHorizontalWrapper(slide);
      if (hWrapper) hWrapper.scrollLeft = 0;
    });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        slides().forEach((slide) => {
          slide.style.transition =
            "transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)";
        });
      });
    });

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeydown);
  });

  onUnmounted(() => {
    window.removeEventListener("wheel", handleWheel);
    window.removeEventListener("touchstart", handleTouchStart);
    window.removeEventListener("touchend", handleTouchEnd);
    window.removeEventListener("keydown", handleKeydown);
    document.body.classList.remove("slide-mode");
  });

  return {
    currentIndex,
    slideMode,
    enterSlideMode,
    goToSlide,
    nextSlide,
    previousSlide,
    leaveSlideModeToStart,
    leaveSlideModeToStartBottom,
    scrollToSlides,
    goToSectionById,
  };
}
