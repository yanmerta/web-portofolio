/* =============================================
   WORD ANIMATION
   ============================================= */
let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
if (words.length > 0) words[currentWordIndex].style.opacity = "1";

let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });

  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(
      () => {
        letter.className = "letter in";
      },
      340 + i * 80,
    );
  });

  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

if (words.length > 0) {
  changeText();
  setInterval(changeText, 3000);
}

/* =============================================
   CIRCLE / SKILL DOTS
   ============================================= */
const circles = document.querySelectorAll(".circle");
circles.forEach((elem) => {
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor((dots * marked) / 100);
  var rotate = 360 / dots;
  var points = "";

  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }
  elem.innerHTML = points;

  const pointsMarked = elem.querySelectorAll(".points");
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("marked");
  }
});

/* =============================================
   PORTFOLIO FILTER (MixItUp)
   ============================================= */
if (document.querySelector(".portofolio-gallery")) {
  var mixer = mixitup(".portofolio-gallery");
}

/* =============================================
   ACTIVE MENU ON SCROLL
   ============================================= */
let menuLi = document.querySelectorAll("header ul li a");
let sections = document.querySelectorAll("section");

function activeMenu() {
  let len = sections.length;
  while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
  menuLi.forEach((sec) => sec.classList.remove("active"));
  if (menuLi[len]) menuLi[len].classList.add("active");
}

if (sections.length > 0) {
  activeMenu();
  window.addEventListener("scroll", activeMenu);
}

/* =============================================
   STICKY HEADER
   ============================================= */
const header = document.querySelector("header");
if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 50);
  });
}

/* =============================================
   MOBILE MENU TOGGLE
   ============================================= */
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

if (menuIcon && navlist) {
  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
  });

  window.addEventListener("scroll", () => {
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
  });

  navlist.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuIcon.classList.remove("bx-x");
      navlist.classList.remove("open");
    });
  });
}

/* =============================================
   INTERSECTION OBSERVER (SCROLL ANIMATIONS)
   ============================================= */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-items");
      } else {
        entry.target.classList.remove("show-items");
      }
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(".scroll-scale, .scroll-bottom, .scroll-top")
  .forEach((el) => observer.observe(el));

/* =============================================
   THEME TOGGLE
   ============================================= */
const toggleModeButton = document.getElementById("toggle-mode");
const body = document.body;

function isDayTime() {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 18;
}

function applyTheme(isLight) {
  if (isLight) {
    body.classList.add("light-mode");
  } else {
    body.classList.remove("light-mode");
  }
  updateToggleIcon(isLight);
}

function updateToggleIcon(isLight) {
  if (!toggleModeButton) return;
  toggleModeButton.innerHTML = isLight
    ? '<i class="bx bx-moon"></i>'
    : '<i class="bx bx-sun"></i>';
}

function initTheme() {
  const saved = localStorage.getItem("themeMode");
  if (saved === "light") {
    applyTheme(true);
  } else if (saved === "dark") {
    applyTheme(false);
  } else {
    applyTheme(isDayTime());
  }
}

setInterval(() => {
  if (!localStorage.getItem("themeMode")) {
    applyTheme(isDayTime());
  }
}, 60000);

if (toggleModeButton) {
  toggleModeButton.addEventListener("click", () => {
    const isCurrentlyLight = body.classList.contains("light-mode");
    const newIsLight = !isCurrentlyLight;
    applyTheme(newIsLight);
    localStorage.setItem("themeMode", newIsLight ? "light" : "dark");
  });
}

initTheme();

/* =============================================
   QUALIFICATION TABS
   ============================================= */
const qualTabs = document.querySelectorAll(".qualification__button");
const qualContents = document.querySelectorAll(".qualification__content");

qualTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.getAttribute("data-target");

    qualContents.forEach((content) => {
      content.classList.remove("qualification__active");
      content.classList.add("qualification__nonactive");
    });

    qualTabs.forEach((t) => t.classList.remove("qualification__active-tab"));
    tab.classList.add("qualification__active-tab");

    const targetEl = document.querySelector(target);
    if (targetEl) {
      targetEl.classList.add("qualification__active");
      targetEl.classList.remove("qualification__nonactive");
    }
  });
});

/* =============================================
   EXPERIENCE PHOTO SLIDER
   ============================================= */
(function () {
  const slides = document.querySelectorAll(".exp-slide");
  const dots = document.querySelectorAll(".dot");
  const cards = document.querySelectorAll(".exp-card");
  const prevBtn = document.getElementById("sliderPrev");
  const nextBtn = document.getElementById("sliderNext");

  if (!slides.length) return;

  let currentIndex = 0;
  let autoplayTimer = null;

  function goToSlide(index, direction) {
    // Remove active from current
    slides[currentIndex].classList.remove("active");
    dots[currentIndex].classList.remove("active");
    cards[currentIndex].classList.remove("exp-card--active");

    // Update index
    currentIndex = (index + slides.length) % slides.length;

    // Animate in new slide
    slides[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
    cards[currentIndex].classList.add("exp-card--active");
  }

  function nextSlide() {
    goToSlide(currentIndex + 1, "next");
  }

  function prevSlide() {
    goToSlide(currentIndex - 1, "prev");
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(nextSlide, 3500);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  // Button events
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      stopAutoplay();
      startAutoplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      stopAutoplay();
      startAutoplay();
    });
  }

  // Dot events
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.getAttribute("data-dot"));
      goToSlide(idx);
      stopAutoplay();
      startAutoplay();
    });
  });

  // Card click events — sync slider to card
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const idx = parseInt(card.getAttribute("data-card"));
      goToSlide(idx);
      stopAutoplay();
      startAutoplay();
    });
  });

  // Pause autoplay on hover
  const sliderContainer = document.querySelector(".exp-slider-container");
  if (sliderContainer) {
    sliderContainer.addEventListener("mouseenter", stopAutoplay);
    sliderContainer.addEventListener("mouseleave", startAutoplay);
  }

  // Touch swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  if (sliderContainer) {
    sliderContainer.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true },
    );

    sliderContainer.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 40) {
          if (diff > 0) nextSlide();
          else prevSlide();
          stopAutoplay();
          startAutoplay();
        }
      },
      { passive: true },
    );
  }

  // Init first state — remove any stale classes first
  slides.forEach((s) => s.classList.remove("active"));
  dots.forEach((d) => d.classList.remove("active"));
  cards.forEach((c) => c.classList.remove("exp-card--active"));
  slides[0].classList.add("active");
  dots[0].classList.add("active");
  cards[0].classList.add("exp-card--active");

  startAutoplay();
})();

/* =============================================
   CONTACT FORM
   ============================================= */
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwyk6Y58ZWv0z5SfwizH-y_kO3VJv8Anpx0otR5HyBp5v8Zf8GTFtYCrPCQKajr_oY/exec";
const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      alert("Pesan berhasil dikirim!");
      form.reset();
    })
    .catch((error) => alert("Gagal mengirim pesan"));
});
