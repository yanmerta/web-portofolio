/* =============================================
   WORD ANIMATION — with i18n support
   ============================================= */
let wordElements = [];
let currentWordIndex = 0;
let wordInterval = null;

function buildLetters(wordEl) {
  // Use raw translated text if available, otherwise existing text
  const rawText =
    wordEl.dataset.rawText || wordEl.textContent || wordEl.innerText;
  const letters = rawText.split("");
  wordEl.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    // Preserve &nbsp; space
    span.innerHTML = letter === " " ? "&nbsp;" : letter;
    span.className = "letter";
    wordEl.append(span);
  });
}

function initWordAnimation() {
  wordElements = Array.from(document.querySelectorAll(".word"));
  currentWordIndex = 0;

  wordElements.forEach((word) => buildLetters(word));

  if (wordElements.length > 0) {
    wordElements[0].style.opacity = "1";
    changeText();
    wordInterval = setInterval(changeText, 3000);
  }
}

function changeText() {
  if (!wordElements.length) return;
  const maxIdx = wordElements.length - 1;
  const currentWord = wordElements[currentWordIndex];
  const nextWord =
    currentWordIndex === maxIdx
      ? wordElements[0]
      : wordElements[currentWordIndex + 1];

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

  currentWordIndex = currentWordIndex === maxIdx ? 0 : currentWordIndex + 1;
}

// Called by i18n.js after language switch
window.reinitWordAnimation = function () {
  if (wordInterval) clearInterval(wordInterval);
  // Rebuild raw text from data-i18n-word translations
  document.querySelectorAll("[data-i18n-word]").forEach((wordEl) => {
    const key = wordEl.getAttribute("data-i18n-word");
    const val = window.I18n ? window.I18n.t(key) : null;
    if (val) wordEl.dataset.rawText = val;
  });
  initWordAnimation();
};

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
    // Prevent body scroll when menu is open
    document.body.style.overflow = navlist.classList.contains("open")
      ? "hidden"
      : "";
  });

  window.addEventListener("scroll", () => {
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
    document.body.style.overflow = "";
  });

  // Close menu on nav link click
  navlist.querySelectorAll("a[href]").forEach((link) => {
    link.addEventListener("click", () => {
      menuIcon.classList.remove("bx-x");
      navlist.classList.remove("open");
      document.body.style.overflow = "";
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
function showContent(target, activeBtn, inactiveBtn) {
  const eduContent = document.getElementById("education");
  const expContent = document.getElementById("experience");

  if (target === "education") {
    if (eduContent) {
      eduContent.style.display = "";
      eduContent.classList.add("qualification__active");
    }
    if (expContent) {
      expContent.style.display = "none";
      expContent.classList.remove("qualification__active");
    }
  } else {
    if (expContent) {
      expContent.style.display = "";
      expContent.classList.add("qualification__active");
    }
    if (eduContent) {
      eduContent.style.display = "none";
      eduContent.classList.remove("qualification__active");
    }
  }

  const aBtn = document.getElementById(activeBtn);
  const iBtn = document.getElementById(inactiveBtn);
  if (aBtn) aBtn.classList.add("qualification__active");
  if (iBtn) iBtn.classList.remove("qualification__active");
}

/* =============================================
   CONTACT FORM
   ============================================= */
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwyk6Y58ZWv0z5SfwizH-y_kO3VJv8Anpx0otR5HyBp5v8Zf8GTFtYCrPCQKajr_oY/exec";
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const t = window.i18n ? window.i18n.t.bind(window.i18n) : (k) => k;
    const successMsg = t("contact.successMsg") || "Message sent successfully!";
    const failMsg = t("contact.failMsg") || "Failed to send message";

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(form),
    })
      .then(() => {
        alert(successMsg);
        form.reset();
      })
      .catch(() => alert(failMsg));
  });
}

/* =============================================
   EXPERIENCE PHOTO SLIDER
   ============================================= */
(function () {
  const track = document.getElementById("expSliderTrack");
  const prevBtn = document.getElementById("expPrev");
  const nextBtn = document.getElementById("expNext");
  const dots = document.querySelectorAll(".exp-dot");

  if (!track || !prevBtn || !nextBtn) return;

  const slides = track.querySelectorAll(".exp-slide");
  const total = slides.length;
  let current = 0;
  let autoTimer = null;

  function goTo(idx) {
    if (idx < 0) idx = total - 1;
    if (idx >= total) idx = 0;
    current = idx;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === current);
    });
  }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(() => {
      goTo(current + 1);
    }, 4000);
  }

  function stopAuto() {
    if (autoTimer) clearInterval(autoTimer);
  }

  prevBtn.addEventListener("click", () => {
    goTo(current - 1);
    stopAuto();
    startAuto();
  });
  nextBtn.addEventListener("click", () => {
    goTo(current + 1);
    stopAuto();
    startAuto();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.getAttribute("data-idx"), 10);
      goTo(idx);
      stopAuto();
      startAuto();
    });
  });

  // Touch / swipe
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true },
  );

  track.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        goTo(diff > 0 ? current + 1 : current - 1);
        stopAuto();
        startAuto();
      }
    },
    { passive: true },
  );

  goTo(0);
  startAuto();
})();

/* =============================================
   INIT WORD ANIMATION (must be after DOM ready)
   ============================================= */
document.addEventListener("DOMContentLoaded", () => {
  initWordAnimation();
});
