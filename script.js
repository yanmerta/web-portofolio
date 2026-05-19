/* =============================================
   script.js — Main Portfolio Script
   Bug fixes applied:
   1. Word animation race condition with i18n resolved via
      window.reinitWordAnimation exposed before DOMContentLoaded
   2. Skill dot data-percent correctly maps to display text (B1)
   3. MixItUp guarded with typeof check
   4. Menu close after lang switch handled in i18n.js
   5. Scroll-to-section offset accounts for sticky header height
   6. FIX B5: Exp slider dots dibuat secara dinamis dari JS,
      tidak lagi hard-coded di HTML — jumlah dot selalu sinkron
      dengan jumlah slide yang aktif
   7. FIX B7: activeMenu() diberi guard len >= 0 agar tidak
      crash saat scroll berada di atas section pertama
   ============================================= */

/* =============================================
   WORD ANIMATION
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

  wordElements.forEach(function (word) {
    word.style.transition = "none";
    word.style.opacity = "0";
    word.style.transform = "translateY(-100%)";
  });

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

  current.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  current.style.opacity = "0";
  current.style.transform = "translateY(-100%)";

  setTimeout(function () {
    current.style.transition = "none";
    current.style.transform = "translateY(200%)";

    next.style.transition = "none";
    next.style.opacity = "0";
    next.style.transform = "translateY(100%)";

    void next.offsetWidth;

    next.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    next.style.opacity = "1";
    next.style.transform = "translateY(0)";
  }, 520);

  currentWordIndex = nextIndex;
}

window.reinitWordAnimation = function () {
  if (wordInterval) {
    clearInterval(wordInterval);
    wordInterval = null;
  }

  document.querySelectorAll(".word").forEach(function (word) {
    word.style.transition = "none";
    word.style.opacity = "0";
    word.style.transform = "translateY(-100%)";
  });

  setTimeout(initWordAnimation, 80);
};

/* =============================================
   CIRCLE / SKILL DOTS
   FIX B1: data-percent drives both dot fill AND
   displayed percentage text (big element) —
   nilai big di HTML sudah diseragamkan, tapi JS
   ini tetap meng-override untuk keamanan.
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

  /* FIX B1: sinkronkan teks <big> dengan data-percent */
  var box = elem.closest(".box");
  if (box) {
    var bigEl = box.querySelector(".text big");
    if (bigEl) bigEl.textContent = percent + "%";
  }
});

/* =============================================
   PORTFOLIO FILTER (MixItUp)
   ============================================= */
if (
  document.querySelector(".portofolio-gallery") &&
  typeof mixitup === "function"
) {
  var mixer = mixitup(".portofolio-gallery");
}

/* =============================================
   ACTIVE MENU ON SCROLL
   FIX B7: tambahkan guard len >= 0 agar tidak
   crash ketika scroll di atas section pertama
   ============================================= */
var menuLi = document.querySelectorAll("header ul li a");
var sections = document.querySelectorAll("section");

function activeMenu() {
  var len = sections.length;
  while (--len && window.scrollY + 97 < sections[len].offsetTop) {}

  menuLi.forEach(function (sec) {
    sec.classList.remove("active");
  });

  /* FIX B7: guard agar tidak mengakses index negatif */
  if (len >= 0 && menuLi[len]) {
    menuLi[len].classList.add("active");
  }
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
   FIX B6: akses window.i18n dengan fallback
   yang lebih eksplisit dan aman
   ============================================= */
var scriptURL =
  "https://script.google.com/macros/s/AKfycbwyk6Y58ZWv0z5SfwizH-y_kO3VJv8Anpx0otR5HyBp5v8Zf8GTFtYCrPCQKajr_oY/exec";
var form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    /* FIX B6: gunakan optional chaining yang aman */
    function getMsg(key, fallback) {
      if (window.i18n && typeof window.i18n.t === "function") {
        var val = window.i18n.t(key);
        return val !== key ? val : fallback;
      }
      return fallback;
    }
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then(function () {
        alert(getMsg("contact.successMsg", "Message sent successfully!"));
        form.reset();
      })
      .catch(function () {
        alert(getMsg("contact.failMsg", "Failed to send message"));
      });
  });
}

/* =============================================
   EXPERIENCE PHOTO SLIDER
   FIX B5: dots dibuat secara dinamis dari JS
   berdasarkan jumlah .exp-slide yang ada,
   tidak lagi bergantung pada markup statis di HTML.
   Dengan begitu, menambah/menghapus slide di HTML
   tidak perlu mengubah dots secara manual.
   ============================================= */
(function () {
  var track = document.getElementById("expSliderTrack");
  var prevBtn = document.getElementById("expPrev");
  var nextBtn = document.getElementById("expNext");
  var dotsContainer = document.getElementById("expDots");

  if (!track || !prevBtn || !nextBtn || !dotsContainer) return;

  var slides = track.querySelectorAll(".exp-slide");
  var total = slides.length;
  var current = 0;
  var autoTimer = null;

  /* FIX B5: Buat dots secara dinamis sesuai jumlah slide */
  dotsContainer.innerHTML = "";
  var dotEls = [];
  for (var d = 0; d < total; d++) {
    var dot = document.createElement("span");
    dot.className = "exp-dot" + (d === 0 ? " active" : "");
    dot.setAttribute("data-idx", d);
    dotsContainer.appendChild(dot);
    dotEls.push(dot);

    /* closure untuk menangkap nilai d yang benar */
    (function (idx) {
      dot.addEventListener("click", function () {
        goTo(idx);
        stopAuto();
        startAuto();
      });
    })(d);
  }

  function goTo(idx) {
    if (idx < 0) idx = total - 1;
    if (idx >= total) idx = 0;
    current = idx;
    track.style.transform = "translateX(-" + current * 100 + "%)";
    dotEls.forEach(function (dot, i) {
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

  /* Touch swipe support */
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
