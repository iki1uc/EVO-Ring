# CACHE — Axiom‑2 · NC‑Fehlerstation

CACHE ist die zweite Hardware‑Station im Axiom‑System:

∞ = GPU  
1 = RAM  
2 = CACHE  
4 = X4  
5 = CHDSK  
12 = ROM  

CACHE ist die NC‑Fehlerstation und bewertet Eingaben nach:

- MISS
- FAIL
- RDY

## Module

CACHE besteht aus fünf funktionalen Modulen:

- CACHE.core.js   → MISS/FAIL/RDY + SCORE + MODE
- CACHE.pipe.js   → IN / XI / END Weiterleitung
- CACHE.score.js  → best() / offer()
- cache.mind.js   → Meta‑Ebene
- CACHE.result.json → aktueller Status

## Geometrie

CACHE nutzt eine 81‑Orbit‑Geometrie zur Visualisierung der Fehlerzustände.

## Modi

CACHE unterstützt vier Modi:

- RAW
- 6e
- 6d
- 12e

## Pipeline

CACHE → X4 → CHDSK → ROM
