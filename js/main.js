// Day 19 — KH Kinetics
// Small, deliberate interactions. No framework or animation library.

const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");
const heroImage = document.querySelector("[data-parallax] img");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function setMenu(open) {
  if (!menuButton || !mobileNav) return;

  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  mobileNav.classList.toggle("is-open", open);
}

menuButton?.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

let ticking = false;

function updateOnScroll() {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);

  if (!reduceMotion && heroImage && window.innerWidth > 900) {
    const shift = Math.min(window.scrollY * 0.035, 18);
    heroImage.style.transform = `translateY(${shift}px) scale(1.035)`;
  }

  ticking = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateOnScroll);
  },
  { passive: true }
);

updateOnScroll();