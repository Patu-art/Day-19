const header=document.querySelector("[data-header]");const menu=document.querySelector(".menu-button");const mobile=document.querySelector(".mobile-nav");
function setMenu(open){if(!menu||!mobile)return;menu.setAttribute("aria-expanded",String(open));mobile.classList.toggle("is-open",open)}
menu?.addEventListener("click",()=>setMenu(menu.getAttribute("aria-expanded")!=="true"));mobile?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>setMenu(false)));

const diagnoses={
 engine:{title:"Engine / power",copy:"Describe loss of power, rough running, fluid concerns or unusual engine behaviour. KH lists servicing, troubleshooting, diagnostics and repair among its workshop work."},
 brake:{title:"Brakes / handling",copy:"Start here for braking, steering, suspension or undercarriage concerns such as pads, rotors, lower arms, absorbers, bearings or steering-related work."},
 aircon:{title:"Air-conditioning",copy:"Tell the workshop whether cooling is weak, inconsistent or absent. KH lists air-con maintenance and flushing among its services."},
 electric:{title:"Electrical",copy:"Useful starting point for battery, alternator, selected lighting or other basic electrical concerns."},
 noise:{title:"Unusual noise",copy:"Don't guess the part. Describe when the sound happens—braking, turning, accelerating, idling or over bumps—and let inspection narrow it down."},
 warning:{title:"Warning light",copy:"Note which warning appeared and when. A diagnostic check can be the sensible first step before replacing anything."},
 service:{title:"Routine service",copy:"For scheduled maintenance, start with your car model, mileage and what was done at the previous service."},
 unsure:{title:"Not sure / check it",copy:"That's enough information to start. Explain what changed in the way the car feels, sounds or behaves and ask for an inspection."}
};
const controls=[...document.querySelectorAll("[data-zone]")];const title=document.querySelector("[data-readout-title]");const copy=document.querySelector("[data-readout-copy]");const status=document.querySelector("[data-status]");
controls.forEach(button=>button.addEventListener("click",()=>{const key=button.dataset.zone;const item=diagnoses[key];if(!item)return;controls.forEach(x=>x.classList.toggle("is-active",x===button));title.textContent=item.title;copy.textContent=item.copy;status.textContent="STARTING POINT / "+item.title.toUpperCase();document.querySelector(".diagnostic-readout")?.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"nearest"})}));
window.addEventListener("scroll",()=>header?.classList.toggle("is-scrolled",scrollY>20),{passive:true});
