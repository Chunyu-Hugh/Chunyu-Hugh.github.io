# Design System — Modern Tech Minimal

> **Big Idea:** 「一份清晰的研究笔记 / 现代实验室」—— a clear research notebook, a modern laboratory.

A clean, precise, cool-toned visual language for an AI-for-Science researcher. Rigorous and quiet, engineered for legibility rather than decoration.

---

## 1. Visual Theme & Atmosphere

The interface sits on a near-white canvas (`#f8fafc`) that reads like clean lab paper — uncluttered, ordered, confident. The single dominant color is **deep indigo** (`#4f46e5`), used for links, active states, badges, and the pronunciation play button. A restrained **amber accent** (`#f59e0b`) is reserved for the highest-signal moments (awards, highlights) — one warm spark against the cool indigo.

**Key characteristics:**
- Near-white canvas (`#f8fafc`) evoking clean lab paper, not screens
- Deep indigo primary (`#4f46e5`) — one dominant color
- Amber accent (`#f59e0b`) — used sparingly, for awards/highlights only
- Cool neutral grays (Tailwind *slate* scale) — no warm undertones
- **Sora** (geometric sans) for headings, **Instrument Sans** (humanist sans) for body
- White cards, thin cool dividers, whisper-soft shadows

---

## 2. Color Palette & Roles

### Primary & Accent
| Role | Value | Notes |
|------|-------|-------|
| Primary / Indigo | `#4f46e5` | indigo-600 — links, active nav, badges, buttons |
| Hover | `#6366f1` | indigo-500 |
| Accent / Amber | `#f59e0b` | amber-500 — awards, highlights, the one warm spark |

### Surfaces & Text (light)
| Role | Value | Notes |
|------|-------|-------|
| Background | `#f8fafc` | slate-50 — near-white canvas |
| Card | `#ffffff` | pure white |
| Text | `#0f172a` | slate-900 — primary ink |
| Muted text | `#64748b` | slate-500 |
| Divider | `#e2e8f0` | slate-200 |
| Footer bg | `#0f172a` | slate-900 |
| Footer text | `#cbd5e1` | slate-300 |

### Dark Mode
| Role | Value | Notes |
|------|-------|-------|
| Background | `#0f172a` | slate-900 |
| Card / code | `#1e293b` | slate-800 |
| Text | `#e2e8f0` | slate-200 |
| Muted text | `#94a3b8` | slate-400 |
| Primary on dark | `#818cf8` | indigo-400 |
| Hover on dark | `#a5b4fc` | indigo-300 |
| Divider | `#334155` | slate-700 |
| Footer bg | `#020617` | slate-950 |

### Semantic (blockquotes tip/warning/danger)
- Tip / success: green `#42b983`
- Warning: yellow `#e7c000`
- Danger: red `#b53333`

---

## 3. Typography Rules

### Font families
- **Display / Headings:** `Sora` (fallback `-apple-system, system-ui, sans-serif`)
- **Body / UI:** `Instrument Sans` (fallback `-apple-system, system-ui, sans-serif`)

Both loaded from Google Fonts, weights 400–700.

### Hierarchy
| Role | Font | Weight | Line height |
|------|------|--------|-------------|
| Headings h1–h6 | Sora | 500 | 1.20 |
| Body | Instrument Sans | 400 | 1.60 |
| Blockquote | Sora (italic) | 400 | — |
| Card title | Sora | 500 | — |

### Principles
- **Sans for authority, sans for utility:** Sora's geometric letterforms carry headlines; Instrument Sans handles body with quiet legibility.
- **Single weight (500) for headings:** consistent and controlled — no bold shouting.
- **Relaxed body line-height (1.60):** book-like readability.
- **No negative letter-spacing on headings:** Sora keeps its natural tracking.

---

## 4. Component Stylings

- **Links:** indigo `#4f46e5`, hover shifts to `#6366f1`, underline on hover.
- **Active nav item:** indigo text, bolder weight.
- **Cards:** white bg, 1px divider `#e2e8f0`, 8px radius, whisper shadow `rgba(0,0,0,0.05) 0px 4px 24px`.
- **Publication badges (abbr):** indigo background, white text.
- **Pronunciation button:** circular, indigo bg `#4f46e5`, white triangle.
- **Footer:** dark ink bg `#0f172a`, light slate text `#cbd5e1`.
- **Award / highlight:** amber `#f59e0b`.

---

## 5. Layout Principles

- Container max-width: **930px** (readability-first).
- Generous whitespace, single-column editorial rhythm.
- Cards separated by thin dividers, not heavy shadows.

---

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | canvas, inline text |
| Contained | `1px solid #e2e8f0` | cards, sections |
| Whisper | `rgba(0,0,0,0.05) 0px 4px 24px` | elevated cards |

Depth comes from white-on-near-white layering and the dark footer — not heavy drop shadows.

---

## 7. Do's and Don'ts

### Do
- Use deep indigo `#4f46e5` as the single dominant color.
- Reserve amber `#f59e0b` for awards/highlights only.
- Use **Sora** for headings, **Instrument Sans** for body.
- Keep the canvas near-white `#f8fafc`.
- Use the Tailwind *slate* scale for all neutrals (cool, not warm).

### Don't
- Don't reintroduce warm/terracotta/parchment tones (previous theme).
- Don't use purple gradients or saturated multi-color schemes.
- Don't use Inter/Roboto/Arial as the body font.
- Don't use bold (700+) on headings — 500 is the ceiling.
- Don't use heavy drop shadows — whisper shadows only.

---

## 8. Responsive Behavior

- Standard Bootstrap breakpoints (al-folio): mobile single-column, desktop multi-column.
- Heading sizes scale down on mobile.
- Nav collapses to a hamburger on mobile.

---

## 9. Quick Reference

```css
:root {
  --global-bg-color: #f8fafc;         /* canvas */
  --global-card-bg-color: #ffffff;    /* cards */
  --global-text-color: #0f172a;       /* ink */
  --global-text-color-light: #64748b; /* muted */
  --global-theme-color: #4f46e5;      /* indigo */
  --global-hover-color: #6366f1;      /* indigo hover */
  --global-highlight-color: #f59e0b;  /* amber accent */
  --global-divider-color: #e2e8f0;    /* divider */
  --global-footer-bg-color: #0f172a;  /* dark footer */
}

html[data-theme="dark"] {
  --global-bg-color: #0f172a;
  --global-card-bg-color: #1e293b;
  --global-text-color: #e2e8f0;
  --global-theme-color: #818cf8;
  --global-hover-color: #a5b4fc;
  --global-divider-color: #334155;
}
```

**Fonts:** Sora (display) + Instrument Sans (body), 400–700.
