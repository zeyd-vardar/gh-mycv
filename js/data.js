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
    tr: "Full Stack & Mobil Geliştirici",
    en: "Full Stack & Mobile Developer",
  },

  // --- Kısa tanıtım / Short intro (hero) --------------------------------
  tagline: {
    tr: "Web (frontend & backend) ve mobil uygulamalar geliştiriyorum.",
    en: "I build web (frontend & backend) and mobile applications.",
  },

  // --- Hakkımda / About --------------------------------------------------
  about: {
    tr: "2001 yılında Yalova'da doğdum, şu anda Trabzon'da yaşıyorum. 4 yıldır yazılım geliştirme ile uğraşıyorum; web tarafında hem frontend hem backend geliştirmeler yapıyor, aynı zamanda mobil uygulamalar geliştiriyorum. Yeni teknolojiler öğrenmeyi ve kullanıcı odaklı, işlevsel çözümler üretmeyi seviyorum. İkinci dil olarak İngilizceyi B1-B2 seviyesinde kullanıyorum.",
    en: "I was born in Yalova in 2001 and currently live in Trabzon, Turkey. I have been working in software development for 4 years — building both frontend and backend for the web, as well as developing mobile applications. I enjoy learning new technologies and creating user-focused, functional solutions. I use English as my second language at a B1-B2 level.",
  },

  // --- İletişim / Contact ------------------------------------------------
  contact: {
    email: "zeydvardar61@gmail.com",
    phone: "", // örn / e.g. "+90 5XX XXX XX XX"
    location: {
      tr: "Trabzon, Türkiye",
      en: "Trabzon, Turkey",
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
  // Henüz iş deneyimi yok; ileride buraya ekleyebilirsin (boşken bölüm gizlenir).
  // No work experience yet; add entries here later (section is hidden while empty).
  experience: [],

  // --- Eğitim / Education ------------------------------------------------
  education: [
    {
      school: { tr: "Yalova Üniversitesi", en: "Yalova University" },
      degree: { tr: "Bilgisayar Programcılığı", en: "Computer Programming" },
      period: { tr: "2024 (Mezun)", en: "2024 (Graduated)" },
      description: {
        tr: "",
        en: "",
      },
    },
  ],

  // --- Yetenekler / Skills ----------------------------------------------
  // Düz yazı (örn. "React") ya da { tr, en } kullanabilirsin.
  // Plain string (e.g. "React") or { tr, en } both work.
  skills: [
    { tr: "Web Geliştirme", en: "Web Development" },
    "Frontend",
    "Backend",
    { tr: "Mobil Geliştirme", en: "Mobile Development" },
    { tr: "Yapay Zeka Destekli İleri Düzey Kodlama", en: "AI-Assisted Advanced Coding" },
  ],

  // --- Projeler / Projects ----------------------------------------------
  // Projeler hazır olduğunda buraya ekle (boşken bölüm gizlenir).
  // Add projects here when ready (section is hidden while empty).
  projects: [],

  // --- Diller / Languages -----------------------------------------------
  languages: [
    { name: { tr: "Türkçe", en: "Turkish" }, level: { tr: "Anadil", en: "Native" } },
    { name: { tr: "İngilizce", en: "English" }, level: { tr: "B1-B2 (Orta / Orta-İleri)", en: "B1-B2 (Intermediate / Upper-Intermediate)" } },
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
