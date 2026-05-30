# Animation Design — K&Q Moving & Hauling Website

**Date:** 2026-05-29
**Status:** Approved

## Goal

Add smooth, consistent animations across the site: subtle scroll-reveal transitions for content sections and energetic micro-interactions on buttons/CTAs. Animations replay on every scroll pass (`once: false`).

---

## Approach

Use the existing `motion/react` (Framer Motion) library already installed. Create a shared `src/animations.ts` file with reusable variants imported by each component. No new dependencies needed.

---

## 1. Shared Variants — `src/animations.ts`

```ts
export const fadeUp       // fade in + slide up 24px, 0.5s ease-out
export const fadeIn       // opacity only, 0.5s ease-out
export const slideInLeft  // slide from -30px X, 0.6s ease-out
export const slideInRight // slide from +30px X, 0.6s ease-out
export const staggerContainer // staggerChildren: 0.1s, delayChildren: 0.05s
export const springTransition // { type: 'spring', stiffness: 400, damping: 20 }
```

All `whileInView` variants use `viewport={{ once: false, margin: '-60px' }}` so animations re-trigger on every scroll.

---

## 2. Scroll Reveals per Component

### HomeView.tsx
| Element | Variant |
|---|---|
| Section headers (h2 + subtitle) | `fadeUp` |
| Service/package card grid | `staggerContainer` wrapping `motion.div` children with `fadeUp` |
| Stats section (each number block) | `staggerContainer` + `fadeUp` per stat |
| Why-Choose-Us cards | `staggerContainer` + `fadeUp` per card |
| About section quote block + pillars | `fadeUp` (the left/right slide already exists — keep it) |
| Testimonial cards | `staggerContainer` + `fadeUp` |

### ServicesView.tsx
| Element | Variant |
|---|---|
| Header hero text | `fadeUp` |
| Package cards | `staggerContainer` + `fadeUp` per card |
| FAQ items | `staggerContainer` + `fadeUp` per row |

### GalleryView.tsx
| Element | Variant |
|---|---|
| Header hero text | `fadeUp` |
| Filter button bar | `fadeIn` on mount |
| Gallery grid (already animated) | Keep existing layout animation |

### BookingView.tsx
| Element | Variant |
|---|---|
| Header | `fadeUp` |
| Left form panel | `fadeUp` with `delay: 0.1` |
| Right info panel | `fadeUp` with `delay: 0.2` |

### Footer.tsx
| Element | Variant |
|---|---|
| Top contact strip (3 cols) | `staggerContainer` + `fadeUp` |
| Main footer grid (4 cols) | `staggerContainer` + `fadeUp` |

---

## 3. Button & CTA Micro-interactions

All `<button>` and CTA `<a>` elements become `<motion.button>` / `<motion.a>`.

| Button type | `whileHover` | `whileTap` | transition |
|---|---|---|---|
| Primary blue CTA | `scale: 1.04, y: -2` | `scale: 0.96` | spring |
| Secondary/outline | `scale: 1.02, y: -1` | `scale: 0.97` | spring |
| Nav links | `scale: 1.05` | `scale: 0.97` | spring |
| Social icons (hero) | `scale: 1.15` | `scale: 0.92` | spring |
| Footer social icons | `scale: 1.1` | `scale: 0.93` | spring |

---

## Files Modified

1. `src/animations.ts` — **new file**, shared variants
2. `src/components/HomeView.tsx` — wrap sections/cards/buttons
3. `src/components/ServicesView.tsx` — wrap cards/FAQ/buttons
4. `src/components/GalleryView.tsx` — wrap header/filter bar/buttons
5. `src/components/BookingView.tsx` — wrap panels/buttons
6. `src/components/Footer.tsx` — wrap columns/social icons
7. `src/components/Navbar.tsx` — wrap nav links/CTA button

---

## Non-goals

- No page transition changes (already handled by App.tsx AnimatePresence)
- No number count-up animation (would require extra logic, not requested)
- No parallax scrolling
- `motion/react` is already installed — no new dependencies
