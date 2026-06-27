/* =====================================================================
 *  Render mantığı / Rendering logic
 *  Bu dosyayı düzenlemen gerekmez. İçeriği js/data.js'den değiştir.
 *  You don't need to edit this file. Change content in js/data.js.
 * ===================================================================== */

(function () {
  "use strict";

  const STORAGE_LANG = "cv-lang";
  const STORAGE_THEME = "cv-theme";

  let lang = localStorage.getItem(STORAGE_LANG) || "tr";

  /* ----------------------------- Icons ------------------------------- */
  const ICONS = {
    github:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    twitter:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41z"/></svg>',
    globe:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    email:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    phone:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    location:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  };

  /* --------------------------- Helpers ------------------------------- */
  const t = (field) => (field && typeof field === "object" ? field[lang] : field);
  const el = (id) => document.getElementById(id);
  const qa = (sel) => Array.from(document.querySelectorAll(sel));

  /* ----------------------------- Render ------------------------------ */
  function render() {
    document.documentElement.lang = lang;

    // Brand + name
    qa("[data-brand]").forEach((n) => (n.textContent = CV_DATA.name));
    qa("[data-name]").forEach((n) => (n.textContent = CV_DATA.name));
    qa("[data-title]").forEach((n) => (n.textContent = t(CV_DATA.title)));
    qa("[data-tagline]").forEach((n) => (n.textContent = t(CV_DATA.tagline)));
    qa("[data-about]").forEach((n) => (n.textContent = t(CV_DATA.about)));

    // Photo
    const photo = el("hero-photo");
    if (CV_DATA.photo) {
      photo.src = CV_DATA.photo;
      photo.onerror = () => {
        const initial = CV_DATA.name ? CV_DATA.name.trim().charAt(0) : "?";
        photo.src =
          "data:image/svg+xml;utf8," +
          encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140">' +
              '<rect width="140" height="140" fill="#e4e8f0"/>' +
              '<text x="50%" y="50%" dy=".35em" font-size="56" text-anchor="middle" fill="#9aa6bd" font-family="sans-serif">' +
              initial +
              "</text></svg>"
          );
        photo.onerror = null;
      };
    }

    // Nav links (hide sections that have no content)
    const navOrder = ["about", "experience", "education", "skills", "projects", "contact"];
    const hasContent = {
      about: !!t(CV_DATA.about),
      experience: CV_DATA.experience.length > 0,
      education: CV_DATA.education.length > 0,
      skills: CV_DATA.skills.length > 0,
      projects: CV_DATA.projects.length > 0,
      contact: true,
    };
    el("nav-links").innerHTML = navOrder
      .filter((k) => hasContent[k])
      .map((k) => `<a href="#${k}">${t(UI_STRINGS.nav[k])}</a>`)
      .join("");
    navOrder.forEach((k) => {
      const sec = document.getElementById(k);
      if (sec) sec.hidden = !hasContent[k];
    });

    // CTAs
    el("cta-contact").textContent = t(UI_STRINGS.buttons.contactMe);
    const cvBtn = el("cta-cv");
    cvBtn.textContent = t(UI_STRINGS.buttons.downloadCv);
    if (CV_DATA.resumeUrl) {
      cvBtn.href = CV_DATA.resumeUrl;
      cvBtn.hidden = false;
    } else {
      cvBtn.hidden = true;
    }

    // Social
    el("hero-social").innerHTML = CV_DATA.social
      .filter((s) => s.url)
      .map(
        (s) =>
          `<a href="${s.url}" target="_blank" rel="noopener" title="${s.label}" aria-label="${s.label}">${
            ICONS[s.icon] || ICONS.globe
          }</a>`
      )
      .join("");

    // Section titles
    qa("[data-section]").forEach((n) => {
      const key = n.getAttribute("data-section");
      n.textContent = t(UI_STRINGS.sections[key]);
    });

    // Experience
    el("experience-list").innerHTML = CV_DATA.experience
      .map(
        (e) => `
        <div class="timeline__item">
          <div class="timeline__head">
            <div>
              <div class="timeline__role">${t(e.role)}</div>
              <div class="timeline__company">${e.company}</div>
            </div>
            <span class="timeline__period">${t(e.period)}</span>
          </div>
          <p class="timeline__desc">${t(e.description)}</p>
        </div>`
      )
      .join("");

    // Education
    el("education-list").innerHTML = CV_DATA.education
      .map(
        (e) => `
        <div class="timeline__item">
          <div class="timeline__head">
            <div>
              <div class="timeline__role">${t(e.school)}</div>
              <div class="timeline__company">${t(e.degree)}</div>
            </div>
            <span class="timeline__period">${t(e.period)}</span>
          </div>
          ${e.description && t(e.description) ? `<p class="timeline__desc">${t(e.description)}</p>` : ""}
        </div>`
      )
      .join("");

    // Skills
    el("skills-list").innerHTML = CV_DATA.skills
      .map((s) => `<span class="chip">${t(s)}</span>`)
      .join("");

    // Projects
    el("projects-list").innerHTML = CV_DATA.projects
      .map(
        (p) => `
        <div class="card">
          <div class="card__name">${p.name}</div>
          <p class="card__desc">${t(p.description)}</p>
          ${
            p.tags && p.tags.length
              ? `<div class="card__tags">${p.tags.map((x) => `<span class="card__tag">${x}</span>`).join("")}</div>`
              : ""
          }
          ${p.url ? `<a class="card__link" href="${p.url}" target="_blank" rel="noopener">${t(UI_STRINGS.buttons.viewProject)}</a>` : ""}
        </div>`
      )
      .join("");

    // Languages
    el("languages-list").innerHTML = CV_DATA.languages
      .map(
        (l) => `
        <div class="lang">
          <div class="lang__name">${t(l.name)}</div>
          <div class="lang__level">${t(l.level)}</div>
        </div>`
      )
      .join("");

    // Contact
    qa("[data-contact-intro]").forEach((n) => (n.textContent = t(UI_STRINGS.contact.intro)));
    const c = CV_DATA.contact;
    const items = [];
    if (c.email)
      items.push({
        icon: "email",
        label: t(UI_STRINGS.contact.emailLabel),
        value: c.email,
        href: `mailto:${c.email}`,
      });
    if (c.phone)
      items.push({
        icon: "phone",
        label: t(UI_STRINGS.contact.phoneLabel),
        value: c.phone,
        href: `tel:${c.phone.replace(/\s+/g, "")}`,
      });
    if (c.location && t(c.location))
      items.push({
        icon: "location",
        label: t(UI_STRINGS.contact.locationLabel),
        value: t(c.location),
        href: "",
      });
    el("contact-grid").innerHTML = items
      .map((it) => {
        const inner = `
          <span class="contact__icon">${ICONS[it.icon]}</span>
          <span>
            <span class="contact__label">${it.label}</span><br />
            <span class="contact__value">${it.value}</span>
          </span>`;
        return it.href
          ? `<a class="contact__item" href="${it.href}">${inner}</a>`
          : `<div class="contact__item">${inner}</div>`;
      })
      .join("");

    // Footer + language label + page title
    const year = new Date().getFullYear();
    qa("[data-footer]").forEach(
      (n) => (n.textContent = `© ${year} ${CV_DATA.name} · ${t(UI_STRINGS.footer)}`)
    );
    el("lang-label").textContent = lang === "tr" ? "EN" : "TR";
    document.title = `${CV_DATA.name} · CV`;
  }

  /* ---------------------------- Toggles ------------------------------ */
  function initTheme() {
    const saved = localStorage.getItem(STORAGE_THEME);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved || (prefersDark ? "dark" : "light");
    setTheme(theme);
  }
  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_THEME, theme);
    const icon = document.querySelector(".theme-icon");
    if (icon) icon.textContent = theme === "dark" ? "☀️" : "🌙";
  }

  function bindEvents() {
    el("lang-toggle").addEventListener("click", () => {
      lang = lang === "tr" ? "en" : "tr";
      localStorage.setItem(STORAGE_LANG, lang);
      render();
    });
    el("theme-toggle").addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      setTheme(current === "dark" ? "light" : "dark");
    });
    el("menu-toggle").addEventListener("click", () => {
      el("nav-links").classList.toggle("open");
    });
    el("nav-links").addEventListener("click", (e) => {
      if (e.target.tagName === "A") el("nav-links").classList.remove("open");
    });
  }

  /* ----------------------------- Init -------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    render();
    bindEvents();
  });
})();
