// KH Kinetics — small interactions only. No animation library needed.
const header = document.querySelector("[data-header]");
const menu = document.querySelector(".menu");
const mobileNav = document.querySelector(".mobile-nav");

function closeMenu() {
  if (!menu || !mobileNav) return;
  menu.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-label", "Open menu");
  mobileNav.classList.remove("open");
}

menu?.addEventListener("click", () => {
  const opening = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(opening));
  menu.setAttribute("aria-label", opening ? "Close menu" : "Open menu");
  mobileNav?.classList.toggle("open", opening);
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

const observer = new IntersectionObserver(
  (entries, revealObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));

let scheduled = false;
window.addEventListener("scroll", () => {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    header?.classList.toggle("scrolled", window.scrollY > 24);
    scheduled = false;
  });
}, { passive: true });