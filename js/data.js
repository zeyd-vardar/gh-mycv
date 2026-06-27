/* =====================================================================
 *  CV İÇERİĞİ / CV CONTENT
 *  ---------------------------------------------------------------------
 *  Tüm metinleri burada düzenle. Her alanın "tr" (Türkçe) ve "en"
 *  (İngilizce) karşılığı var. Sadece tırnak içindeki yazıları değiştir.
 *
 *  Edit all texts here. Every field has a "tr" (Turkish) and "en"
 *  (English) version. Only change the text inside the quotes.
 * ===================================================================== */

const CV_DATA = {
  // --- Genel / General ---------------------------------------------------
  name: "Zeyd Vardar",
  photo: "assets/profile.jpg", // assets/ klasörüne fotoğrafını koy / put your photo in assets/
  resumeUrl: "", // PDF CV linki (opsiyonel) / link to a PDF resume (optional)

  // --- Başlık / Title ----------------------------------------------------
  title: {
    tr: "Yazılım Geliştirici",
    en: "Software Developer",
  },

  // --- Kısa tanıtım / Short intro (hero) --------------------------------
  tagline: {
    tr: "Temiz, kullanışlı ve modern web uygulamaları geliştiriyorum.",
    en: "I build clean, useful and modern web applications.",
  },

  // --- Hakkımda / About --------------------------------------------------
  about: {
    tr: "Kendini buraya birkaç cümleyle tanıt. Hangi alanda çalışıyorsun, neleri seviyorsun, hedeflerin neler? Bu metni kendi sözlerinle değiştir.",
    en: "Introduce yourself in a few sentences here. What do you work on, what do you enjoy, what are your goals? Replace this text with your own words.",
  },

  // --- İletişim / Contact ------------------------------------------------
  contact: {
    email: "zeydvardar61@gmail.com",
    phone: "", // örn / e.g. "+90 5XX XXX XX XX"
    location: {
      tr: "Türkiye",
      en: "Turkey",
    },
  },

  // --- Sosyal bağlantılar / Social links --------------------------------
  // İstemediklerini "" boş bırak veya sil / leave "" empty or delete unused
  social: [
    { label: "GitHub", icon: "github", url: "https://github.com/zeyd-vardar" },
    { label: "LinkedIn", icon: "linkedin", url: "" },
    { label: "Twitter", icon: "twitter", url: "" },
    { label: "Website", icon: "globe", url: "" },
  ],

  // --- Deneyim / Experience ---------------------------------------------
  experience: [
    {
      role: { tr: "Pozisyon / Rol", en: "Position / Role" },
      company: "Şirket Adı / Company Name",
      period: { tr: "2023 — Günümüz", en: "2023 — Present" },
      description: {
        tr: "Burada yaptığın işleri ve başarılarını anlat.",
        en: "Describe your responsibilities and achievements here.",
      },
    },
    {
      role: { tr: "Önceki Pozisyon", en: "Previous Position" },
      company: "Önceki Şirket / Previous Company",
      period: { tr: "2021 — 2023", en: "2021 — 2023" },
      description: {
        tr: "Burada yaptığın işleri ve başarılarını anlat.",
        en: "Describe your responsibilities and achievements here.",
      },
    },
  ],

  // --- Eğitim / Education ------------------------------------------------
  education: [
    {
      school: { tr: "Üniversite / Okul Adı", en: "University / School Name" },
      degree: { tr: "Bölüm / Derece", en: "Field / Degree" },
      period: { tr: "2019 — 2023", en: "2019 — 2023" },
      description: {
        tr: "İsteğe bağlı açıklama (not ortalaması, projeler, vb.).",
        en: "Optional description (GPA, projects, etc.).",
      },
    },
  ],

  // --- Yetenekler / Skills ----------------------------------------------
  skills: [
    "HTML", "CSS", "JavaScript", "TypeScript", "React",
    "Node.js", "Git", "Python", "SQL",
  ],

  // --- Projeler / Projects ----------------------------------------------
  projects: [
    {
      name: "Proje Adı / Project Name",
      description: {
        tr: "Projenin kısa açıklaması.",
        en: "Short description of the project.",
      },
      tags: ["React", "API"],
      url: "",
    },
    {
      name: "İkinci Proje / Second Project",
      description: {
        tr: "Projenin kısa açıklaması.",
        en: "Short description of the project.",
      },
      tags: ["JavaScript", "CSS"],
      url: "",
    },
  ],

  // --- Diller / Languages -----------------------------------------------
  languages: [
    { name: { tr: "Türkçe", en: "Turkish" }, level: { tr: "Anadil", en: "Native" } },
    { name: { tr: "İngilizce", en: "English" }, level: { tr: "Orta / İleri", en: "Intermediate / Advanced" } },
  ],
};

/* Arayüz metinleri (bölüm başlıkları vb.) / UI strings (section titles etc.) */
const UI_STRINGS = {
  nav: {
    about: { tr: "Hakkımda", en: "About" },
    experience: { tr: "Deneyim", en: "Experience" },
    education: { tr: "Eğitim", en: "Education" },
    skills: { tr: "Yetenekler", en: "Skills" },
    projects: { tr: "Projeler", en: "Projects" },
    contact: { tr: "İletişim", en: "Contact" },
  },
  sections: {
    about: { tr: "Hakkımda", en: "About Me" },
    experience: { tr: "Deneyim", en: "Experience" },
    education: { tr: "Eğitim", en: "Education" },
    skills: { tr: "Yetenekler", en: "Skills" },
    projects: { tr: "Projeler", en: "Projects" },
    languages: { tr: "Diller", en: "Languages" },
    contact: { tr: "İletişim", en: "Contact" },
  },
  buttons: {
    downloadCv: { tr: "CV'yi İndir", en: "Download CV" },
    contactMe: { tr: "İletişime Geç", en: "Contact Me" },
    viewProject: { tr: "Projeyi Gör", en: "View Project" },
  },
  contact: {
    intro: {
      tr: "Benimle iletişime geçmekten çekinme.",
      en: "Feel free to get in touch with me.",
    },
    emailLabel: { tr: "E-posta", en: "Email" },
    phoneLabel: { tr: "Telefon", en: "Phone" },
    locationLabel: { tr: "Konum", en: "Location" },
  },
  footer: {
    tr: "Tüm hakları saklıdır.",
    en: "All rights reserved.",
  },
};
