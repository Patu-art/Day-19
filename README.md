# Day 19 — KH Kinetics Autocare

Frontend concept for **KH Kinetics Autocare**, a night-friendly workshop in Kaki Bukit, Singapore.

## Rebuild direction

Day 19 deliberately avoids the usual automotive-template formula of a stock sports car, red/black gradients, service cards and decorative motion.

The core interface starts from the **car and the driver's symptom**. Visitors can select a car area or a plain-language symptom such as unusual noise, a warning light, routine servicing or simply “not sure”. The page then gives a sensible category to discuss with the workshop.

This is an intake aid, **not an online diagnosis**. The actual cause still requires workshop inspection.

## Why this fits KH

Public KH Kinetics listings cover servicing and preventive maintenance, diagnostics/troubleshooting, brakes and suspension, air-con work, batteries/electrical items, parts replacement and cleaning/decarbon services. Public customer feedback repeatedly praises clear explanations, responsiveness, fair/transparent pricing and a lack of hard selling. Late weekday availability is also a recurring differentiator.

The website therefore emphasizes:

- start with the symptom, not mechanic jargon
- inspect before assuming the repair
- explain clearly
- no unnecessary replacement language
- after-office-hours convenience
- direct phone contact

## Visual system

- charcoal workshop environment
- off-white inspection-board surfaces
- structural workshop blue
- restrained cyan signal accent
- condensed mechanical typography
- schematic car drawing built with CSS rather than a generic stock supercar
- genuine workshop images where available
- no animation library, WebGL or heavy 3D

## Performance

Plain semantic HTML, CSS and small vanilla JavaScript only. The interactive diagnostic board uses buttons and text state changes, so the main experience remains lightweight on older phones and PCs.

## Project

Live: https://patu-art.github.io/Day-19/

**100 Days · 100 Local Business Websites — Day 19**
