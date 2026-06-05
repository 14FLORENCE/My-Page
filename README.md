# Florence Sway — Portfolio

A modern, responsive one-page portfolio website for **Florence Sway**, a Software Engineer, Web Designer & Data Scientist. Built with plain HTML, CSS, and JavaScript — no frameworks, no build step.

🔗 **Live site:** [https://14florence.github.io/My-Page/](https://14florence.github.io/My-Page/)

---

## ✨ Features

- **Clean white & blue theme** with smooth, professional styling
- **Fully responsive** — adapts from large desktops down to mobile
- **Animated hero** with a typing role effect and a large top-anchored portrait
- **Scroll-reveal animations** as sections enter the viewport
- **Sticky navbar** with scroll progress bar, active-link highlighting, and a full-screen mobile menu
- **Projects grid** showcasing live work with screenshots and links
- **Filterable gallery** with a lightbox popup
- **Testimonials** and an experience **timeline**
- **Working contact form** powered by [Formspree](https://formspree.io/) (AJAX submit, no page reload)
- **Back-to-top** button

---

## 🛠️ Built With

- **HTML5** — semantic markup
- **CSS3** — custom properties (theming), grid & flexbox layouts
- **Vanilla JavaScript** — interactions (typing, scroll-spy, reveal, lightbox, menu, form)
- **Font Awesome** — icons (bundled locally in `assets/`)
- **Google Fonts** — Inter & Space Grotesk
- **Formspree** — contact form backend

---

## 📁 Project Structure

```text
My-Page/
├── index.html          # Single-page site markup
├── css/
│   └── modern.css      # Theme, layout, and responsive styles
├── js/
│   └── modern.js       # All interactions
├── img/                # Portraits, project screenshots, gallery
├── assets/             # Font Awesome
└── README.md
```

---

## 🚀 Getting Started

No build tools required — it's a static site.

1. Clone the repository:

   ```bash
   git clone https://github.com/14FLORENCE/My-Page.git
   ```

2. Open `index.html` directly in your browser, or serve it locally:

   ```bash
   # Python
   python -m http.server 8000
   ```

   Then visit `http://localhost:8000`.

---

## 🎨 Customization

- **Colors / theme:** edit the CSS custom properties in the `:root` block at the top of `css/modern.css`.
- **Section spacing:** adjust `.section` padding in `css/modern.css`.
- **Projects:** add or edit `<article class="project">` cards in the Projects section of `index.html`.
- **Typing roles:** update the `roles` array near the top of `js/modern.js`.
- **Contact form:** replace the Formspree endpoint in the `<form>` `action` attribute in `index.html`.

---

## 📬 Contact

Florence Sway

- 📧 Email: [florencesway@gmail.com](mailto:florencesway@gmail.com)
- 💼 LinkedIn: [florence-sway](https://linkedin.com/in/florence-sway-267b982b6/)
- 🐙 GitHub: [@14FLORENCE](https://github.com/14FLORENCE)
- 🐦 X: [@Sway_Florenc](https://x.com/Sway_Florenc)

---

© 2025 Florence Sway. All rights reserved.
