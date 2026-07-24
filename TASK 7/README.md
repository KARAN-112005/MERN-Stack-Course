# Laundry Wallah — Responsive Page (Task 3)

## Problem Statement

Make the Laundry Wallah hero page responsive using CSS Media Queries so that the layout works correctly on desktop, tablet, and mobile screens.

---

## Files

| File | Description |
|------|-------------|
| `index.html` | HTML structure for Navbar and Hero Section |
| `style.css` | All styles including media queries for tablet and mobile |

---

## What Was Done

### Navbar
- Used **Flexbox** (`display: flex`) instead of `display: inline` for the navbar layout.
- **Tablet view:** Logo, links, username, and button text sizes are reduced.
- **Mobile view:** Nav links and the Book Now button are **hidden**. Only the **Logo** and **Username** remain visible.

### Hero Section
- **Desktop:** Text and image displayed side by side using Flexbox.
- **Tablet:** Font sizes and image size are reduced to fit smaller screens.
- **Mobile:** Layout switches to **`flex-direction: column`** — text appears above the image, as shown in the sample output.

---

## Breakpoints Used

| Breakpoint | Target |
|------------|--------|
| Default (> 1024px) | Desktop layout |
| `max-width: 1024px` | Tablet layout |
| `max-width: 600px` | Mobile layout |

---

## Key Concepts Used

- CSS Media Queries (`@media`)
- Flexbox (`display: flex`, `flex-direction`, `align-items`, `justify-content`)
- Responsive font sizing
- Conditional element hiding with `display: none`
