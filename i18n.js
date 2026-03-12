/* =============================================
   i18n.js — Multi-language System
   Supports: English (en) | Indonesian (id)
   ============================================= */

const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.services": "Services",
    "nav.skills": "Skills",
    "nav.journey": "Journey",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",
    "home.greeting": "Hi I'm Yan Merta",
    "home.andIm": "And I'm",
    "home.role1": "Student",
    "home.role2": "Gamer",
    "home.role3": "Web\u00a0Designer",
    "home.role4": "Frontend\u00a0Developer",
    "home.role5": "UX/UI\u00a0Developer",
    "home.bio":
      "I am Wayan Merta, a student at Ganesha University of Education, specializing in the Software Engineering Technology Study Program. My passion lies in technology, with a particular focus on the development of programming languages and web design.",
    "home.emailLabel": "Email :",
    "home.contactBtn": "Contact Me",
    "about.intro": "Let Me Introduce Myself",
    "about.title": "About Me",
    "about.subtitle": "A Story Of Good",
    "about.bio":
      "I am Wayan Merta, a student of Informatics Engineering Department with focus on Software Engineering Technology Study Program. I have a deep interest in technology, particularly in programming language development and web design. I am pursuing the knowledge and skills necessary to become a competent professional in this field.",
    "about.yearsExp": "Years Of Experience",
    "about.projects": "Projects Complete",
    "about.clients": "Happy Clients",
    "about.cvBtn": "Download CV",
    "exp.sub": "where I have worked",
    "exp.title": "Work Experience",
    "exp.slide2Tag": "Internship BKSDM — Buleleng, Bali",
    "exp.slide3Tag": "Social Aid Officer",
    "exp.badge.intern": "Internship",
    "exp.badge.fulltime": "Full-time",
    "exp.card1.title": "Industry Internship — Web Developer",
    "exp.card1.desc":
      "Responsible for the development and maintenance of web applications using modern technologies. Actively involved in several important projects, with a focus on user interface development, data management, and system integration.",
    "exp.card1.proj1.title": "Stock Management Website",
    "exp.card1.proj1.desc":
      "Developed a dynamic web application for inventory management with CRUD features, user authentication, and real-time stock reporting.",
    "exp.card1.proj2.title": "Forstaff Website (Internal Company System)",
    "exp.card1.proj2.desc":
      "Contributed to the development of an internal system to facilitate inter-staff communication. Focused on responsive UI/UX and API integration for data synchronization between departments.",
    "exp.card2.title": "Internship — Apparatus Competency Development",
    "exp.card2.dept": "Field: Apparatus Competency",
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
    "exp.card3.period": "October 2026 – Present",
    "exp.card3.desc":
      "Serving as a Social Assistance (Bansos) Distribution Officer at Bank BRI. Responsible for ensuring government social assistance is distributed accurately to beneficiaries, verifying data, and assisting the fund disbursement process directly in the field.",
    "exp.tag.admin": "Administration",
    "exp.tag.personnel": "Personnel",
    "exp.tag.publicService": "Public Service",
    "exp.tag.dataVerif": "Data Verification",
    "exp.tag.field": "Field Work",
    "services.sub": "what I will do for you",
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
    "skills.sub": "technical and professional",
    "skills.title": "My Skills",
    "skills.technical": "Technical Skills",
    "skills.professional": "Professional Skills",
    "skills.teamwork": "Team Work",
    "skills.creativity": "Creativity",
    "skills.communication": "Communication",
    "skills.projectMgmt": "Project Management",
    "journey.sub": "my personal history",
    "journey.title": "Personal Journey",
    "journey.education": "Education",
    "journey.experience": "Experience",
    "journey.edu1.title": "Software Engineering Technology",
    "journey.edu2.title": "Mathematics and Natural Science",
    "journey.edu3.title": "Junior High School",
    "journey.edu4.title": "Elementary School",
    "journey.exp1.title": "Research Internship",
    "journey.exp2.title": "Entrepreneurial Student Program",
    "journey.exp3.title": "Student Committee",
    "journey.exp4.title": "Digital Talent Scholarship",
    "portfolio.sub": "what I will do for you",
    "portfolio.title": "Latest Project",
    "portfolio.filter.all": "All",
    "portfolio.filter.mobile": "Mobile App",
    "portfolio.filter.web": "Web App",
    "portfolio.filter.game": "Game",
    "portfolio.p1.title": "Music App",
    "portfolio.p1.desc":
      "I have learned to develop my skills in creating innovative music applications using the Flutter framework.",
    "portfolio.p2.title": "IKM Logbook Application",
    "portfolio.p2.desc":
      "I have learned to develop my skills in creating an ICM logbook application using the Flutter framework.",
    "portfolio.p3.title": "Travel App",
    "portfolio.p3.desc":
      "I have learned to develop my skills in creating travel applications using the Flutter framework.",
    "portfolio.p4.title": "Design Web WordPress",
    "portfolio.p4.desc":
      "I have learned to develop my skills in creating websites using the WordPress application.",
    "portfolio.p5.title": "Cooperative Website",
    "portfolio.p5.desc":
      "I have learned to develop my skills in creating a cooperative website using the WordPress application.",
    "portfolio.p6.title": "Village Website",
    "portfolio.p6.desc":
      "I have learned to develop my skills in creating a village website using the WordPress application.",
    "portfolio.p7.title": "Motorcycle Rental Website",
    "portfolio.p7.desc":
      "I have learned to develop my skills in creating a motorcycle rental website using Laravel 9.",
    "portfolio.p8.title": "Game Platformer",
    "portfolio.p8.desc":
      "I have learned to develop my skills in creating platform games using HTML, JavaScript and CSS.",
    "portfolio.p9.title": "Application Design",
    "portfolio.p9.desc":
      "I have learned to develop my skills in designing apps using Figma.",
    "portfolio.p10.title": "Village Website Design",
    "portfolio.p10.desc":
      "I have learned to develop my skills in designing a village website using Figma.",
    "contact.sub": "Ask me a Question",
    "contact.title": "Contact Me",
    "contact.name": "Your Name",
    "contact.email": "Your Email",
    "contact.address": "Your Address",
    "contact.phone": "Your Phone Number",
    "contact.message": "Your Message",
    "contact.sendBtn": "Send Message",
    "contact.successMsg": "Message sent successfully!",
    "contact.failMsg": "Failed to send message",
    "footer.copy": "Copyright \u00a9 2023 by yanmerta || All Rights Reserved",
  },
  id: {
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.experience": "Pengalaman",
    "nav.services": "Layanan",
    "nav.skills": "Keahlian",
    "nav.journey": "Perjalanan",
    "nav.portfolio": "Portofolio",
    "nav.contact": "Kontak",
    "home.greeting": "Halo, Saya Yan Merta",
    "home.andIm": "Dan Saya",
    "home.role1": "Mahasiswa",
    "home.role2": "Gamer",
    "home.role3": "Web\u00a0Designer",
    "home.role4": "Frontend\u00a0Developer",
    "home.role5": "UX/UI\u00a0Developer",
    "home.bio":
      "Saya Wayan Merta, mahasiswa Universitas Pendidikan Ganesha, Program Studi Teknologi Rekayasa Perangkat Lunak. Saya memiliki semangat besar di bidang teknologi, khususnya dalam pengembangan bahasa pemrograman dan desain web.",
    "home.emailLabel": "Email :",
    "home.contactBtn": "Hubungi Saya",
    "about.intro": "Izinkan Saya Memperkenalkan Diri",
    "about.title": "Tentang Saya",
    "about.subtitle": "Kisah Yang Baik",
    "about.bio":
      "Saya Wayan Merta, mahasiswa Jurusan Teknik Informatika dengan fokus pada Program Studi Teknologi Rekayasa Perangkat Lunak. Saya memiliki minat mendalam pada teknologi, khususnya pengembangan bahasa pemrograman dan desain web. Saya terus mengembangkan pengetahuan dan keterampilan untuk menjadi profesional yang kompeten di bidang ini.",
    "about.yearsExp": "Tahun Pengalaman",
    "about.projects": "Proyek Selesai",
    "about.clients": "Klien Puas",
    "about.cvBtn": "Unduh CV",
    "exp.sub": "tempat saya pernah bekerja",
    "exp.title": "Pengalaman Kerja",
    "exp.slide2Tag": "Magang BKSDM — Buleleng, Bali",
    "exp.slide3Tag": "Petugas Bansos",
    "exp.badge.intern": "Magang",
    "exp.badge.fulltime": "Penuh Waktu",
    "exp.card1.title": "Magang Industri — Web Developer",
    "exp.card1.desc":
      "Bertanggung jawab dalam pengembangan dan pemeliharaan aplikasi web menggunakan teknologi modern. Berperan aktif dalam beberapa proyek penting, dengan fokus pada pengembangan antarmuka pengguna, pengelolaan data, dan integrasi sistem.",
    "exp.card1.proj1.title": "Website Manajemen Stok",
    "exp.card1.proj1.desc":
      "Mengembangkan aplikasi web dinamis untuk manajemen inventaris dengan fitur CRUD, otentikasi pengguna, serta pelaporan stok secara real-time.",
    "exp.card1.proj2.title": "Website Forstaff (Sistem Internal Perusahaan)",
    "exp.card1.proj2.desc":
      "Berkontribusi dalam pengembangan sistem internal untuk memfasilitasi komunikasi antar staf. Fokus pada UI/UX responsif dan integrasi API untuk sinkronisasi data antar departemen.",
    "exp.card2.title": "Magang — Pengembangan Kompetensi Aparatur",
    "exp.card2.dept": "Bidang: Kompetensi Aparatur",
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
    "exp.card3.period": "Oktober 2026 – Sekarang",
    "exp.card3.desc":
      "Bertugas sebagai Petugas Penyaluran Bantuan Sosial (Bansos) di Bank BRI. Bertanggung jawab dalam memastikan penyaluran bantuan sosial pemerintah tepat sasaran kepada penerima manfaat, melakukan verifikasi data, serta mendampingi proses pencairan dana secara langsung di lapangan.",
    "exp.tag.admin": "Administrasi",
    "exp.tag.personnel": "Kepegawaian",
    "exp.tag.publicService": "Pelayanan Publik",
    "exp.tag.dataVerif": "Verifikasi Data",
    "exp.tag.field": "Lapangan",
    "services.sub": "apa yang akan saya lakukan untuk Anda",
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
    "skills.sub": "teknis dan profesional",
    "skills.title": "Keahlian Saya",
    "skills.technical": "Keahlian Teknis",
    "skills.professional": "Keahlian Profesional",
    "skills.teamwork": "Kerja Tim",
    "skills.creativity": "Kreativitas",
    "skills.communication": "Komunikasi",
    "skills.projectMgmt": "Manajemen Proyek",
    "journey.sub": "perjalanan hidup saya",
    "journey.title": "Perjalanan Pribadi",
    "journey.education": "Pendidikan",
    "journey.experience": "Pengalaman",
    "journey.edu1.title": "Teknologi Rekayasa Perangkat Lunak",
    "journey.edu2.title": "Matematika dan Ilmu Alam",
    "journey.edu3.title": "Sekolah Menengah Pertama",
    "journey.edu4.title": "Sekolah Dasar",
    "journey.exp1.title": "Magang Riset",
    "journey.exp2.title": "Program Mahasiswa Wirausaha",
    "journey.exp3.title": "Komite Mahasiswa",
    "journey.exp4.title": "Beasiswa Talenta Digital",
    "portfolio.sub": "apa yang akan saya lakukan untuk Anda",
    "portfolio.title": "Proyek Terbaru",
    "portfolio.filter.all": "Semua",
    "portfolio.filter.mobile": "Aplikasi Mobile",
    "portfolio.filter.web": "Aplikasi Web",
    "portfolio.filter.game": "Game",
    "portfolio.p1.title": "Aplikasi Musik",
    "portfolio.p1.desc":
      "Saya telah belajar mengembangkan keterampilan dalam membuat aplikasi musik inovatif menggunakan framework Flutter.",
    "portfolio.p2.title": "Aplikasi Logbook IKM",
    "portfolio.p2.desc":
      "Saya telah belajar mengembangkan keterampilan dalam membuat aplikasi logbook IKM menggunakan framework Flutter.",
    "portfolio.p3.title": "Aplikasi Travel",
    "portfolio.p3.desc":
      "Saya telah belajar mengembangkan keterampilan dalam membuat aplikasi travel menggunakan framework Flutter.",
    "portfolio.p4.title": "Desain Web WordPress",
    "portfolio.p4.desc":
      "Saya telah belajar mengembangkan keterampilan dalam membuat website menggunakan aplikasi WordPress.",
    "portfolio.p5.title": "Website Koperasi",
    "portfolio.p5.desc":
      "Saya telah belajar mengembangkan keterampilan dalam membuat website koperasi menggunakan aplikasi WordPress.",
    "portfolio.p6.title": "Website Desa",
    "portfolio.p6.desc":
      "Saya telah belajar mengembangkan keterampilan dalam membuat website desa menggunakan aplikasi WordPress.",
    "portfolio.p7.title": "Website Rental Motor",
    "portfolio.p7.desc":
      "Saya telah belajar mengembangkan keterampilan dalam membuat website rental motor menggunakan Laravel 9.",
    "portfolio.p8.title": "Game Platformer",
    "portfolio.p8.desc":
      "Saya telah belajar mengembangkan keterampilan dalam membuat game platform menggunakan HTML, JavaScript dan CSS.",
    "portfolio.p9.title": "Desain Aplikasi",
    "portfolio.p9.desc":
      "Saya telah belajar mengembangkan keterampilan dalam mendesain aplikasi menggunakan Figma.",
    "portfolio.p10.title": "Desain Website Desa",
    "portfolio.p10.desc":
      "Saya telah belajar mengembangkan keterampilan dalam mendesain website desa menggunakan Figma.",
    "contact.sub": "Tanyakan kepada Saya",
    "contact.title": "Hubungi Saya",
    "contact.name": "Nama Anda",
    "contact.email": "Email Anda",
    "contact.address": "Alamat Anda",
    "contact.phone": "Nomor Telepon Anda",
    "contact.message": "Pesan Anda",
    "contact.sendBtn": "Kirim Pesan",
    "contact.successMsg": "Pesan berhasil dikirim!",
    "contact.failMsg": "Gagal mengirim pesan",
    "footer.copy":
      "Hak Cipta \u00a9 2023 oleh yanmerta || Semua Hak Dilindungi",
  },
};

(function () {
  const STORAGE_KEY = "siteLang";
  const LANG_VERSION = "v2"; // bump this to reset saved lang preference
  const savedVersion = localStorage.getItem("siteLangVersion");
  if (savedVersion !== LANG_VERSION) {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.setItem("siteLangVersion", LANG_VERSION);
  }
  let currentLang = localStorage.getItem(STORAGE_KEY) || "en";

  function applyTranslations(lang) {
    const t = translations[lang] || translations["en"];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (t[key] !== undefined) {
        el.textContent = t[key];
      }
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-placeholder");
      if (t[key] !== undefined) {
        el.setAttribute("placeholder", t[key]);
      }
    });
    document.documentElement.lang = lang;
  }

  function updateSwitcherUI(lang) {
    const flagEl = document.getElementById("langFlag");
    const labelEl = document.getElementById("langLabel");
    const optEn = document.getElementById("optEn");
    const optId = document.getElementById("optId");
    if (lang === "id") {
      if (flagEl) flagEl.textContent = "🇮🇩";
      if (labelEl) labelEl.textContent = "ID";
      if (optEn) optEn.classList.remove("active");
      if (optId) optId.classList.add("active");
    } else {
      if (flagEl) flagEl.textContent = "🇬🇧";
      if (labelEl) labelEl.textContent = "EN";
      if (optEn) optEn.classList.add("active");
      if (optId) optId.classList.remove("active");
    }
  }

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(lang);
    updateSwitcherUI(lang);
  }

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
