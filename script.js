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

  // Tutup menu saat scroll
  window.addEventListener("scroll", () => {
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
  });

  // Tutup menu saat klik link navigasi
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
   Dark = default (tidak ada class di body)
   Light = body.classList berisi "light-mode"
   ============================================= */
const toggleModeButton = document.getElementById("toggle-mode");
const body = document.body;

// Cek apakah saat ini siang hari (06:00 - 18:00)
function isDayTime() {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 18;
}

// Terapkan tema berdasarkan kondisi
function applyTheme(isLight) {
  if (isLight) {
    body.classList.add("light-mode");
  } else {
    body.classList.remove("light-mode");
  }
  updateToggleIcon(isLight);
}

// Update ikon tombol toggle
function updateToggleIcon(isLight) {
  if (!toggleModeButton) return;
  toggleModeButton.innerHTML = isLight
    ? '<i class="bx bx-moon"></i>' // siang → tawarkan mode gelap
    : '<i class="bx bx-sun"></i>'; // malam → tawarkan mode terang
}

// Inisialisasi tema saat halaman dimuat
function initTheme() {
  const saved = localStorage.getItem("themeMode"); // "light" | "dark" | null

  if (saved === "light") {
    applyTheme(true);
  } else if (saved === "dark") {
    applyTheme(false);
  } else {
    // Belum ada preferensi tersimpan → gunakan waktu sistem
    applyTheme(isDayTime());
  }
}

// Perbarui tema otomatis setiap menit (jika belum ada preferensi manual)
setInterval(() => {
  if (!localStorage.getItem("themeMode")) {
    applyTheme(isDayTime());
  }
}, 60000);

// Tombol toggle manual
if (toggleModeButton) {
  toggleModeButton.addEventListener("click", () => {
    const isCurrentlyLight = body.classList.contains("light-mode");
    const newIsLight = !isCurrentlyLight;

    applyTheme(newIsLight);
    // Simpan preferensi manual
    localStorage.setItem("themeMode", newIsLight ? "light" : "dark");
  });
}

// Jalankan inisialisasi
initTheme();

/* =============================================
   QUALIFICATION TABS (Pendidikan / Pengalaman)
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
