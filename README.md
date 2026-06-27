# CV Website / CV Web Sitesi

Bilingual (Türkçe / English) personal CV/résumé website built with plain **HTML, CSS and JavaScript** — no build step, no framework.

İki dilli (Türkçe / İngilizce) kişisel CV web sitesi. Sade **HTML, CSS ve JavaScript** ile yazıldı — derleme adımı yok, framework yok.

---

## 🇹🇷 İçeriği Nasıl Düzenlerim?

Tüm içerik tek bir dosyada: [`js/data.js`](js/data.js)

- İçindeki yazıları kendi bilgilerinle değiştir. Her alanın `tr` (Türkçe) ve `en` (İngilizce) hâli var.
- Profil fotoğrafını `assets/profile.jpg` olarak ekle (veya `data.js` içindeki `photo` yolunu değiştir).
- İstemediğin sosyal bağlantıların `url` değerini `""` yap.
- PDF CV'n varsa `resumeUrl` alanına linkini ekle; "CV'yi İndir" butonu otomatik görünür.

Siteyi yerel görmek için (Python kuruluysa):

```bash
python3 -m http.server 8000
```

Sonra tarayıcıda `http://localhost:8000` adresini aç.

## 🇬🇧 How to Edit the Content

All content lives in a single file: [`js/data.js`](js/data.js)

- Replace the texts with your own info. Each field has a `tr` (Turkish) and `en` (English) version.
- Add your profile photo as `assets/profile.jpg` (or change the `photo` path in `data.js`).
- Set the `url` of any social link you don't want to `""`.
- If you have a PDF resume, set `resumeUrl` to its link; the "Download CV" button appears automatically.

Run locally (if Python is installed):

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

---

## Features / Özellikler

- 🌍 TR / EN language toggle (remembered in the browser)
- 🌙 Light / dark theme toggle (follows system preference by default)
- 📱 Fully responsive (mobile menu)
- 📄 Sections: About, Experience, Education, Skills, Projects, Languages, Contact
- ⚡ No dependencies, no build step

## Deploy with GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)` folder, then **Save**.
5. Your site will be live at `https://<username>.github.io/<repo-name>/`.
