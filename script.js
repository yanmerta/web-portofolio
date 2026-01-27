// ================================
// TEXT ROTATION ANIMATION
// ================================
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
words[currentWordIndex].style.opacity = "1";

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

changeText();
setInterval(changeText, 3000);

// ================================
// PROFESSIONAL SKILLS CIRCLES
// ================================
const circles = document.querySelectorAll(".circle");
circles.forEach((elem) => {
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor((dots * marked) / 100);
  var points = "";
  var rotate = 360 / dots;

  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }
  elem.innerHTML = points;

  const pointsMarked = elem.querySelectorAll(".points");
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("marked");
  }
});

// ================================
// PORTFOLIO FILTER (MIXITUP)
// ================================
if (typeof mixitup !== "undefined") {
  var mixer = mixitup(".portofolio-gallery", {
    animation: {
      duration: 500,
      nudge: true,
      reverseOut: false,
      effects: "fade translateZ(-100px)",
    },
  });
}

// ================================
// ACTIVE MENU HIGHLIGHTING
// ================================
let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");

function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 97 < section[len].offsetTop) {}
  menuLi.forEach((sec) => sec.classList.remove("active"));
  if (menuLi[len]) {
    menuLi[len].classList.add("active");
  }
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// ================================
// STICKY HEADER
// ================================
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 50);
});

// ================================
// MOBILE MENU TOGGLE
// ================================
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

// Close menu when clicking on a link
menuLi.forEach((link) => {
  link.addEventListener("click", () => {
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
  });
});

// Close menu when scrolling
window.onscroll = () => {
  menuIcon.classList.remove("bx-x");
  navlist.classList.remove("open");
};

// ================================
// SCROLL ANIMATIONS
// ================================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-items");
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  },
);

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));

// ================================
// EDUCATION/EXPERIENCE TOGGLE
// ================================
function showContent(contentId, activeButtonId, inactiveButtonId) {
  // Hide all content sections
  const educationContent = document.getElementById("education");
  const experienceContent = document.getElementById("experience");

  educationContent.style.display = "none";
  experienceContent.style.display = "none";

  // Show selected content
  const selectedContent = document.getElementById(contentId);
  if (selectedContent) {
    selectedContent.style.display = "block";
  }

  // Update button states
  const activeButton = document.getElementById(activeButtonId);
  const inactiveButton = document.getElementById(inactiveButtonId);

  if (activeButton) {
    activeButton.classList.add("qualification__active");
  }
  if (inactiveButton) {
    inactiveButton.classList.remove("qualification__active");
  }
}

// ================================
// DARK MODE TOGGLE
// ================================
const toggleModeButton = document.getElementById("toggle-mode");
const body = document.body;

// Check if user has a saved preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  if (toggleModeButton) {
    toggleModeButton.innerHTML = '<i class="bx bx-sun"></i>';
  }
}

// Toggle dark mode
if (toggleModeButton) {
  toggleModeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    const isDarkMode = body.classList.contains("dark-mode");
    toggleModeButton.innerHTML = isDarkMode
      ? '<i class="bx bx-sun"></i>'
      : '<i class="bx bx-moon"></i>';

    // Save preference
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  });
}

// ================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && href !== "") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  });
});

// ================================
// FORM SUBMISSION HANDLER
// ================================
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // You can add your form submission logic here
    // For now, just show a success message
    alert("Thank you for your message! I will get back to you soon.");
    this.reset();
  });
}

// ================================
// PRELOAD ANIMATIONS
// ================================
window.addEventListener("load", () => {
  // Trigger initial animations
  document.body.classList.add("loaded");

  // Initialize any lazy-loaded images
  const lazyImages = document.querySelectorAll("img[data-src]");
  lazyImages.forEach((img) => {
    img.src = img.dataset.src;
    img.removeAttribute("data-src");
  });
});

// ================================
// PERFORMANCE OPTIMIZATION
// ================================
// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Apply debounce to scroll events
window.addEventListener(
  "scroll",
  debounce(function () {
    // Your scroll event handlers here
  }, 10),
);

// ================================
// TOUCH DEVICE DETECTION
// ================================
if ("ontouchstart" in window) {
  document.body.classList.add("touch-device");
}

// ================================
// ACCESSIBILITY IMPROVEMENTS
// ================================
// Add keyboard navigation for portfolio items
const portfolioItems = document.querySelectorAll(".port-box");
portfolioItems.forEach((item) => {
  item.setAttribute("tabindex", "0");

  item.addEventListener("keypress", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      const link = this.querySelector("a");
      if (link) {
        link.click();
      }
    }
  });
});

// Focus trap for mobile menu
const focusableElements =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
const modal = document.querySelector(".navlist");

if (modal) {
  const firstFocusableElement = modal.querySelectorAll(focusableElements)[0];
  const focusableContent = modal.querySelectorAll(focusableElements);
  const lastFocusableElement = focusableContent[focusableContent.length - 1];

  document.addEventListener("keydown", function (e) {
    if (navlist.classList.contains("open")) {
      let isTabPressed = e.key === "Tab" || e.keyCode === 9;

      if (!isTabPressed) {
        return;
      }

      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
          e.preventDefault();
        }
      }
    }
  });
}

// ================================
// CONSOLE MESSAGE
// ================================
console.log(
  "%c🚀 Portfolio Website by Yan Merta",
  "color: #0ea5e9; font-size: 20px; font-weight: bold;",
);
console.log(
  "%c⚡ Built with HTML, CSS, and JavaScript",
  "color: #06b6d4; font-size: 14px;",
);
console.log(
  "%cInterested in working together? Let's talk!",
  "color: #22d3ee; font-size: 12px;",
);
