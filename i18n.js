/* =============================================
   i18n.js — Multi-language System
   Supports: English (en) | Indonesian (id)
   Default: English (en)
   ============================================= */

const translations = {
  en: {
    /* --- NAV --- */
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.services": "Services",
    "nav.skills": "Skills",
    "nav.journey": "Journey",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",

    /* --- HOME --- */
    "home.greeting": "Hi I'm Yan Merta",
    "home.andIm": "And I'm",
    "home.word1": "Student",
    "home.word2": "Gamer",
    "home.word3": "Web\u00a0Designer",
    "home.word4": "Frontend\u00a0Developer",
    "home.word5": "UX/UI\u00a0Developer",
    "home.desc":
      "I am Wayan Merta, a student at Ganesha University of Education, specializing in the Software Engineering Technology Study Program. My passion lies in technology, with a particular focus on the development of programming languages and web design.",
    "home.contactBtn": "Contact Me",

    /* --- ABOUT --- */
    "about.subtitle": "Let Me Introduce Myself",
    "about.title": "About Me",
    "about.tagline": "A Story Of Good",
    "about.desc":
      "I am Wayan Merta, a student of Informatics Engineering Department with focus on Software Engineering Technology Study Program. I have a deep interest in technology, particularly in programming language development and web design. I am pursuing the knowledge and skills necessary to become a competent professional in this field.",
    "about.yearsExp": "Years Of Experience",
    "about.projectComplete": "Projects Complete",
    "about.happyClients": "Happy Clients",
    "about.downloadCV": "Download CV",

    /* --- WORK EXPERIENCE --- */
    "exp.subtitle": "where I have worked",
    "exp.title": "Work Experience",
    "exp.slide2": "Internship BKSDM \u2014 Buleleng, Bali",
    "exp.slide3": "Bank BRI \u2014 Social Aid Officer",
    "exp.badge.internship": "Internship",
    "exp.badge.fulltime": "Full-time",

    "exp.card1.title": "Industry Internship \u2014 Web Developer",
    "exp.card1.desc":
      "Responsible for the development and maintenance of web applications using modern technologies. Actively involved in several important projects, with a focus on user interface development, data management, and system integration.",
    "exp.card1.proj1.title": "Stock Management Website",
    "exp.card1.proj1.desc":
      "Developed a dynamic web application for inventory management with CRUD features, user authentication, and real-time stock reporting.",
    "exp.card1.proj2.title": "Forstaff Website (Internal Company System)",
    "exp.card1.proj2.desc":
      "Contributed to the development of an internal system to facilitate inter-staff communication. Focused on responsive UI/UX and API integration for data synchronization between departments.",

    "exp.card2.title": "Internship \u2014 Apparatus Competency Development",
    "exp.card2.role": "Field: Apparatus Competency",
    "exp.card2.desc":
      "Played a role in managing administrative data supporting the competency development process of local government apparatus. Worked directly with personnel documents and official PPPK data.",
    "exp.card2.proj1.title": "Civil Servant Study Leave SK Recapitulation",
    "exp.card2.proj1.desc":
      "Data entry and update of civil servant study leave SK recapitulation, ensuring document completeness and information accuracy for employees applying for study leave permits.",
    "exp.card2.proj2.title": "PPPK 2021 & 2022 Data Management",
    "exp.card2.proj2.desc":
      "Managing PPPK (Government Employees with Work Agreements) data for 2021 and 2022, both those already submitted and those still in process.",

    "exp.card3.ongoing": "Ongoing",
    "exp.card3.title": "Social Aid Officer",
    "exp.card3.period": "October 2026 \u2013 Present",
    "exp.card3.desc":
      "Serving as a Social Assistance (Bansos) Distribution Officer at Bank BRI. Responsible for ensuring government social assistance is distributed accurately to beneficiaries, verifying data, and assisting the fund disbursement process directly in the field.",

    /* exp tags */
    "exp.tag.laravel": "Laravel",
    "exp.tag.javascript": "JavaScript",
    "exp.tag.crud": "CRUD",
    "exp.tag.restapi": "REST API",
    "exp.tag.uiux": "UI/UX",
    "exp.tag.realtime": "Real-time",
    "exp.tag.dataManagement": "Data Management",
    "exp.tag.admin": "Administration",
    "exp.tag.pppk": "PPPK",
    "exp.tag.personnel": "Personnel",
    "exp.tag.bansos": "Bansos",
    "exp.tag.publicService": "Public Service",
    "exp.tag.dataVerif": "Data Verification",
    "exp.tag.field": "Field Work",
    "exp.tag.bankBRI": "Bank BRI",

    /* --- SERVICES --- */
    "services.subtitle": "what I will do for you",
    "services.title": "Our Services",
    "services.readMore": "Read More",
    "services.graphic.title": "Graphic Designer",
    "services.graphic.desc":
      "I have expertise in graphic design. Enjoying the creative process of creating interesting and engaging visual design elements for each project.",
    "services.web.title": "Web Development",
    "services.web.desc":
      "I have a deep interest in technology, especially in website development. I am always excited to explore and create creative solutions through web development.",
    "services.mobile.title": "Mobile Development",
    "services.mobile.desc":
      "I have a deep interest in technology, especially in mobile application development. I am always eager to explore and create creative solutions through mobile development.",

    /* --- SKILLS --- */
    "skills.subtitle": "technical and professional",
    "skills.title": "My Skills",
    "skills.technical": "Technical Skills",
    "skills.professional": "Professional Skills",
    "skills.teamwork": "Team Work",
    "skills.creativity": "Creativity",
    "skills.communication": "Communication",
    "skills.projectMgmt": "Project Management",

    /* --- JOURNEY --- */
    "journey.subtitle": "my personal history",
    "journey.title": "Personal Journey",
    "journey.education": "Education",
    "journey.experience": "Experience",
    "journey.edu1.title": "Software Engineering Technology",
    "journey.edu2.title": "Mathematics and Natural Science",
    "journey.edu3.title": "Junior High School",
    "journey.edu4.title": "Elementary School",
    "journey.exp1.title": "Research Internship",
    "journey.exp1.period": "July \u2013 October 2023",
    "journey.exp2.title": "Entrepreneurial Student Program",
    "journey.exp3.title": "Student Committee",
    "journey.exp4.title": "Digital Talent Scholarship",

    /* --- PORTFOLIO --- */
    "portfolio.subtitle": "what I will do for you",
    "portfolio.title": "Latest Project",
    "portfolio.filter.all": "All",
    "portfolio.filter.mobile": "Mobile App",
    "portfolio.filter.web": "Web App",
    "portfolio.filter.game": "Game",
    "portfolio.proj1.title": "Music App",
    "portfolio.proj1.desc":
      "I have learned to develop my skills in creating innovative music applications using the Flutter framework.",
    "portfolio.proj2.title": "IKM Logbook Application",
    "portfolio.proj2.desc":
      "I have learned to develop my skills in creating an IKM logbook application using the Flutter framework.",
    "portfolio.proj3.title": "Travel App",
    "portfolio.proj3.desc":
      "I have learned to develop my skills in creating travel applications using the Flutter framework.",
    "portfolio.proj4.title": "Design Web WordPress",
    "portfolio.proj4.desc":
      "I have learned to develop my skills in creating websites using the WordPress application.",
    "portfolio.proj5.title": "Cooperative Website",
    "portfolio.proj5.desc":
      "I have learned to develop my skills in creating a cooperative website using WordPress.",
    "portfolio.proj6.title": "Village Website",
    "portfolio.proj6.desc":
      "I have learned to develop my skills in creating a village website using WordPress.",
    "portfolio.proj7.title": "Motorcycle Rental Website",
    "portfolio.proj7.desc":
      "I have learned to develop my skills in creating a motorcycle rental website using Laravel 9.",
    "portfolio.proj8.title": "Game Platformer",
    "portfolio.proj8.desc":
      "I have learned to develop my skills in creating platform games using HTML, JavaScript and CSS.",
    "portfolio.proj9.title": "Application Design",
    "portfolio.proj9.desc":
      "I have learned to develop my skills in designing apps using Figma.",
    "portfolio.proj10.title": "Village Website Design",
    "portfolio.proj10.desc":
      "I have learned to develop my skills in designing a village website using Figma.",

    /* --- CONTACT --- */
    "contact.subtitle": "Ask me a Question",
    "contact.title": "Contact Me",
    "contact.name": "Your Name",
    "contact.email": "Your Email",
    "contact.address": "Your Address",
    "contact.phone": "Your Phone Number",
    "contact.message": "Your Message",
    "contact.sendBtn": "Send Message",
    "contact.successMsg": "Message sent successfully!",
    "contact.failMsg": "Failed to send message",

    /* --- FOOTER --- */
    "footer.copy": "Copyright \u00a9 2023 by yanmerta || All Rights Reserved",
  },

  id: {
    /* --- NAV --- */
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.experience": "Pengalaman",
    "nav.services": "Layanan",
    "nav.skills": "Keahlian",
    "nav.journey": "Perjalanan",
    "nav.portfolio": "Portofolio",
    "nav.contact": "Kontak",

    /* --- HOME --- */
    "home.greeting": "Halo, Saya Yan Merta",
    "home.andIm": "Dan Saya",
    "home.word1": "Mahasiswa",
    "home.word2": "Gamer",
    "home.word3": "Web\u00a0Designer",
    "home.word4": "Frontend\u00a0Developer",
    "home.word5": "UX/UI\u00a0Developer",
    "home.desc":
      "Saya Wayan Merta, mahasiswa Universitas Pendidikan Ganesha, Program Studi Teknologi Rekayasa Perangkat Lunak. Saya memiliki semangat besar di bidang teknologi, khususnya dalam pengembangan bahasa pemrograman dan desain web.",
    "home.contactBtn": "Hubungi Saya",

    /* --- ABOUT --- */
    "about.subtitle": "Izinkan Saya Memperkenalkan Diri",
    "about.title": "Tentang Saya",
    "about.tagline": "Kisah Yang Baik",
    "about.desc":
      "Saya Wayan Merta, mahasiswa Jurusan Teknik Informatika dengan fokus pada Program Studi Teknologi Rekayasa Perangkat Lunak. Saya memiliki minat mendalam pada teknologi, khususnya pengembangan bahasa pemrograman dan desain web. Saya terus mengembangkan pengetahuan dan keterampilan untuk menjadi profesional yang kompeten di bidang ini.",
    "about.yearsExp": "Tahun Pengalaman",
    "about.projectComplete": "Proyek Selesai",
    "about.happyClients": "Klien Puas",
    "about.downloadCV": "Unduh CV",

    /* --- WORK EXPERIENCE --- */
    "exp.subtitle": "tempat saya pernah bekerja",
    "exp.title": "Pengalaman Kerja",
    "exp.slide2": "Magang BKSDM \u2014 Buleleng, Bali",
    "exp.slide3": "Bank BRI \u2014 Petugas Bansos",
    "exp.badge.internship": "Magang",
    "exp.badge.fulltime": "Penuh Waktu",

    "exp.card1.title": "Magang Industri \u2014 Web Developer",
    "exp.card1.desc":
      "Bertanggung jawab dalam pengembangan dan pemeliharaan aplikasi web menggunakan teknologi modern. Berperan aktif dalam beberapa proyek penting, dengan fokus pada pengembangan antarmuka pengguna, pengelolaan data, dan integrasi sistem.",
    "exp.card1.proj1.title": "Website Manajemen Stok",
    "exp.card1.proj1.desc":
      "Mengembangkan aplikasi web dinamis untuk manajemen inventaris dengan fitur CRUD, otentikasi pengguna, serta pelaporan stok secara real-time.",
    "exp.card1.proj2.title": "Website Forstaff (Sistem Internal Perusahaan)",
    "exp.card1.proj2.desc":
      "Berkontribusi dalam pengembangan sistem internal untuk memfasilitasi komunikasi antar staf. Fokus pada UI/UX responsif dan integrasi API untuk sinkronisasi data antar departemen.",

    "exp.card2.title": "Magang \u2014 Pengembangan Kompetensi Aparatur",
    "exp.card2.role": "Bidang: Kompetensi Aparatur",
    "exp.card2.desc":
      "Berperan dalam pengelolaan data administratif yang mendukung proses pengembangan kompetensi aparatur pemerintah daerah. Bekerja langsung dengan dokumen kepegawaian dan data PPPK resmi instansi.",
    "exp.card2.proj1.title": "Rekapitulasi SK Tugas Belajar PNS",
    "exp.card2.proj1.desc":
      "Input dan pembaruan data Rekapitulasi Usulan SK Tugas Belajar PNS, memastikan kelengkapan dokumen dan keakuratan informasi bagi pegawai yang mengajukan izin tugas belajar.",
    "exp.card2.proj2.title": "Pengelolaan Data PPPK 2021 & 2022",
    "exp.card2.proj2.desc":
      "Mengelola data PPPK (Pegawai Pemerintah dengan Perjanjian Kerja) untuk tahun 2021 dan 2022, baik yang telah diajukan maupun yang masih dalam proses.",

    "exp.card3.ongoing": "Sedang Berlangsung",
    "exp.card3.title": "Petugas Bansos",
    "exp.card3.period": "Oktober 2026 \u2013 Sekarang",
    "exp.card3.desc":
      "Bertugas sebagai Petugas Penyaluran Bantuan Sosial (Bansos) di Bank BRI. Bertanggung jawab dalam memastikan penyaluran bantuan sosial pemerintah tepat sasaran kepada penerima manfaat, melakukan verifikasi data, serta mendampingi proses pencairan dana secara langsung di lapangan.",

    /* exp tags */
    "exp.tag.laravel": "Laravel",
    "exp.tag.javascript": "JavaScript",
    "exp.tag.crud": "CRUD",
    "exp.tag.restapi": "REST API",
    "exp.tag.uiux": "UI/UX",
    "exp.tag.realtime": "Real-time",
    "exp.tag.dataManagement": "Manajemen Data",
    "exp.tag.admin": "Administrasi",
    "exp.tag.pppk": "PPPK",
    "exp.tag.personnel": "Kepegawaian",
    "exp.tag.bansos": "Bansos",
    "exp.tag.publicService": "Pelayanan Publik",
    "exp.tag.dataVerif": "Verifikasi Data",
    "exp.tag.field": "Lapangan",
    "exp.tag.bankBRI": "Bank BRI",

    /* --- SERVICES --- */
    "services.subtitle": "apa yang akan saya lakukan untuk Anda",
    "services.title": "Layanan Kami",
    "services.readMore": "Selengkapnya",
    "services.graphic.title": "Desainer Grafis",
    "services.graphic.desc":
      "Saya memiliki keahlian dalam desain grafis. Menikmati proses kreatif dalam menciptakan elemen desain visual yang menarik dan mengesankan untuk setiap proyek.",
    "services.web.title": "Pengembangan Web",
    "services.web.desc":
      "Saya memiliki minat mendalam pada teknologi, khususnya pengembangan website. Saya selalu antusias untuk mengeksplorasi dan menciptakan solusi kreatif melalui pengembangan web.",
    "services.mobile.title": "Pengembangan Mobile",
    "services.mobile.desc":
      "Saya memiliki minat mendalam pada teknologi, khususnya pengembangan aplikasi mobile. Saya selalu bersemangat mengeksplorasi dan menciptakan solusi kreatif melalui pengembangan mobile.",

    /* --- SKILLS --- */
    "skills.subtitle": "teknis dan profesional",
    "skills.title": "Keahlian Saya",
    "skills.technical": "Keahlian Teknis",
    "skills.professional": "Keahlian Profesional",
    "skills.teamwork": "Kerja Tim",
    "skills.creativity": "Kreativitas",
    "skills.communication": "Komunikasi",
    "skills.projectMgmt": "Manajemen Proyek",

    /* --- JOURNEY --- */
    "journey.subtitle": "perjalanan hidup saya",
    "journey.title": "Perjalanan Pribadi",
    "journey.education": "Pendidikan",
    "journey.experience": "Pengalaman",
    "journey.edu1.title": "Teknologi Rekayasa Perangkat Lunak",
    "journey.edu2.title": "Matematika dan Ilmu Alam",
    "journey.edu3.title": "Sekolah Menengah Pertama",
    "journey.edu4.title": "Sekolah Dasar",
    "journey.exp1.title": "Magang Riset",
    "journey.exp1.period": "Juli \u2013 Oktober 2023",
    "journey.exp2.title": "Program Mahasiswa Wirausaha",
    "journey.exp3.title": "Komite Mahasiswa",
    "journey.exp4.title": "Beasiswa Talenta Digital",

    /* --- PORTFOLIO --- */
    "portfolio.subtitle": "apa yang akan saya lakukan untuk Anda",
    "portfolio.title": "Proyek Terbaru",
    "portfolio.filter.all": "Semua",
    "portfolio.filter.mobile": "Aplikasi Mobile",
    "portfolio.filter.web": "Aplikasi Web",
    "portfolio.filter.game": "Game",
    "portfolio.proj1.title": "Aplikasi Musik",
    "portfolio.proj1.desc":
      "Saya telah belajar mengembangkan keterampilan dalam membuat aplikasi musik inovatif menggunakan framework Flutter.",
    "portfolio.proj2.title": "Aplikasi Logbook IKM",
    "portfolio.proj2.desc":
      "Saya telah belajar mengembangkan keterampilan dalam membuat aplikasi logbook IKM menggunakan framework Flutter.",
    "portfolio.proj3.title": "Aplikasi Travel",
    "portfolio.proj3.desc":
      "Saya telah belajar mengembangkan keterampilan dalam membuat aplikasi travel menggunakan framework Flutter.",
    "portfolio.proj4.title": "Desain Web WordPress",
    "portfolio.proj4.desc":
      "Saya telah belajar mengembangkan keterampilan dalam membuat website menggunakan aplikasi WordPress.",
    "portfolio.proj5.title": "Website Koperasi",
    "portfolio.proj5.desc":
      "Saya telah belajar mengembangkan keterampilan dalam membuat website koperasi menggunakan WordPress.",
    "portfolio.proj6.title": "Website Desa",
    "portfolio.proj6.desc":
      "Saya telah belajar mengembangkan keterampilan dalam membuat website desa menggunakan WordPress.",
    "portfolio.proj7.title": "Website Rental Motor",
    "portfolio.proj7.desc":
      "Saya telah belajar mengembangkan keterampilan dalam membuat website rental motor menggunakan Laravel 9.",
    "portfolio.proj8.title": "Game Platformer",
    "portfolio.proj8.desc":
      "Saya telah belajar mengembangkan keterampilan dalam membuat game platform menggunakan HTML, JavaScript dan CSS.",
    "portfolio.proj9.title": "Desain Aplikasi",
    "portfolio.proj9.desc":
      "Saya telah belajar mengembangkan keterampilan dalam mendesain aplikasi menggunakan Figma.",
    "portfolio.proj10.title": "Desain Website Desa",
    "portfolio.proj10.desc":
      "Saya telah belajar mengembangkan keterampilan dalam mendesain website desa menggunakan Figma.",

    /* --- CONTACT --- */
    "contact.subtitle": "Tanyakan kepada Saya",
    "contact.title": "Hubungi Saya",
    "contact.name": "Nama Anda",
    "contact.email": "Email Anda",
    "contact.address": "Alamat Anda",
    "contact.phone": "Nomor Telepon Anda",
    "contact.message": "Pesan Anda",
    "contact.sendBtn": "Kirim Pesan",
    "contact.successMsg": "Pesan berhasil dikirim!",
    "contact.failMsg": "Gagal mengirim pesan",

    /* --- FOOTER --- */
    "footer.copy":
      "Hak Cipta \u00a9 2023 oleh yanmerta || Semua Hak Dilindungi",
  },
};

(function () {
  const STORAGE_KEY = "siteLang";
  const LANG_VERSION = "v3"; // bumped to reset to new default (en)
  const savedVersion = localStorage.getItem("siteLangVersion");
  if (savedVersion !== LANG_VERSION) {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.setItem("siteLangVersion", LANG_VERSION);
  }

  // Default language = English
  let currentLang = localStorage.getItem(STORAGE_KEY) || "en";

  /* ---- translate all data-i18n elements ---- */
  function applyTranslations(lang) {
    const t = translations[lang] || translations["en"];

    // Standard text elements
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (t[key] !== undefined) el.textContent = t[key];
    });

    // Placeholder inputs/textareas
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-placeholder");
      if (t[key] !== undefined) el.setAttribute("placeholder", t[key]);
    });

    // Animated word elements — update raw text then reinit animation
    document.querySelectorAll("[data-i18n-word]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-word");
      if (t[key] !== undefined) el.dataset.rawText = t[key];
    });

    document.documentElement.lang = lang;

    // Reinit word animation after translation
    if (typeof window.reinitWordAnimation === "function") {
      window.reinitWordAnimation();
    }
  }

  /* ---- update the UI of the language switcher button ---- */
  function updateSwitcherUI(lang) {
    const flagEl = document.getElementById("langFlag");
    const labelEl = document.getElementById("langLabel");
    const optEn = document.getElementById("optEn");
    const optId = document.getElementById("optId");

    if (lang === "id") {
      if (flagEl) flagEl.textContent = "\uD83C\uDDEE\uD83C\uDDE9"; // 🇮🇩
      if (labelEl) labelEl.textContent = "ID";
      if (optEn) optEn.classList.remove("active");
      if (optId) optId.classList.add("active");
    } else {
      if (flagEl) flagEl.textContent = "\uD83C\uDDEC\uD83C\uDDE7"; // 🇬🇧
      if (labelEl) labelEl.textContent = "EN";
      if (optEn) optEn.classList.add("active");
      if (optId) optId.classList.remove("active");
    }
  }

  /* ---- switch language ---- */
  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(lang);
    updateSwitcherUI(lang);
  }

  /* ---- wire up the dropdown toggle ---- */
  function initSwitcher() {
    const btn = document.getElementById("langToggleBtn");
    const dropdown = document.getElementById("langDropdown");
    const arrow = document.getElementById("langArrow");
    if (!btn || !dropdown) return;

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const isOpen = dropdown.classList.toggle("open");
      btn.classList.toggle("active", isOpen);
      if (arrow)
        arrow.style.transform = isOpen ? "rotate(180deg)" : "rotate(0deg)";
    });

    document.querySelectorAll(".lang-option").forEach(function (opt) {
      opt.addEventListener("click", function () {
        const lang = opt.getAttribute("data-lang");
        setLang(lang);
        dropdown.classList.remove("open");
        btn.classList.remove("active");
        if (arrow) arrow.style.transform = "rotate(0deg)";
      });
    });

    document.addEventListener("click", function (e) {
      if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
        btn.classList.remove("active");
        if (arrow) arrow.style.transform = "rotate(0deg)";
      }
    });
  }

  /* ---- public API ---- */
  const i18nAPI = {
    t: function (key) {
      return (translations[currentLang] || translations["en"])[key] || key;
    },
    setLang: setLang,
    getLang: function () {
      return currentLang;
    },
  };
  window.i18n = i18nAPI;
  window.I18n = i18nAPI; // alias for script.js compatibility

  /* ---- boot ---- */
  function init() {
    initSwitcher();
    applyTranslations(currentLang);
    updateSwitcherUI(currentLang);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
