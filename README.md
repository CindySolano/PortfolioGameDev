# Portfolio - Cindy Solano

Personal portfolio showcasing my work as a **Unity & AR/VR Developer**. Built as a modern single-page application with React, TypeScript, and Vite.

## About

I'm a Unity developer and XR experience creator based in Bogotá, Colombia, with 3+ years of experience. This portfolio showcases 29 projects across three categories:

- **AR (11 projects):** Commercial activations, interactive invitations, and web AR experiences — built with ZapWorks, Vuforia (PC), and MyWebAR
- **VR (13 projects):** Training simulators, industrial simulations, and 360° experiences — built with AutoHand, Oculus SDK, SteamVR, and MRTK / HoloLens 2
- **Interactive (5 projects):** Real-time multiplayer experiences, live character performances, and tech demos — built with Photon PUN, Rococo, and Kinect

## Features

- Bilingual interface (English / Spanish) with a sliding pill language toggle
- Animated 3D project carousel with perspective tilt on hover
- Project modal with YouTube video (autoplay, privacy-enhanced) + tech chips
- Custom SVG icons per project with color-matched glow effects
- Category filter tabs (All / AR / VR / Interactive)
- Downloadable CVs in English and Spanish
- Custom cursor with contextual labels
- Starfield particle background (Canvas 2D)
- Scroll-driven entrance animations with GSAP + ScrollTrigger
- Smooth scroll via Lenis
- Skills section with accurate XR tooling (ZapWorks, Vuforia, Oculus SDK, AutoHand, SteamVR, MRTK, Photon, Rococo, Kinect)
- Contact section with social links
- Fully responsive layout

## Tech stack

- **Framework:** Vite 5 + React 18 + TypeScript
- **Styling:** Tailwind CSS 4
- **Animation:** Framer Motion, GSAP + ScrollTrigger
- **Smooth scroll:** Lenis
- **Background:** Canvas 2D StarField (position: fixed)
- **Fonts:** DM Sans, Outfit (display)
- **Video:** YouTube `youtube-nocookie.com` embeds (privacy-enhanced, autoplay)

## Project structure

```
src/
├── components/
│   ├── Navbar.tsx          Navigation + EN/ES language slider
│   ├── Hero.tsx            Intro section with typing effect
│   ├── About.tsx           About me section
│   ├── Skills.tsx          Skills cards (Unity, AR/VR/MR, Multiplayer)
│   ├── ProjectCarousel.tsx Carousel with filter tabs + modal trigger
│   ├── ProjectCard.tsx     Individual card with tilt + SVG icon
│   ├── ProjectModal.tsx    Full-screen overlay: video + description + chips
│   ├── ProjectIcons.tsx    30 custom SVG icon components
│   ├── MagneticButton.tsx  Hover-magnetic CTA button
│   ├── StarField.tsx       Canvas 2D particle background
│   └── CustomCursor.tsx    Custom cursor with data-cursor labels
├── data/
│   ├── projects.ts         29 projects (title, desc, tech, icon, YouTube ID, colors)
│   └── i18n.ts             All bilingual strings
├── styles/
│   └── globals.css         CSS variables, cursor overrides, utilities
└── App.tsx                 Root: lang state, Lenis init, section layout
```

## Running locally

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

## Building for production

```bash
npm run build
npm run preview
```

## Deployment

Deployed on Vercel. Configure the project with **Root Directory: `.`** (the repo root, where `vite.config.ts` lives).

## Contact

**Cindy Solano** — Unity & AR/VR Developer based in Bogotá, Colombia.
Available for remote work and freelance projects. See the contact section on the live site for links.
