/* ═══════════════════════════════════════════════
   PORTFOLIO — script.js
   ═══════════════════════════════════════════════ */

// ── Footer year ──────────────────────────────
document.getElementById("year").textContent = new Date().getFullYear();

// ── Navbar scroll state ───────────────────────
const nav = document.getElementById("nav");
window.addEventListener(
  "scroll",
  () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  },
  { passive: true },
);

// ── Hamburger menu ────────────────────────────
const burger = document.getElementById("burger");
const overlay = document.getElementById("navOverlay");
const navLinks = document.querySelectorAll(".nav__overlay .nav__link");

function toggleMenu(open) {
  burger.classList.toggle("open", open);
  overlay.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", String(open));
  document.body.style.overflow = open ? "hidden" : "";
}

burger.addEventListener("click", () => {
  const isOpen = overlay.classList.contains("open");
  toggleMenu(!isOpen);
});

// Close on link click
navLinks.forEach((link) => {
  link.addEventListener("click", () => toggleMenu(false));
});

// Close on overlay background click
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) toggleMenu(false);
});

// Close on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") toggleMenu(false);
});

// ── Fade-up on scroll ─────────────────────────
const fadeEls = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger within groups
        const delay = entry.target.style.animationDelay || 0;
        setTimeout(
          () => {
            entry.target.classList.add("visible");
          },
          delay ? parseFloat(delay) * 1000 : 0,
        );
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
);

// Stagger cards within the same grid
document.querySelectorAll(".projects__grid").forEach((grid) => {
  const cards = grid.querySelectorAll(".project-card");
  cards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.08}s`;
  });
});

fadeEls.forEach((el) => observer.observe(el));

// ── Hero elements animate on load ─────────────
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".hero .fade-up").forEach((el, i) => {
    setTimeout(() => el.classList.add("visible"), 200 + i * 120);
  });
});

// ── Smooth active nav link highlight ──────────
const sections = document.querySelectorAll("section[id]");
const navLinkDesktop = document.querySelectorAll(".nav__links .nav__link");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinkDesktop.forEach((link) => {
          link.style.color =
            link.getAttribute("href") === `#${id}` ? "var(--ink)" : "";
        });
      }
    });
  },
  { threshold: 0.4 },
);

sections.forEach((s) => sectionObserver.observe(s));

// ── Language toggle (EN / SV) ─────────────────
const translations = {
  sv: {
    // Nav
    "nav.about": "Om mig",
    "nav.projects": "Projekt",
    "nav.skills": "Kompetenser",
    "nav.contact": "Kontakt",
    // Hero
    "hero.tag": "UX Design · Grafisk Design · Webbutveckling",
    "hero.title": "",
    "hero.sub":
      "Jag skapar digitala upplevelser som är genomtänkta, tillgängliga och vackra — med rötter i grafisk design och webbutveckling, och fokus på UX.",
    "hero.cta.projects": "Se mina projekt",
    "hero.cta.contact": "Kontakta mig",
    "hero.scroll": "Scrolla",
    // About
    "about.tag": "Om mig",
    "about.title": "Design med syfte,",
    "about.title.em": "kod med precision",
    "about.p1":
      "[Skriv en kort introduktion om dig själv här. Berätta vem du är och vad som driver dig.]",
    "about.p2":
      "Jag studerar för närvarande masterprogrammet i UX Design, och kombinerar det med min bakgrund inom grafisk design och webbutveckling för att skapa helhetsupplevelser — från idé till färdig produkt.",
    "about.stat.projects": "Projekt",
    "about.stat.years": "Års erfarenhet",
    "about.stat.edu": "Utbildningar",
    "about.cta": "Låt oss prata",
    // Projects
    "projects.tag": "Projekt",
    "projects.title": "Vad jag har byggt",
    "projects.desc":
      "Ett urval av projekt inom UX, grafisk design och webbutveckling.",
    "filter.all": "Alla",
    "filter.ux": "UX Design",
    "filter.graphic": "Grafisk Design",
    "filter.web": "Webbutveckling",
    "project.view": "Se projekt →",
    // Skills
    "skills.tag": "Kompetenser",
    "skills.title": "Vad jag kan",
    // Contact
    "contact.tag": "Kontakt",
    "contact.title": "Låt oss skapa",
    "contact.title.em": "något bra tillsammans",
    "contact.desc":
      "Öppen för uppdrag, samarbeten och spännande möjligheter. Hör av dig så pratar vi!",
    "contact.cv": "Ladda ner CV",
    // Footer
    "footer.text": "",
    "footer.back": "Tillbaka till toppen ↑",
  },
  en: {
    // Nav
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    // Hero
    "hero.tag": "UX Design · Graphic Design · Web Development",
    "hero.title": "",
    "hero.sub":
      "",
    "hero.cta.projects": "See my projects",
    "hero.cta.contact": "Get in touch",
    "hero.scroll": "Scroll",
    // About
    "about.tag": "About me",
    "about.title": "Design with purpose,",
    "about.title.em": "code with precision",
    "about.p1":
      "[Write a short introduction about yourself here. Tell who you are and what drives you.]",
    "about.p2":
      "I'm currently studying a Master's in UX Design, combining it with my background in graphic design and web development to create end-to-end experiences — from idea to finished product.",
    "about.stat.projects": "Projects",
    "about.stat.years": "Years experience",
    "about.stat.edu": "Educations",
    "about.cta": "Let's talk",
    // Projects
    "projects.tag": "Projects",
    "projects.title": "What I've built",
    "projects.desc":
      "A selection of projects in UX, graphic design and web development.",
    "filter.all": "All",
    "filter.ux": "UX Design",
    "filter.graphic": "Graphic Design",
    "filter.web": "Web Development",
    "project.view": "View project →",
    // Skills
    "skills.tag": "Skills",
    "skills.title": "What I do",
    // Contact
    "contact.tag": "Contact",
    "contact.title": "Let's create",
    "contact.title.em": "something great together",
    "contact.desc":
      "Open to commissions, collaborations and exciting opportunities. Reach out and let's talk!",
    "contact.cv": "Download CV",
    // Footer
    "footer.text": "",
    "footer.back": "Back to top ↑",
  },
};

let currentLang = localStorage.getItem("lang") || "sv";

function applyLang(lang) {
  const t = translations[lang];
  document.documentElement.lang = lang;

  // Helper
  const set = (sel, key) => {
    const el = document.querySelector(sel);
    if (el) el.textContent = t[key];
  };

  // Nav
  document
    .querySelectorAll(".nav__link, .nav__overlay .nav__link")
    .forEach((link) => {
      const href = link.getAttribute("href");
      if (href === "about.html") link.textContent = t["nav.about"];
      if (href === "#projects") link.textContent = t["nav.projects"];
      if (href === "#skills") link.textContent = t["nav.skills"];
      if (href === "#contact") link.textContent = t["nav.contact"];
    });

  // Hero
set(".hero__tag", "hero.tag");
set(".hero__disciplines", "hero.tag");
  set(".hero__scroll-indicator span", "hero.scroll");
  const heroTitle = document.querySelector(".hero__title");
  if (heroTitle)
    heroTitle.innerHTML = `${t["hero.title"]}<br /><em>Amela Music</em>`;
  set(".hero__sub", "hero.sub");
  const heroCtas = document.querySelectorAll(".hero__cta .btn");
  if (heroCtas[0]) heroCtas[0].textContent = t["hero.cta.projects"];
  if (heroCtas[1]) heroCtas[1].textContent = t["hero.cta.contact"];

  // About
  set(".about .section__tag", "about.tag");
  const aboutTitle = document.querySelector(".about .section__title");
  if (aboutTitle)
    aboutTitle.innerHTML = `${t["about.title"]}<br /><em>${t["about.title.em"]}</em>`;
  const aboutPs = document.querySelectorAll(".about__text p");
  if (aboutPs[0]) aboutPs[0].textContent = t["about.p1"];
  if (aboutPs[1]) aboutPs[1].textContent = t["about.p2"];
  const stats = document.querySelectorAll(".about__stat span");
  if (stats[0]) stats[0].textContent = t["about.stat.projects"];
  if (stats[1]) stats[1].textContent = t["about.stat.years"];
  if (stats[2]) stats[2].textContent = t["about.stat.edu"];
  set(".about .btn", "about.cta");

  // Projects
  set(".projects .section__tag", "projects.tag");
  set(".projects .section__title", "projects.title");
  set(".projects .section__desc", "projects.desc");
  const filterBtnsAll = document.querySelectorAll(".filter__btn");
  filterBtnsAll.forEach((btn) => {
    const f = btn.dataset.filter;
    if (f === "all") btn.textContent = t["filter.all"];
    if (f === "ux") btn.textContent = t["filter.ux"];
    if (f === "graphic") btn.textContent = t["filter.graphic"];
    if (f === "web") btn.textContent = t["filter.web"];
  });
  document.querySelectorAll(".project-card__view").forEach((el) => {
    el.textContent = t["project.view"];
  });

  // Skills
  set(".skills .section__tag", "skills.tag");
  set(".skills .section__title", "skills.title");

  // Contact
  set(".contact .section__tag", "contact.tag");
  const contactTitle = document.querySelector(".contact .section__title");
  if (contactTitle)
    contactTitle.innerHTML = `${t["contact.title"]}<br /><em>${t["contact.title.em"]}</em>`;
  set(".contact__desc", "contact.desc");
  set(".contact .btn", "contact.cv");

  // Footer
  set(".footer__back a", "footer.back");
  const footerP = document.querySelector(".footer .container p");
  if (footerP)
    footerP.innerHTML = `© ${new Date().getFullYear()} Amela Music. ${t["footer.text"]}`;

  // Update toggle button
  const toggle = document.getElementById("langToggle");
  if (toggle) toggle.textContent = lang === "sv" ? "EN" : "SV";

  currentLang = lang;
  localStorage.setItem("lang", lang);
}

// Init
// Init — only run on index page
if (!window.__projectPage) {
  applyLang(currentLang);

  document.getElementById('langToggle')?.addEventListener('click', () => {
    applyLang(currentLang === 'sv' ? 'en' : 'sv');
  });
}
