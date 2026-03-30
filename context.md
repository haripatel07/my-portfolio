# Portfolio Codebase Context

## Overview
This document provides immediate context for any AI coding agent working on this repository. The project is a React single-page application built with Vite and Tailwind CSS v4. Recent development completely redesigned the application to feature a highly unique **"Hybrid Aesthetic"** that blends elegant "Editorial Tech" with immersive "Cyberpunk / Tech-Noir" design elements, alongside full Light/Dark mode capabilities.

## Tech Stack
- **Core Framework**: React 19 (via Vite)
- **Styling**: Tailwind CSS v4
- **Icons**: `react-icons`

## Design System: The Hybrid Aesthetic
The UI seamlessly combines two distinct design languages:
1. **Editorial Tech**: Utilizes massive Serif headers (`Playfair Display`), clean Sans-Serif body text (`Inter`), floating glassmorphic wrappers, and structured Bento Grid layouts.
2. **Cyberpunk / Tech-Noir**: Utilizes technical Monospace labels (`JetBrains Mono`), glowing radial background gradients, and pill-shaped animated status badges (e.g., `[ System Online ]`).
3. **Dynamic Themes (Light & Dark Mode)**:
   - Controlled via Tailwind CSS variables mapped in `src/index.css` (`@theme` and `:root` / `.dark`).
   - **Dark Mode**: Deep Midnight Black (`#05050A`) background with glowing Emerald Green (`#34D399`, `accent-main`) and Vivid Cyan (`#00F9FF`, `accent-sub`) accents.
   - **Light Mode**: Paper White (`#ffffff`) background with stark black text, retaining the vibrant Emerald and Cyan for hover states and subtle glows.
   - Toggled via `src/Ui/ThemeToggle.jsx`, which modifies the `document.documentElement` class list (`.dark`) and saves to `localStorage`.

## Application Architecture & Completed Sections
- **Global `App.jsx`**: Manages the root layout, initialization state (`LoadingScreenAnimation`), global `isDarkMode` state, and renders dynamic background ambient glowing orbs.
- **`src/Ui/Navbar.jsx` & `MobileMenu.jsx`**: A floating, classmorphic dynamic island housing navigation links, the Theme Toggle, and responsive hamburger menu.
- **`src/sections/Home.jsx`**: Hero section with massive responsive typography, a grayscale-to-color hover profile sphere, and a cyberpunk pulsing badge.
- **`src/sections/About.jsx`**: A modern Bento-box grid containing "Intro", "Tech Stack", "Education", and interactive social "Profiles". Elements intelligently invert borders and backgrounds based on the theme.
- **`src/sections/Projects.jsx`**: An immersive layout rendering interleaved (left/right alternating) project blocks. Features massive, faded numeric sequencing (`01`, `02`) behind the content and technical `[ System.Work ]` tags.
- **`src/sections/Certificates.jsx`**: A clean grid of glassmorphic cards highlighting achievements with subtle colored hover rings.
- **`src/sections/Contact.jsx`**: A polished form securely connected to `formsubmit.co`, matching the overarching glassmorphic container logic.

## Guidelines for Future Agents
- **Maintain Theme Variables**: Do not hardcode utility classes like `text-white`, `bg-black`, or `border-gray-800`. Always use the defined CSS variables (e.g., `text-text-main`, `text-text-muted`, `bg-bg-off`, `border-border-subtle`) to ensure the Light/Dark mode hybrid theme continues to map correctly.
- **Aesthetic Consistency**: When adding new sections, adhere to the established shape language (rounded-2xl containers, backdrop-blur-md, and subtle border outlines).
- **Current State**: The application builds flawlessly (`npm run build` verified) and is visually polished for production.
