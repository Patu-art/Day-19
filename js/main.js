// Day 19 — KH Kinetics Autocare
// Small, business-specific interactions. No framework required for this build.

const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");
const diagnosticReadout = document.querySelector(".diagnostic-readout");
const readoutTitle = document.querySelector("[data-readout-title]");
const readoutCopy = document.querySelector("[data-readout-copy]");
const statusLabel = document.querySelector("[data-status]");
const diagnosticControls = [...document.querySelectorAll("[data-zone]")];

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const diagnoses = {
  engine: {
    title: "Engine / power",
    copy:
      "Describe loss of power, rough running, fluid concerns or unusual engine behaviour. KH lists servicing, troubleshooting, diagnostics and repair among its workshop work.",
  },
  brake: {
    title: "Brakes / handling",
    copy:
      "Start here for braking, steering, suspension or undercarriage concerns such as pads, rotors, lower arms, absorbers, bearings or steering-related work.",
  },
  aircon: {
    title: "Air-conditioning",
    copy:
      "Tell the workshop whether cooling is weak, inconsistent or absent. KH lists air-con maintenance and flushing among its services.",
  },
  electric: {
    title: "Electrical",
    copy:
      "Useful starting point for battery, alternator, selected lighting or other basic electrical concerns.",
  },
  noise: {
    title: "Unusual noise",
    copy:
      "Don't guess the part. Describe when the sound happens—braking, turning, accelerating, idling or over bumps—and let inspection narrow it down.",
  },
  warning: {
    title: "Warning light",
    copy:
      "Note which warning appeared and when. A diagnostic check can be the sensible first step before replacing anything.",
  },
  service: {
    title: "Routine service",
    copy:
      "For scheduled maintenance, start with your car model, mileage and what was done at the previous service.",
  },
  unsure: {
    title: "Not sure / check it",
    copy:
      "That's enough information to start. Explain what changed in the way the car feels, sounds or behaves and ask for an inspection.",
  },
};

function setMenu(open) {
  if (!menuButton || !mobileNav) return;

  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation"
  );
  mobileNav.classList.toggle("is-open", open);
}

function selectDiagnosis(control) {
  const diagnosis = diagnoses[control.dataset.zone];
  if (!diagnosis || !readoutTitle || !readoutCopy || !statusLabel) return;

  diagnosticControls.forEach((item) => {
    const selected = item === control;
    item.classList.toggle("is-active", selected);
    item.setAttribute("aria-pressed", String(selected));
  });

  readoutTitle.textContent = diagnosis.title;
  readoutCopy.textContent = diagnosis.copy;
  statusLabel.textContent = `STARTING POINT / ${diagnosis.title.toUpperCase()}`;

  diagnosticReadout?.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "nearest",
  });
}

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  setMenu(!isOpen);
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

window.addEventListener(
  "resize",
  () => {
    if (window.innerWidth > 900) setMenu(false);
  },
  { passive: true }
);

diagnosticControls.forEach((control) => {
  control.setAttribute("aria-pressed", "false");
  control.addEventListener("click", () => selectDiagnosis(control));
});

window.addEventListener(
  "scroll",
  () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 20);
  },
  { passive: true }
);
