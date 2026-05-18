/* =============================================
   script.js — Main Portfolio Script
   Bug fixes applied:
   1. Word animation race condition with i18n resolved via
      window.reinitWordAnimation exposed before DOMContentLoaded
   2. Skill dot data-percent now correctly maps to display text
   3. MixItUp guarded with typeof check
   4. Menu close after lang switch now handled in i18n.js
   5. Scroll-to-section offset accounts for sticky header height
   ============================================= */

/* =============================================
   WORD ANIMATION
   Uses opacity + translateY (no per-letter rotateX)
   ============================================= */
var wordElements = [];
var currentWordIndex = 0;
var wordInterval = null;

function initWordAnimation() {
  if (wordInterval) {
    clearInterval(wordInterval);
    wordInterval = null;
  }

  wordElements = Array.from(document.querySelectorAll(".word"));
  currentWordIndex = 0;

  if (wordElements.length === 0) return;

  // Hide all words above (ready to slide down into view)
  wordElements.forEach(function (word) {
    word.style.transition = "none";
    word.style.opacity = "0";
    word.style.transform = "translateY(-100%)";
  });

  // Double rAF — let browser flush before animating
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      if (wordElements[0]) {
        wordElements[0].style.transition =
          "opacity 0.9s ease, transform 0.9s ease";
        wordElements[0].style.opacity = "1";
        wordElements[0].style.transform = "translateY(0)";
      }
      wordInterval = setInterval(changeWord, 4000);
    });
  });
}

function changeWord() {
  if (!wordElements.length) return;

  var current = wordElements[currentWordIndex];
  var nextIndex = (currentWordIndex + 1) % wordElements.length;
  var next = wordElements[nextIndex];

  // STEP 1: Exit current — slide up and fade out
  current.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  current.style.opacity = "0";
  current.style.transform = "translateY(-100%)";

  // STEP 2: After exit finishes, enter next from below
  setTimeout(function () {
    // Push current fully off screen (no overlap risk)
    current.style.transition = "none";
    current.style.transform = "translateY(200%)";

    // Stage next below container
    next.style.transition = "none";
    next.style.opacity = "0";
    next.style.transform = "translateY(100%)";

    // Force reflow so transition:none is committed before re-enabling
    void next.offsetWidth;

    // Enter: slide up into place
    next.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    next.style.opacity = "1";
    next.style.transform = "translateY(0)";
  }, 520);

  currentWordIndex = nextIndex;
}

/**
 * Called by i18n.js after language change.
 * Expose BEFORE DOMContentLoaded so i18n.js can always find it.
 * At this point i18n has ALREADY updated .word textContent,
 * so we just need to reset and restart the animation.
 */
window.reinitWordAnimation = function () {
  if (wordInterval) {
    clearInterval(wordInterval);
    wordInterval = null;
  }

  // Snap all words hidden (above) without transition
  document.querySelectorAll(".word").forEach(function (word) {
    word.style.transition = "none";
    word.style.opacity = "0";
    word.style.transform = "translateY(-100%)";
  });

  // Small delay so the DOM has settled after i18n update
  setTimeout(initWordAnimation, 80);
};

/* =============================================
   CIRCLE / SKILL DOTS
   BUG FIX: data-percent drives both the dot fill AND
   the displayed percentage text (big element).
   The original code had mismatched hard-coded values.
   ============================================= */
var circles = document.querySelectorAll(".circle");
circles.forEach(function (elem) {
  var dots = parseInt(elem.getAttribute("data-dots"), 10);
  var percent = parseInt(elem.getAttribute("data-percent"), 10);
  var marked = Math.floor((dots * percent) / 100);
  var rotate = 360 / dots;
  var points = "";
  for (var i = 0; i < dots; i++) {
    points +=
      '<div class="points" style="--i:' +
      i +
      "; --rot:" +
      rotate +
      'deg"></div>';
  }
  elem.innerHTML = points;
  var pointsMarked = elem.querySelectorAll(".points");
  for (var j = 0; j < marked; j++) {
    if (pointsMarked[j]) pointsMarked[j].classList.add("marked");
  }

  // BUG FIX: sync the "big" percentage text with data-percent
  // The text element is a sibling inside .box > .text
  var box = elem.closest(".box");
  if (box) {
    var bigEl = box.querySelector(".text big");
    if (bigEl) bigEl.textContent = percent + "%";
  }
});

/* =============================================
   PORTFOLIO FILTER (MixItUp)
   BUG FIX: guard with typeof to prevent crash
   when mixitup.min.js fails to load
   ============================================= */
if (
  document.querySelector(".portofolio-gallery") &&
  typeof mixitup === "function"
) {
  var mixer = mixitup(".portofolio-gallery");
}

/* =============================================
   ACTIVE MENU ON SCROLL
   ============================================= */
var menuLi = document.querySelectorAll("header ul li a");
var sections = document.querySelectorAll("section");

function activeMenu() {
  var len = sections.length;
  while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
  menuLi.forEach(function (sec) {
    sec.classList.remove("active");
  });
  if (menuLi[len]) menuLi[len].classList.add("active");
}

if (sections.length > 0) {
  activeMenu();
  window.addEventListener("scroll", activeMenu);
}

/* =============================================
   STICKY HEADER
   ============================================= */
var header = document.querySelector("header");
if (header) {
  window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 50);
  });
}

/* =============================================
   MOBILE MENU TOGGLE
   BUG FIX: lang-option click handlers are now
   managed inside i18n.js to avoid double-binding
   and ensure correct close order.
   ============================================= */
var menuIcon = document.querySelector("#menu-icon");
var navlist = document.querySelector(".navlist");

if (menuIcon && navlist) {
  menuIcon.addEventListener("click", function () {
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
    document.body.style.overflow = navlist.classList.contains("open")
      ? "hidden"
      : "";
  });

  window.addEventListener("scroll", function () {
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
    document.body.style.overflow = "";
  });

  // Close menu when any nav link is clicked
  navlist.querySelectorAll("a[href]").forEach(function (link) {
    link.addEventListener("click", function () {
      menuIcon.classList.remove("bx-x");
      navlist.classList.remove("open");
      document.body.style.overflow = "";
    });
  });
}

/* =============================================
   INTERSECTION OBSERVER (SCROLL ANIMATIONS)
   ============================================= */
var observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
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
  .forEach(function (el) {
    observer.observe(el);
  });

/* =============================================
   THEME TOGGLE
   ============================================= */
var toggleModeButton = document.getElementById("toggle-mode");
var body = document.body;

function isDayTime() {
  var hour = new Date().getHours();
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
  var saved = localStorage.getItem("themeMode");
  if (saved === "light") applyTheme(true);
  else if (saved === "dark") applyTheme(false);
  else applyTheme(isDayTime());
}

// Auto-update theme every minute if no manual preference
setInterval(function () {
  if (!localStorage.getItem("themeMode")) applyTheme(isDayTime());
}, 60000);

if (toggleModeButton) {
  toggleModeButton.addEventListener("click", function () {
    var newIsLight = !body.classList.contains("light-mode");
    applyTheme(newIsLight);
    localStorage.setItem("themeMode", newIsLight ? "light" : "dark");
  });
}

initTheme();

/* =============================================
   QUALIFICATION TABS
   ============================================= */
function showContent(target, activeBtn, inactiveBtn) {
  var eduContent = document.getElementById("education");
  var expContent = document.getElementById("experience");

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

  var aBtn = document.getElementById(activeBtn);
  var iBtn = document.getElementById(inactiveBtn);
  if (aBtn) aBtn.classList.add("qualification__active");
  if (iBtn) iBtn.classList.remove("qualification__active");
}

/* =============================================
   CONTACT FORM
   ============================================= */
var scriptURL =
  "https://script.google.com/macros/s/AKfycbwyk6Y58ZWv0z5SfwizH-y_kO3VJv8Anpx0otR5HyBp5v8Zf8GTFtYCrPCQKajr_oY/exec";
var form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var t = window.i18n
      ? window.i18n.t.bind(window.i18n)
      : function (k) {
          return k;
        };
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then(function () {
        alert(t("contact.successMsg") || "Message sent successfully!");
        form.reset();
      })
      .catch(function () {
        alert(t("contact.failMsg") || "Failed to send message");
      });
  });
}

/* =============================================
   EXPERIENCE PHOTO SLIDER
   ============================================= */
(function () {
  var track = document.getElementById("expSliderTrack");
  var prevBtn = document.getElementById("expPrev");
  var nextBtn = document.getElementById("expNext");
  var dots = document.querySelectorAll(".exp-dot");

  if (!track || !prevBtn || !nextBtn) return;

  var slides = track.querySelectorAll(".exp-slide");
  var total = slides.length;
  var current = 0;
  var autoTimer = null;

  function goTo(idx) {
    if (idx < 0) idx = total - 1;
    if (idx >= total) idx = 0;
    current = idx;
    track.style.transform = "translateX(-" + current * 100 + "%)";
    dots.forEach(function (dot, i) {
      dot.classList.toggle("active", i === current);
    });
  }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(function () {
      goTo(current + 1);
    }, 4000);
  }

  function stopAuto() {
    if (autoTimer) clearInterval(autoTimer);
  }

  prevBtn.addEventListener("click", function () {
    goTo(current - 1);
    stopAuto();
    startAuto();
  });

  nextBtn.addEventListener("click", function () {
    goTo(current + 1);
    stopAuto();
    startAuto();
  });

  dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
      goTo(parseInt(dot.getAttribute("data-idx"), 10));
      stopAuto();
      startAuto();
    });
  });

  // Touch swipe support
  var touchStartX = 0;
  track.addEventListener(
    "touchstart",
    function (e) {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true },
  );
  track.addEventListener(
    "touchend",
    function (e) {
      var diff = touchStartX - e.changedTouches[0].screenX;
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
   INIT on DOMContentLoaded
   ============================================= */
document.addEventListener("DOMContentLoaded", function () {
  initWordAnimation();
});
