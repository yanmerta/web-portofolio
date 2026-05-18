/* =============================================
   i18n.js — Multi-language System
   Supports: English (en) | Indonesian (id) |
             Japanese (ja) | Spanish (es) |
             French (fr) | German (de)
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
    "home.word1": "Software\u00a0Engineer",
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
    "exp.slide1": "PT. Guna Teknologi Nusantara \u2014 Denpasar, Bali",
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
    "exp.card3.period": "2024 \u2013 Present",
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

  /* ============================================================
     INDONESIAN
     ============================================================ */
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
    "home.word1": "Software\u00a0Engineer",
    "home.word2": "Gamer",
    "home.word3": "Web\u00a0Designer",
    "home.word4": "Frontend\u00a0Developer",
    "home.word5": "UX/UI\u00a0Developer",
    "home.desc":
      "Saya Wayan Merta, mahasiswa Universitas Pendidikan Ganesha, Program Studi Teknologi Rekayasa Perangkat Lunak. Saya memiliki semangat besar di bidang teknologi, khususnya dalam pengembangan bahasa pemrograman dan desain web.",
    "home.contactBtn": "Hubungi Saya",

    "about.subtitle": "Izinkan Saya Memperkenalkan Diri",
    "about.title": "Tentang Saya",
    "about.tagline": "Kisah Yang Baik",
    "about.desc":
      "Saya Wayan Merta, mahasiswa Jurusan Teknik Informatika dengan fokus pada Program Studi Teknologi Rekayasa Perangkat Lunak. Saya memiliki minat mendalam pada teknologi, khususnya pengembangan bahasa pemrograman dan desain web. Saya terus mengembangkan pengetahuan dan keterampilan untuk menjadi profesional yang kompeten di bidang ini.",
    "about.yearsExp": "Tahun Pengalaman",
    "about.projectComplete": "Proyek Selesai",
    "about.happyClients": "Klien Puas",
    "about.downloadCV": "Unduh CV",

    "exp.subtitle": "tempat saya pernah bekerja",
    "exp.title": "Pengalaman Kerja",
    "exp.slide1": "PT. Guna Teknologi Nusantara \u2014 Denpasar, Bali",
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
    "exp.card3.period": "2024 \u2013 Sekarang",
    "exp.card3.desc":
      "Bertugas sebagai Petugas Penyaluran Bantuan Sosial (Bansos) di Bank BRI. Bertanggung jawab dalam memastikan penyaluran bantuan sosial pemerintah tepat sasaran kepada penerima manfaat, melakukan verifikasi data, serta mendampingi proses pencairan dana secara langsung di lapangan.",

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

    "skills.subtitle": "teknis dan profesional",
    "skills.title": "Keahlian Saya",
    "skills.technical": "Keahlian Teknis",
    "skills.professional": "Keahlian Profesional",
    "skills.teamwork": "Kerja Tim",
    "skills.creativity": "Kreativitas",
    "skills.communication": "Komunikasi",
    "skills.projectMgmt": "Manajemen Proyek",

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

    "footer.copy":
      "Hak Cipta \u00a9 2023 oleh yanmerta || Semua Hak Dilindungi",
  },

  /* ============================================================
     JAPANESE (日本語)
     ============================================================ */
  ja: {
    "nav.home": "ホーム",
    "nav.about": "紹介",
    "nav.experience": "経験",
    "nav.services": "サービス",
    "nav.skills": "スキル",
    "nav.journey": "歩み",
    "nav.portfolio": "作品集",
    "nav.contact": "連絡",

    "home.greeting": "こんにちは、ヤン・メルタです",
    "home.andIm": "私は",
    "home.word1": "ソフトウェアエンジニア",
    "home.word2": "ゲーマー",
    "home.word3": "Webデザイナー",
    "home.word4": "フロントエンド開発者",
    "home.word5": "UX/UI開発者",
    "home.desc":
      "私はウェイヤン・メルタ、ガネーシャ教育大学でソフトウェアエンジニアリング技術を専攻する学生です。プログラミング言語の開発とWebデザインに強い情熱を持っています。",
    "home.contactBtn": "お問い合わせ",

    "about.subtitle": "自己紹介させてください",
    "about.title": "私について",
    "about.tagline": "良い物語",
    "about.desc":
      "私はウェイヤン・メルタ、情報工学科でソフトウェアエンジニアリング技術を専攻する学生です。技術、特にプログラミング言語の開発とWebデザインに深い関心を持っています。この分野で優秀なプロフェッショナルになるため、知識とスキルを磨き続けています。",
    "about.yearsExp": "年の経験",
    "about.projectComplete": "完了プロジェクト",
    "about.happyClients": "満足クライアント",
    "about.downloadCV": "CVをダウンロード",

    "exp.subtitle": "勤務経験のある場所",
    "exp.title": "職務経歴",
    "exp.slide1": "PT. グナ・テクノロジ・ヌサンタラ \u2014 デンパサール、バリ",
    "exp.slide2": "BKSDMインターンシップ \u2014 ブレレン、バリ",
    "exp.slide3": "BRIバンク \u2014 社会支援担当",
    "exp.badge.internship": "インターン",
    "exp.badge.fulltime": "フルタイム",

    "exp.card1.title": "産業インターン \u2014 Webデベロッパー",
    "exp.card1.desc":
      "最新技術を使用したWebアプリケーションの開発・保守を担当。ユーザーインターフェース開発、データ管理、システム統合に重点を置いた複数の重要プロジェクトに積極的に参加しました。",
    "exp.card1.proj1.title": "在庫管理Webサイト",
    "exp.card1.proj1.desc":
      "CRUD機能、ユーザー認証、リアルタイム在庫レポートを備えた動的な在庫管理Webアプリケーションを開発。",
    "exp.card1.proj2.title": "Forstaffウェブサイト（社内システム）",
    "exp.card1.proj2.desc":
      "スタッフ間のコミュニケーションを促進する社内システムの開発に貢献。レスポンシブなUI/UXと部門間データ同期のためのAPI統合に注力。",

    "exp.card2.title": "インターン \u2014 公務員能力開発",
    "exp.card2.role": "分野：公務員能力",
    "exp.card2.desc":
      "地方政府公務員の能力開発プロセスを支援する行政データ管理に従事。人事文書および公式PPPK データを直接扱いました。",
    "exp.card2.proj1.title": "公務員研修SK集計",
    "exp.card2.proj1.desc":
      "公務員研修申請SKの集計データ入力・更新を担当。研修許可を申請する職員のための文書の完全性と情報の正確性を確保しました。",
    "exp.card2.proj2.title": "PPPK 2021・2022 データ管理",
    "exp.card2.proj2.desc":
      "2021年・2022年のPPPK（有期雇用公務員）データを管理。提出済みおよび処理中のデータを含みます。",

    "exp.card3.ongoing": "進行中",
    "exp.card3.title": "社会支援担当",
    "exp.card3.period": "2024年 \u2013 現在",
    "exp.card3.desc":
      "BRIバンクで社会支援（Bansos）配布担当として勤務。政府の社会支援が受益者に正確に届くよう確保し、データ検証および現地での資金交付プロセスを支援しています。",

    "exp.tag.laravel": "Laravel",
    "exp.tag.javascript": "JavaScript",
    "exp.tag.crud": "CRUD",
    "exp.tag.restapi": "REST API",
    "exp.tag.uiux": "UI/UX",
    "exp.tag.realtime": "リアルタイム",
    "exp.tag.dataManagement": "データ管理",
    "exp.tag.admin": "行政",
    "exp.tag.pppk": "PPPK",
    "exp.tag.personnel": "人事",
    "exp.tag.bansos": "社会支援",
    "exp.tag.publicService": "公共サービス",
    "exp.tag.dataVerif": "データ検証",
    "exp.tag.field": "現地業務",
    "exp.tag.bankBRI": "BRIバンク",

    "services.subtitle": "私がご提供できること",
    "services.title": "サービス内容",
    "services.readMore": "詳細を見る",
    "services.graphic.title": "グラフィックデザイン",
    "services.graphic.desc":
      "グラフィックデザインの専門知識を持ち、各プロジェクトに魅力的で印象的なビジュアルデザインを制作するクリエイティブなプロセスを楽しんでいます。",
    "services.web.title": "Web開発",
    "services.web.desc":
      "技術、特にWebサイト開発に深い関心を持ち、Web開発を通じてクリエイティブなソリューションを探求・実現することに常に意欲的です。",
    "services.mobile.title": "モバイル開発",
    "services.mobile.desc":
      "技術、特にモバイルアプリ開発に深い関心を持ち、モバイル開発を通じてクリエイティブなソリューションを探求・実現することに常に情熱を持っています。",

    "skills.subtitle": "技術的・専門的スキル",
    "skills.title": "私のスキル",
    "skills.technical": "技術スキル",
    "skills.professional": "専門スキル",
    "skills.teamwork": "チームワーク",
    "skills.creativity": "創造性",
    "skills.communication": "コミュニケーション",
    "skills.projectMgmt": "プロジェクト管理",

    "journey.subtitle": "私の個人的な歩み",
    "journey.title": "パーソナルジャーニー",
    "journey.education": "学歴",
    "journey.experience": "経験",
    "journey.edu1.title": "ソフトウェアエンジニアリング技術",
    "journey.edu2.title": "数学・自然科学",
    "journey.edu3.title": "中学校",
    "journey.edu4.title": "小学校",
    "journey.exp1.title": "研究インターンシップ",
    "journey.exp1.period": "2023年7月 \u2013 10月",
    "journey.exp2.title": "学生起業家プログラム",
    "journey.exp3.title": "学生委員会",
    "journey.exp4.title": "デジタル人材奨学金",

    "portfolio.subtitle": "私がご提供できること",
    "portfolio.title": "最新プロジェクト",
    "portfolio.filter.all": "すべて",
    "portfolio.filter.mobile": "モバイルアプリ",
    "portfolio.filter.web": "Webアプリ",
    "portfolio.filter.game": "ゲーム",
    "portfolio.proj1.title": "音楽アプリ",
    "portfolio.proj1.desc":
      "Flutterフレームワークを使用した革新的な音楽アプリケーションの開発スキルを習得しました。",
    "portfolio.proj2.title": "IKMログブックアプリ",
    "portfolio.proj2.desc":
      "Flutterフレームワークを使用したIKMログブックアプリの開発スキルを習得しました。",
    "portfolio.proj3.title": "旅行アプリ",
    "portfolio.proj3.desc":
      "Flutterフレームワークを使用した旅行アプリの開発スキルを習得しました。",
    "portfolio.proj4.title": "WordPressウェブデザイン",
    "portfolio.proj4.desc":
      "WordPressを使用したウェブサイト制作スキルを習得しました。",
    "portfolio.proj5.title": "協同組合ウェブサイト",
    "portfolio.proj5.desc":
      "WordPressを使用した協同組合ウェブサイト制作スキルを習得しました。",
    "portfolio.proj6.title": "村のウェブサイト",
    "portfolio.proj6.desc":
      "WordPressを使用した村のウェブサイト制作スキルを習得しました。",
    "portfolio.proj7.title": "バイクレンタルウェブサイト",
    "portfolio.proj7.desc":
      "Laravel 9を使用したバイクレンタルウェブサイト制作スキルを習得しました。",
    "portfolio.proj8.title": "プラットフォーマーゲーム",
    "portfolio.proj8.desc":
      "HTML、JavaScript、CSSを使用したプラットフォームゲーム開発スキルを習得しました。",
    "portfolio.proj9.title": "アプリケーションデザイン",
    "portfolio.proj9.desc":
      "Figmaを使用したアプリデザインスキルを習得しました。",
    "portfolio.proj10.title": "村のウェブサイトデザイン",
    "portfolio.proj10.desc":
      "Figmaを使用した村のウェブサイトデザインスキルを習得しました。",

    "contact.subtitle": "ご質問はこちら",
    "contact.title": "お問い合わせ",
    "contact.name": "お名前",
    "contact.email": "メールアドレス",
    "contact.address": "ご住所",
    "contact.phone": "電話番号",
    "contact.message": "メッセージ",
    "contact.sendBtn": "送信する",
    "contact.successMsg": "メッセージを送信しました！",
    "contact.failMsg": "送信に失敗しました",

    "footer.copy": "Copyright \u00a9 2023 by yanmerta || All Rights Reserved",
  },

  /* ============================================================
     SPANISH (Español)
     ============================================================ */
  es: {
    "nav.home": "Inicio",
    "nav.about": "Sobre Mí",
    "nav.experience": "Experiencia",
    "nav.services": "Servicios",
    "nav.skills": "Habilidades",
    "nav.journey": "Trayectoria",
    "nav.portfolio": "Portafolio",
    "nav.contact": "Contacto",

    "home.greeting": "Hola, soy Yan Merta",
    "home.andIm": "Y soy",
    "home.word1": "Ingeniero\u00a0de\u00a0Software",
    "home.word2": "Gamer",
    "home.word3": "Diseñador\u00a0Web",
    "home.word4": "Desarrollador\u00a0Frontend",
    "home.word5": "Desarrollador\u00a0UX/UI",
    "home.desc":
      "Soy Wayan Merta, estudiante de la Universidad de Educación Ganesha, especializado en el Programa de Estudio de Tecnología de Ingeniería de Software. Me apasiona la tecnología, con especial énfasis en el desarrollo de lenguajes de programación y el diseño web.",
    "home.contactBtn": "Contáctame",

    "about.subtitle": "Permíteme Presentarme",
    "about.title": "Sobre Mí",
    "about.tagline": "Una Historia de Bien",
    "about.desc":
      "Soy Wayan Merta, estudiante del Departamento de Ingeniería Informática con enfoque en el Programa de Tecnología de Ingeniería de Software. Tengo un profundo interés en la tecnología, especialmente en el desarrollo de lenguajes de programación y el diseño web. Busco los conocimientos y habilidades necesarios para convertirme en un profesional competente en este campo.",
    "about.yearsExp": "Años de Experiencia",
    "about.projectComplete": "Proyectos Completados",
    "about.happyClients": "Clientes Satisfechos",
    "about.downloadCV": "Descargar CV",

    "exp.subtitle": "dónde he trabajado",
    "exp.title": "Experiencia Laboral",
    "exp.slide1": "PT. Guna Teknologi Nusantara \u2014 Denpasar, Bali",
    "exp.slide2": "Pasantía BKSDM \u2014 Buleleng, Bali",
    "exp.slide3": "Banco BRI \u2014 Agente de Ayuda Social",
    "exp.badge.internship": "Pasantía",
    "exp.badge.fulltime": "Tiempo Completo",

    "exp.card1.title": "Pasantía Industrial \u2014 Desarrollador Web",
    "exp.card1.desc":
      "Responsable del desarrollo y mantenimiento de aplicaciones web usando tecnologías modernas. Participé activamente en varios proyectos importantes, con enfoque en el desarrollo de interfaz de usuario, gestión de datos e integración de sistemas.",
    "exp.card1.proj1.title": "Sitio Web de Gestión de Inventario",
    "exp.card1.proj1.desc":
      "Desarrollé una aplicación web dinámica para la gestión de inventarios con funciones CRUD, autenticación de usuarios e informes de stock en tiempo real.",
    "exp.card1.proj2.title": "Sitio Web Forstaff (Sistema Interno)",
    "exp.card1.proj2.desc":
      "Contribuí al desarrollo de un sistema interno para facilitar la comunicación entre el personal. Me enfoqué en UI/UX responsivo e integración de API para la sincronización de datos entre departamentos.",

    "exp.card2.title": "Pasantía \u2014 Desarrollo de Competencias",
    "exp.card2.role": "Área: Competencia del Aparato",
    "exp.card2.desc":
      "Participé en la gestión de datos administrativos que apoyan el proceso de desarrollo de competencias del aparato gubernamental local. Trabajé directamente con documentos de personal y datos oficiales de PPPK.",
    "exp.card2.proj1.title": "Recapitulación SK de Licencia de Estudio",
    "exp.card2.proj1.desc":
      "Ingreso y actualización de datos de recapitulación de SK de licencia de estudio para funcionarios públicos, asegurando la completitud de documentos y la exactitud de la información.",
    "exp.card2.proj2.title": "Gestión de Datos PPPK 2021 y 2022",
    "exp.card2.proj2.desc":
      "Gestión de datos PPPK (Empleados Gubernamentales con Acuerdos de Trabajo) para 2021 y 2022, tanto los ya enviados como los que aún están en proceso.",

    "exp.card3.ongoing": "En Curso",
    "exp.card3.title": "Agente de Ayuda Social",
    "exp.card3.period": "2024 \u2013 Presente",
    "exp.card3.desc":
      "Me desempeño como Agente de Distribución de Asistencia Social (Bansos) en el Banco BRI. Soy responsable de garantizar que la asistencia social del gobierno llegue con precisión a los beneficiarios, verificando datos y asistiendo en el proceso de desembolso de fondos directamente en el campo.",

    "exp.tag.laravel": "Laravel",
    "exp.tag.javascript": "JavaScript",
    "exp.tag.crud": "CRUD",
    "exp.tag.restapi": "REST API",
    "exp.tag.uiux": "UI/UX",
    "exp.tag.realtime": "Tiempo Real",
    "exp.tag.dataManagement": "Gestión de Datos",
    "exp.tag.admin": "Administración",
    "exp.tag.pppk": "PPPK",
    "exp.tag.personnel": "Personal",
    "exp.tag.bansos": "Ayuda Social",
    "exp.tag.publicService": "Servicio Público",
    "exp.tag.dataVerif": "Verificación de Datos",
    "exp.tag.field": "Trabajo de Campo",
    "exp.tag.bankBRI": "Banco BRI",

    "services.subtitle": "lo que haré por ti",
    "services.title": "Nuestros Servicios",
    "services.readMore": "Leer Más",
    "services.graphic.title": "Diseñador Gráfico",
    "services.graphic.desc":
      "Tengo experiencia en diseño gráfico. Disfruto del proceso creativo de crear elementos de diseño visual interesantes y atractivos para cada proyecto.",
    "services.web.title": "Desarrollo Web",
    "services.web.desc":
      "Tengo un profundo interés en la tecnología, especialmente en el desarrollo de sitios web. Siempre estoy emocionado de explorar y crear soluciones creativas a través del desarrollo web.",
    "services.mobile.title": "Desarrollo Móvil",
    "services.mobile.desc":
      "Tengo un profundo interés en la tecnología, especialmente en el desarrollo de aplicaciones móviles. Siempre estoy ansioso de explorar y crear soluciones creativas a través del desarrollo móvil.",

    "skills.subtitle": "técnico y profesional",
    "skills.title": "Mis Habilidades",
    "skills.technical": "Habilidades Técnicas",
    "skills.professional": "Habilidades Profesionales",
    "skills.teamwork": "Trabajo en Equipo",
    "skills.creativity": "Creatividad",
    "skills.communication": "Comunicación",
    "skills.projectMgmt": "Gestión de Proyectos",

    "journey.subtitle": "mi historia personal",
    "journey.title": "Trayectoria Personal",
    "journey.education": "Educación",
    "journey.experience": "Experiencia",
    "journey.edu1.title": "Tecnología de Ingeniería de Software",
    "journey.edu2.title": "Matemáticas y Ciencias Naturales",
    "journey.edu3.title": "Escuela Secundaria",
    "journey.edu4.title": "Escuela Primaria",
    "journey.exp1.title": "Pasantía de Investigación",
    "journey.exp1.period": "Julio \u2013 Octubre 2023",
    "journey.exp2.title": "Programa de Estudiante Emprendedor",
    "journey.exp3.title": "Comité Estudiantil",
    "journey.exp4.title": "Beca de Talento Digital",

    "portfolio.subtitle": "lo que haré por ti",
    "portfolio.title": "Últimos Proyectos",
    "portfolio.filter.all": "Todos",
    "portfolio.filter.mobile": "App Móvil",
    "portfolio.filter.web": "App Web",
    "portfolio.filter.game": "Juego",
    "portfolio.proj1.title": "App de Música",
    "portfolio.proj1.desc":
      "He aprendido a desarrollar mis habilidades en la creación de aplicaciones de música innovadoras usando el framework Flutter.",
    "portfolio.proj2.title": "Aplicación Logbook IKM",
    "portfolio.proj2.desc":
      "He aprendido a desarrollar mis habilidades en la creación de una aplicación logbook IKM usando el framework Flutter.",
    "portfolio.proj3.title": "App de Viajes",
    "portfolio.proj3.desc":
      "He aprendido a desarrollar mis habilidades en la creación de aplicaciones de viajes usando el framework Flutter.",
    "portfolio.proj4.title": "Diseño Web WordPress",
    "portfolio.proj4.desc":
      "He aprendido a desarrollar mis habilidades en la creación de sitios web usando WordPress.",
    "portfolio.proj5.title": "Sitio Web Cooperativo",
    "portfolio.proj5.desc":
      "He aprendido a desarrollar mis habilidades en la creación de un sitio web cooperativo usando WordPress.",
    "portfolio.proj6.title": "Sitio Web de Aldea",
    "portfolio.proj6.desc":
      "He aprendido a desarrollar mis habilidades en la creación de un sitio web de aldea usando WordPress.",
    "portfolio.proj7.title": "Sitio Web de Alquiler de Motos",
    "portfolio.proj7.desc":
      "He aprendido a desarrollar mis habilidades en la creación de un sitio de alquiler de motos usando Laravel 9.",
    "portfolio.proj8.title": "Juego Plataformero",
    "portfolio.proj8.desc":
      "He aprendido a desarrollar mis habilidades en la creación de juegos de plataformas usando HTML, JavaScript y CSS.",
    "portfolio.proj9.title": "Diseño de Aplicación",
    "portfolio.proj9.desc":
      "He aprendido a desarrollar mis habilidades en el diseño de aplicaciones usando Figma.",
    "portfolio.proj10.title": "Diseño de Sitio Web de Aldea",
    "portfolio.proj10.desc":
      "He aprendido a desarrollar mis habilidades en el diseño de un sitio web de aldea usando Figma.",

    "contact.subtitle": "Hazme una Pregunta",
    "contact.title": "Contáctame",
    "contact.name": "Tu Nombre",
    "contact.email": "Tu Correo Electrónico",
    "contact.address": "Tu Dirección",
    "contact.phone": "Tu Número de Teléfono",
    "contact.message": "Tu Mensaje",
    "contact.sendBtn": "Enviar Mensaje",
    "contact.successMsg": "¡Mensaje enviado con éxito!",
    "contact.failMsg": "Error al enviar el mensaje",

    "footer.copy":
      "Copyright \u00a9 2023 por yanmerta || Todos los Derechos Reservados",
  },

  /* ============================================================
     FRENCH (Français)
     ============================================================ */
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À Propos",
    "nav.experience": "Expérience",
    "nav.services": "Services",
    "nav.skills": "Compétences",
    "nav.journey": "Parcours",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",

    "home.greeting": "Bonjour, je suis Yan Merta",
    "home.andIm": "Et je suis",
    "home.word1": "Ingénieur\u00a0Logiciel",
    "home.word2": "Gamer",
    "home.word3": "Concepteur\u00a0Web",
    "home.word4": "Développeur\u00a0Frontend",
    "home.word5": "Développeur\u00a0UX/UI",
    "home.desc":
      "Je suis Wayan Merta, étudiant à l'Université d'Éducation Ganesha, spécialisé en Technologie d'Ingénierie Logicielle. Ma passion est la technologie, avec un intérêt particulier pour le développement de langages de programmation et la conception web.",
    "home.contactBtn": "Me Contacter",

    "about.subtitle": "Permettez-moi de Me Présenter",
    "about.title": "À Propos de Moi",
    "about.tagline": "Une Histoire de Bien",
    "about.desc":
      "Je suis Wayan Merta, étudiant en Département d'Ingénierie Informatique avec une spécialisation en Technologie d'Ingénierie Logicielle. J'ai un intérêt profond pour la technologie, notamment dans le développement de langages de programmation et la conception web. Je poursuis les connaissances et compétences nécessaires pour devenir un professionnel compétent dans ce domaine.",
    "about.yearsExp": "Années d'Expérience",
    "about.projectComplete": "Projets Terminés",
    "about.happyClients": "Clients Satisfaits",
    "about.downloadCV": "Télécharger CV",

    "exp.subtitle": "où j'ai travaillé",
    "exp.title": "Expérience Professionnelle",
    "exp.slide1": "PT. Guna Teknologi Nusantara \u2014 Denpasar, Bali",
    "exp.slide2": "Stage BKSDM \u2014 Buleleng, Bali",
    "exp.slide3": "Banque BRI \u2014 Agent d'Aide Sociale",
    "exp.badge.internship": "Stage",
    "exp.badge.fulltime": "Temps Plein",

    "exp.card1.title": "Stage Industriel \u2014 Développeur Web",
    "exp.card1.desc":
      "Responsable du développement et de la maintenance d'applications web à l'aide de technologies modernes. Impliqué activement dans plusieurs projets importants, avec un accent sur le développement d'interfaces utilisateur, la gestion de données et l'intégration de systèmes.",
    "exp.card1.proj1.title": "Site Web de Gestion des Stocks",
    "exp.card1.proj1.desc":
      "Développé une application web dynamique pour la gestion des stocks avec des fonctionnalités CRUD, l'authentification des utilisateurs et des rapports de stock en temps réel.",
    "exp.card1.proj2.title": "Site Web Forstaff (Système Interne)",
    "exp.card1.proj2.desc":
      "Contribué au développement d'un système interne pour faciliter la communication inter-équipes. Axé sur l'UI/UX responsive et l'intégration API pour la synchronisation des données entre départements.",

    "exp.card2.title": "Stage \u2014 Développement des Compétences",
    "exp.card2.role": "Domaine : Compétence des Agents",
    "exp.card2.desc":
      "Rôle dans la gestion des données administratives soutenant le processus de développement des compétences des agents gouvernementaux locaux. Travail direct avec les documents du personnel et les données PPPK officielles.",
    "exp.card2.proj1.title": "Récapitulatif SK de Congé Étude",
    "exp.card2.proj1.desc":
      "Saisie et mise à jour des données de récapitulatif SK de congé étude pour les fonctionnaires, en assurant l'exhaustivité des documents et l'exactitude des informations.",
    "exp.card2.proj2.title": "Gestion des Données PPPK 2021 et 2022",
    "exp.card2.proj2.desc":
      "Gestion des données PPPK (Employés Gouvernementaux sous Contrat) pour 2021 et 2022, ceux déjà soumis et ceux encore en cours de traitement.",

    "exp.card3.ongoing": "En Cours",
    "exp.card3.title": "Agent d'Aide Sociale",
    "exp.card3.period": "2024 \u2013 Présent",
    "exp.card3.desc":
      "En tant qu'Agent de Distribution d'Aide Sociale (Bansos) à la Banque BRI. Responsable de s'assurer que l'aide sociale gouvernementale est distribuée avec précision aux bénéficiaires, en vérifiant les données et en assistant le processus de décaissement directement sur le terrain.",

    "exp.tag.laravel": "Laravel",
    "exp.tag.javascript": "JavaScript",
    "exp.tag.crud": "CRUD",
    "exp.tag.restapi": "REST API",
    "exp.tag.uiux": "UI/UX",
    "exp.tag.realtime": "Temps Réel",
    "exp.tag.dataManagement": "Gestion des Données",
    "exp.tag.admin": "Administration",
    "exp.tag.pppk": "PPPK",
    "exp.tag.personnel": "Personnel",
    "exp.tag.bansos": "Aide Sociale",
    "exp.tag.publicService": "Service Public",
    "exp.tag.dataVerif": "Vérification des Données",
    "exp.tag.field": "Travail de Terrain",
    "exp.tag.bankBRI": "Banque BRI",

    "services.subtitle": "ce que je ferai pour vous",
    "services.title": "Nos Services",
    "services.readMore": "Lire Plus",
    "services.graphic.title": "Designer Graphique",
    "services.graphic.desc":
      "J'ai une expertise en design graphique. J'aime le processus créatif de création d'éléments de design visuels intéressants et engageants pour chaque projet.",
    "services.web.title": "Développement Web",
    "services.web.desc":
      "J'ai un profond intérêt pour la technologie, surtout dans le développement de sites web. Je suis toujours impatient d'explorer et de créer des solutions créatives grâce au développement web.",
    "services.mobile.title": "Développement Mobile",
    "services.mobile.desc":
      "J'ai un profond intérêt pour la technologie, surtout dans le développement d'applications mobiles. Je suis toujours désireux d'explorer et de créer des solutions créatives grâce au développement mobile.",

    "skills.subtitle": "technique et professionnel",
    "skills.title": "Mes Compétences",
    "skills.technical": "Compétences Techniques",
    "skills.professional": "Compétences Professionnelles",
    "skills.teamwork": "Travail d'Équipe",
    "skills.creativity": "Créativité",
    "skills.communication": "Communication",
    "skills.projectMgmt": "Gestion de Projet",

    "journey.subtitle": "mon histoire personnelle",
    "journey.title": "Parcours Personnel",
    "journey.education": "Éducation",
    "journey.experience": "Expérience",
    "journey.edu1.title": "Technologie d'Ingénierie Logicielle",
    "journey.edu2.title": "Mathématiques et Sciences Naturelles",
    "journey.edu3.title": "Collège",
    "journey.edu4.title": "École Primaire",
    "journey.exp1.title": "Stage de Recherche",
    "journey.exp1.period": "Juillet \u2013 Octobre 2023",
    "journey.exp2.title": "Programme Étudiant Entrepreneur",
    "journey.exp3.title": "Comité Étudiant",
    "journey.exp4.title": "Bourse Talent Numérique",

    "portfolio.subtitle": "ce que je ferai pour vous",
    "portfolio.title": "Derniers Projets",
    "portfolio.filter.all": "Tous",
    "portfolio.filter.mobile": "App Mobile",
    "portfolio.filter.web": "App Web",
    "portfolio.filter.game": "Jeu",
    "portfolio.proj1.title": "Application Musicale",
    "portfolio.proj1.desc":
      "J'ai appris à développer mes compétences dans la création d'applications musicales innovantes avec le framework Flutter.",
    "portfolio.proj2.title": "Application Logbook IKM",
    "portfolio.proj2.desc":
      "J'ai appris à développer mes compétences dans la création d'une application logbook IKM avec le framework Flutter.",
    "portfolio.proj3.title": "Application de Voyage",
    "portfolio.proj3.desc":
      "J'ai appris à développer mes compétences dans la création d'applications de voyage avec le framework Flutter.",
    "portfolio.proj4.title": "Design Web WordPress",
    "portfolio.proj4.desc":
      "J'ai appris à développer mes compétences dans la création de sites web avec WordPress.",
    "portfolio.proj5.title": "Site Web Coopératif",
    "portfolio.proj5.desc":
      "J'ai appris à développer mes compétences dans la création d'un site web coopératif avec WordPress.",
    "portfolio.proj6.title": "Site Web de Village",
    "portfolio.proj6.desc":
      "J'ai appris à développer mes compétences dans la création d'un site web de village avec WordPress.",
    "portfolio.proj7.title": "Site Web de Location de Motos",
    "portfolio.proj7.desc":
      "J'ai appris à développer mes compétences dans la création d'un site de location de motos avec Laravel 9.",
    "portfolio.proj8.title": "Jeu Platformeur",
    "portfolio.proj8.desc":
      "J'ai appris à développer mes compétences dans la création de jeux de plateforme avec HTML, JavaScript et CSS.",
    "portfolio.proj9.title": "Design d'Application",
    "portfolio.proj9.desc":
      "J'ai appris à développer mes compétences dans la conception d'applications avec Figma.",
    "portfolio.proj10.title": "Design Site Web de Village",
    "portfolio.proj10.desc":
      "J'ai appris à développer mes compétences dans la conception d'un site web de village avec Figma.",

    "contact.subtitle": "Posez-moi une Question",
    "contact.title": "Contactez-moi",
    "contact.name": "Votre Nom",
    "contact.email": "Votre Email",
    "contact.address": "Votre Adresse",
    "contact.phone": "Votre Numéro de Téléphone",
    "contact.message": "Votre Message",
    "contact.sendBtn": "Envoyer le Message",
    "contact.successMsg": "Message envoyé avec succès !",
    "contact.failMsg": "Échec de l'envoi du message",

    "footer.copy": "Copyright \u00a9 2023 par yanmerta || Tous Droits Réservés",
  },

  /* ============================================================
     GERMAN (Deutsch)
     ============================================================ */
  de: {
    "nav.home": "Startseite",
    "nav.about": "Über Mich",
    "nav.experience": "Erfahrung",
    "nav.services": "Leistungen",
    "nav.skills": "Fähigkeiten",
    "nav.journey": "Werdegang",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Kontakt",

    "home.greeting": "Hallo, ich bin Yan Merta",
    "home.andIm": "Und ich bin",
    "home.word1": "Software\u00a0Ingenieur",
    "home.word2": "Gamer",
    "home.word3": "Web\u00a0Designer",
    "home.word4": "Frontend\u00a0Entwickler",
    "home.word5": "UX/UI\u00a0Entwickler",
    "home.desc":
      "Ich bin Wayan Merta, Student an der Ganesha Education University mit Schwerpunkt im Studiengang Software Engineering Technology. Meine Leidenschaft gilt der Technologie, insbesondere der Entwicklung von Programmiersprachen und dem Webdesign.",
    "home.contactBtn": "Kontakt",

    "about.subtitle": "Erlauben Sie mir, mich vorzustellen",
    "about.title": "Über Mich",
    "about.tagline": "Eine Geschichte des Guten",
    "about.desc":
      "Ich bin Wayan Merta, Student der Informationstechnik mit Fokus auf Software Engineering Technology. Ich habe ein tiefes Interesse an Technologie, insbesondere an der Entwicklung von Programmiersprachen und Webdesign. Ich strebe das Wissen und die Fähigkeiten an, die nötig sind, um ein kompetenter Fachmann in diesem Bereich zu werden.",
    "about.yearsExp": "Jahre Erfahrung",
    "about.projectComplete": "Abgeschlossene Projekte",
    "about.happyClients": "Zufriedene Kunden",
    "about.downloadCV": "Lebenslauf herunterladen",

    "exp.subtitle": "wo ich gearbeitet habe",
    "exp.title": "Berufserfahrung",
    "exp.slide1": "PT. Guna Teknologi Nusantara \u2014 Denpasar, Bali",
    "exp.slide2": "Praktikum BKSDM \u2014 Buleleng, Bali",
    "exp.slide3": "Bank BRI \u2014 Sozialleistungsbeauftragter",
    "exp.badge.internship": "Praktikum",
    "exp.badge.fulltime": "Vollzeit",

    "exp.card1.title": "Industriepraktikum \u2014 Web-Entwickler",
    "exp.card1.desc":
      "Verantwortlich für die Entwicklung und Wartung von Webanwendungen mit modernen Technologien. Aktiv an mehreren wichtigen Projekten beteiligt, mit Fokus auf Benutzeroberflächenentwicklung, Datenverwaltung und Systemintegration.",
    "exp.card1.proj1.title": "Lagerverwaltungs-Website",
    "exp.card1.proj1.desc":
      "Entwickelte eine dynamische Webanwendung für das Bestandsmanagement mit CRUD-Funktionen, Benutzerauthentifizierung und Echtzeit-Bestandsberichten.",
    "exp.card1.proj2.title": "Forstaff-Website (Internes System)",
    "exp.card1.proj2.desc":
      "Beitrag zur Entwicklung eines internen Systems zur Erleichterung der abteilungsübergreifenden Kommunikation. Fokus auf responsives UI/UX und API-Integration für die Datensynchronisation.",

    "exp.card2.title": "Praktikum \u2014 Kompetenzentwicklung",
    "exp.card2.role": "Bereich: Behördenkompetenz",
    "exp.card2.desc":
      "Beteiligung an der Verwaltung von Verwaltungsdaten zur Unterstützung der Kompetenzentwicklung lokaler Regierungsbeamter. Direkte Arbeit mit Personaldokumenten und offiziellen PPPK-Daten.",
    "exp.card2.proj1.title": "SK-Rekapitulation Bildungsurlaub",
    "exp.card2.proj1.desc":
      "Dateneingabe und -aktualisierung der Bildungsurlaubs-SK-Rekapitulation, um Dokumentenvollständigkeit und Informationsgenauigkeit sicherzustellen.",
    "exp.card2.proj2.title": "PPPK 2021 & 2022 Datenverwaltung",
    "exp.card2.proj2.desc":
      "Verwaltung von PPPK-Daten (Regierungsangestellte mit Arbeitsverträgen) für 2021 und 2022, sowohl bereits eingereichte als auch noch in Bearbeitung befindliche.",

    "exp.card3.ongoing": "Laufend",
    "exp.card3.title": "Sozialleistungsbeauftragter",
    "exp.card3.period": "2024 \u2013 Heute",
    "exp.card3.desc":
      "Tätigkeit als Verteilungsbeauftragter für Sozialhilfe (Bansos) bei der Bank BRI. Verantwortlich für die genaue Verteilung staatlicher Sozialhilfe an Begünstigte, Datenverifizierung und Unterstützung des Auszahlungsprozesses direkt vor Ort.",

    "exp.tag.laravel": "Laravel",
    "exp.tag.javascript": "JavaScript",
    "exp.tag.crud": "CRUD",
    "exp.tag.restapi": "REST API",
    "exp.tag.uiux": "UI/UX",
    "exp.tag.realtime": "Echtzeit",
    "exp.tag.dataManagement": "Datenverwaltung",
    "exp.tag.admin": "Verwaltung",
    "exp.tag.pppk": "PPPK",
    "exp.tag.personnel": "Personal",
    "exp.tag.bansos": "Sozialhilfe",
    "exp.tag.publicService": "Öffentlicher Dienst",
    "exp.tag.dataVerif": "Datenprüfung",
    "exp.tag.field": "Außendienst",
    "exp.tag.bankBRI": "Bank BRI",

    "services.subtitle": "was ich für Sie tun werde",
    "services.title": "Unsere Leistungen",
    "services.readMore": "Mehr Lesen",
    "services.graphic.title": "Grafikdesigner",
    "services.graphic.desc":
      "Ich habe Expertise im Grafikdesign. Ich genieße den kreativen Prozess der Erstellung interessanter und ansprechender visueller Designelemente für jedes Projekt.",
    "services.web.title": "Webentwicklung",
    "services.web.desc":
      "Ich habe ein tiefes Interesse an Technologie, insbesondere an der Website-Entwicklung. Ich freue mich immer darauf, kreative Lösungen durch Webentwicklung zu erkunden und umzusetzen.",
    "services.mobile.title": "Mobile Entwicklung",
    "services.mobile.desc":
      "Ich habe ein tiefes Interesse an Technologie, insbesondere an der Entwicklung mobiler Anwendungen. Ich bin stets bestrebt, kreative Lösungen durch mobile Entwicklung zu erkunden und umzusetzen.",

    "skills.subtitle": "technisch und professionell",
    "skills.title": "Meine Fähigkeiten",
    "skills.technical": "Technische Fähigkeiten",
    "skills.professional": "Professionelle Fähigkeiten",
    "skills.teamwork": "Teamarbeit",
    "skills.creativity": "Kreativität",
    "skills.communication": "Kommunikation",
    "skills.projectMgmt": "Projektmanagement",

    "journey.subtitle": "meine persönliche Geschichte",
    "journey.title": "Persönlicher Werdegang",
    "journey.education": "Bildung",
    "journey.experience": "Erfahrung",
    "journey.edu1.title": "Software Engineering Technology",
    "journey.edu2.title": "Mathematik und Naturwissenschaften",
    "journey.edu3.title": "Mittelschule",
    "journey.edu4.title": "Grundschule",
    "journey.exp1.title": "Forschungspraktikum",
    "journey.exp1.period": "Juli \u2013 Oktober 2023",
    "journey.exp2.title": "Unternehmerisches Studentenprogramm",
    "journey.exp3.title": "Studentenausschuss",
    "journey.exp4.title": "Digital Talent Stipendium",

    "portfolio.subtitle": "was ich für Sie tun werde",
    "portfolio.title": "Neueste Projekte",
    "portfolio.filter.all": "Alle",
    "portfolio.filter.mobile": "Mobile App",
    "portfolio.filter.web": "Web App",
    "portfolio.filter.game": "Spiel",
    "portfolio.proj1.title": "Musik-App",
    "portfolio.proj1.desc":
      "Ich habe gelernt, meine Fähigkeiten bei der Erstellung innovativer Musik-Apps mit dem Flutter-Framework zu entwickeln.",
    "portfolio.proj2.title": "IKM Logbuch-Anwendung",
    "portfolio.proj2.desc":
      "Ich habe gelernt, meine Fähigkeiten bei der Erstellung einer IKM-Logbuch-Anwendung mit dem Flutter-Framework zu entwickeln.",
    "portfolio.proj3.title": "Reise-App",
    "portfolio.proj3.desc":
      "Ich habe gelernt, meine Fähigkeiten bei der Erstellung von Reise-Apps mit dem Flutter-Framework zu entwickeln.",
    "portfolio.proj4.title": "WordPress Web-Design",
    "portfolio.proj4.desc":
      "Ich habe gelernt, meine Fähigkeiten bei der Erstellung von Websites mit WordPress zu entwickeln.",
    "portfolio.proj5.title": "Genossenschafts-Website",
    "portfolio.proj5.desc":
      "Ich habe gelernt, meine Fähigkeiten bei der Erstellung einer Genossenschafts-Website mit WordPress zu entwickeln.",
    "portfolio.proj6.title": "Dorf-Website",
    "portfolio.proj6.desc":
      "Ich habe gelernt, meine Fähigkeiten bei der Erstellung einer Dorf-Website mit WordPress zu entwickeln.",
    "portfolio.proj7.title": "Motorrad-Verleih-Website",
    "portfolio.proj7.desc":
      "Ich habe gelernt, meine Fähigkeiten bei der Erstellung einer Motorrad-Verleih-Website mit Laravel 9 zu entwickeln.",
    "portfolio.proj8.title": "Plattformer-Spiel",
    "portfolio.proj8.desc":
      "Ich habe gelernt, meine Fähigkeiten bei der Erstellung von Plattform-Spielen mit HTML, JavaScript und CSS zu entwickeln.",
    "portfolio.proj9.title": "Anwendungsdesign",
    "portfolio.proj9.desc":
      "Ich habe gelernt, meine Fähigkeiten im App-Design mit Figma zu entwickeln.",
    "portfolio.proj10.title": "Dorf-Website Design",
    "portfolio.proj10.desc":
      "Ich habe gelernt, meine Fähigkeiten im Design einer Dorf-Website mit Figma zu entwickeln.",

    "contact.subtitle": "Stellen Sie mir eine Frage",
    "contact.title": "Kontakt",
    "contact.name": "Ihr Name",
    "contact.email": "Ihre E-Mail",
    "contact.address": "Ihre Adresse",
    "contact.phone": "Ihre Telefonnummer",
    "contact.message": "Ihre Nachricht",
    "contact.sendBtn": "Nachricht Senden",
    "contact.successMsg": "Nachricht erfolgreich gesendet!",
    "contact.failMsg": "Nachricht konnte nicht gesendet werden",

    "footer.copy":
      "Copyright \u00a9 2023 von yanmerta || Alle Rechte Vorbehalten",
  },
};

/* ================================================================
   LANGUAGE METADATA
   Defines all supported languages for the switcher UI.
   Add a new language here + a translation block above to extend.
   ================================================================ */
const LANGUAGES = [
  {
    code: "en",
    flag: "\uD83C\uDDEC\uD83C\uDDE7",
    label: "EN",
    name: "English",
  },
  {
    code: "id",
    flag: "\uD83C\uDDEE\uD83C\uDDE9",
    label: "ID",
    name: "Bahasa Indonesia",
  },
  { code: "ja", flag: "\uD83C\uDDEF\uD83C\uDDF5", label: "JA", name: "日本語" },
  {
    code: "es",
    flag: "\uD83C\uDDEA\uD83C\uDDF8",
    label: "ES",
    name: "Español",
  },
  {
    code: "fr",
    flag: "\uD83C\uDDEB\uD83C\uDDF7",
    label: "FR",
    name: "Français",
  },
  {
    code: "de",
    flag: "\uD83C\uDDE9\uD83C\uDDEA",
    label: "DE",
    name: "Deutsch",
  },
];

/* ================================================================
   CORE i18n MODULE
   ================================================================ */
(function () {
  const STORAGE_KEY = "siteLang";
  const LANG_VERSION = "v6"; // bump when adding new languages

  // Reset stale cached version
  const savedVersion = localStorage.getItem("siteLangVersion");
  if (savedVersion !== LANG_VERSION) {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.setItem("siteLangVersion", LANG_VERSION);
  }

  // Default language = English
  let currentLang = localStorage.getItem(STORAGE_KEY) || "en";

  // Validate saved language actually exists; fall back to "en"
  if (!translations[currentLang]) currentLang = "en";

  /* ---- Translate all data-i18n elements ---- */
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

    // Animated word elements — update textContent directly
    document.querySelectorAll("[data-i18n-word]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-word");
      if (t[key] !== undefined) el.textContent = t[key];
    });

    document.documentElement.lang = lang;

    // Reinit word animation AFTER all words are updated
    if (typeof window.reinitWordAnimation === "function") {
      window.reinitWordAnimation();
    }
  }

  /* ---- Build the dropdown HTML dynamically from LANGUAGES ---- */
  function buildDropdown() {
    const dropdown = document.getElementById("langDropdown");
    if (!dropdown) return;

    dropdown.innerHTML = "";
    LANGUAGES.forEach(function (lang) {
      const btn = document.createElement("button");
      btn.className =
        "lang-option" + (lang.code === currentLang ? " active" : "");
      btn.setAttribute("data-lang", lang.code);
      btn.setAttribute(
        "id",
        "opt" + lang.code.charAt(0).toUpperCase() + lang.code.slice(1),
      );
      btn.innerHTML = "<span>" + lang.flag + "</span> " + lang.name;

      btn.addEventListener("click", function () {
        setLang(lang.code);
        closeDropdown();
        // On mobile: close the nav menu after language selection
        var menuIcon = document.querySelector("#menu-icon");
        var navlist = document.querySelector(".navlist");
        if (menuIcon && navlist) {
          setTimeout(function () {
            menuIcon.classList.remove("bx-x");
            navlist.classList.remove("open");
            document.body.style.overflow = "";
          }, 200);
        }
      });

      dropdown.appendChild(btn);
    });
  }

  /* ---- Update the switcher button UI ---- */
  function updateSwitcherUI(lang) {
    const flagEl = document.getElementById("langFlag");
    const labelEl = document.getElementById("langLabel");
    const found =
      LANGUAGES.find(function (l) {
        return l.code === lang;
      }) || LANGUAGES[0];

    if (flagEl) flagEl.textContent = found.flag;
    if (labelEl) labelEl.textContent = found.label;

    // Update active state in dropdown
    document.querySelectorAll(".lang-option").forEach(function (opt) {
      opt.classList.toggle("active", opt.getAttribute("data-lang") === lang);
    });
  }

  /* ---- Open / close helpers ---- */
  function closeDropdown() {
    const dropdown = document.getElementById("langDropdown");
    const btn = document.getElementById("langToggleBtn");
    const arrow = document.getElementById("langArrow");
    if (dropdown) dropdown.classList.remove("open");
    if (btn) btn.classList.remove("active");
    if (arrow) arrow.style.transform = "rotate(0deg)";
  }

  /* ---- Switch language ---- */
  function setLang(lang) {
    if (!translations[lang]) return; // guard unknown lang codes
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(lang);
    updateSwitcherUI(lang);
  }

  /* ---- Wire up the dropdown toggle ---- */
  function initSwitcher() {
    const btn = document.getElementById("langToggleBtn");
    const dropdown = document.getElementById("langDropdown");
    const arrow = document.getElementById("langArrow");
    if (!btn || !dropdown) return;

    // Build dropdown options from LANGUAGES array
    buildDropdown();

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const isOpen = dropdown.classList.toggle("open");
      btn.classList.toggle("active", isOpen);
      if (arrow)
        arrow.style.transform = isOpen ? "rotate(180deg)" : "rotate(0deg)";
    });

    // Close on outside click
    document.addEventListener("click", function (e) {
      if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
        closeDropdown();
      }
    });

    // Close on Escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeDropdown();
    });
  }

  /* ---- Public API ---- */
  const i18nAPI = {
    t: function (key) {
      return (translations[currentLang] || translations["en"])[key] || key;
    },
    setLang: setLang,
    getLang: function () {
      return currentLang;
    },
    getLanguages: function () {
      return LANGUAGES.slice();
    },
  };
  window.i18n = i18nAPI;
  window.I18n = i18nAPI; // alias for backward compat

  /* ---- Boot ---- */
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
