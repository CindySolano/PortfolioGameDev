export type Lang = 'en' | 'es'

export const t = {
  nav: {
    about: { en: 'About', es: 'Acerca de' },
    skills: { en: 'Skills', es: 'Habilidades' },
    portfolio: { en: 'Portfolio', es: 'Portafolio' },
    contact: { en: 'Contact', es: 'Contacto' },
  },
  hero: {
    greeting: { en: "Hello, I'm", es: 'Hola, soy' },
    roles: {
      en: ['Unity Developer', 'AR/VR Specialist', 'XR Creator', 'Game Developer'],
      es: ['Desarrolladora Unity', 'Especialista AR/VR', 'Creadora XR', 'Desarrolladora de Juegos'],
    },
    description: {
      en: 'Unity & AR/VR Developer with 3+ years crafting immersive experiences in gaming and interactive technologies.',
      es: 'Desarrolladora Unity & AR/VR con más de 3 años creando experiencias inmersivas en videojuegos y tecnologías interactivas.',
    },
    cta1: { en: 'View My Work', es: 'Ver mi trabajo' },
    cta2: { en: 'Get in Touch', es: 'Contáctame' },
  },
  about: {
    title: { en: 'About Me', es: 'Sobre mí' },
    p1: {
      en: 'I am a Unity Developer specialized in immersive technologies, with over 3 years of experience developing interactive applications, VR training simulators, and augmented reality experiences.',
      es: 'Soy desarrolladora Unity especializada en tecnologías inmersivas, con más de 3 años de experiencia desarrollando aplicaciones interactivas, simuladores de entrenamiento en VR y experiencias de realidad aumentada.',
    },
    p2: {
      en: 'My work focuses on building real-time 3D solutions that help companies communicate ideas, train teams, and showcase products through engaging and interactive environments.',
      es: 'Mi trabajo se enfoca en construir soluciones 3D en tiempo real que ayudan a las empresas a comunicar ideas, entrenar equipos y mostrar productos a través de entornos interactivos y atractivos.',
    },
    p3: {
      en: 'I enjoy solving technical challenges, optimizing performance for immersive devices, and creating intuitive interaction systems that enhance user experience.',
      es: 'Disfruto resolver desafíos técnicos, optimizar el rendimiento para dispositivos inmersivos y crear sistemas de interacción intuitivos que mejoren la experiencia del usuario.',
    },
    location: {
      en: 'Based in Bogotá, Colombia — available for remote work and freelance projects.',
      es: 'Ubicada en Bogotá, Colombia — disponible para trabajo remoto y proyectos freelance.',
    },
  },
  skills: {
    title: { en: 'Skills & Expertise', es: 'Habilidades y experiencia' },
    unity: {
      title: { en: 'Unity & C#', es: 'Unity y C#' },
      items: {
        en: [
          '3+ years developing with Unity and C#',
          'Real-time 3D simulations & gameplay systems',
          'Performance optimization for XR devices',
          'UI/UX design and interaction systems',
          'Shaders & visual effects (HLSL, Stencil Buffer)',
        ],
        es: [
          'Más de 3 años desarrollando con Unity y C#',
          'Simulaciones 3D en tiempo real y sistemas de gameplay',
          'Optimización de rendimiento para dispositivos XR',
          'Diseño UI/UX y sistemas de interacción',
          'Shaders y efectos visuales (HLSL, Stencil Buffer)',
        ],
      },
    },
    xr: {
      title: { en: 'AR / VR / MR Development', es: 'Desarrollo AR / VR / MR' },
      items: {
        en: [
          'AR: ZapWorks, Vuforia (PC), MyWebAR',
          'VR: AutoHand, Oculus SDK, SteamVR',
          'MR: HoloLens 2 with MRTK',
          'Meta Quest 3 & cross-platform XR',
          'Industrial & medical VR training simulators',
        ],
        es: [
          'AR: ZapWorks, Vuforia (PC), MyWebAR',
          'VR: AutoHand, Oculus SDK, SteamVR',
          'MR: HoloLens 2 con MRTK',
          'Meta Quest 3 y XR multiplataforma',
          'Simuladores VR industriales y médicos',
        ],
      },
    },
    multiplayer: {
      title: { en: 'Multiplayer & Interactive', es: 'Multijugador e interactivo' },
      items: {
        en: [
          'Real-time multiplayer with Photon PUN',
          'Virtual worlds & social experiences',
          'Live character performance with Rococo & Kinect',
          'Face & full-body tracking in real time',
          'Motion capture & character rig animation',
        ],
        es: [
          'Multijugador en tiempo real con Photon PUN',
          'Mundos virtuales y experiencias sociales',
          'Actuaciones de personaje en vivo con Rococo y Kinect',
          'Face tracking y body tracking en tiempo real',
          'Captura de movimiento y animación de character rig',
        ],
      },
    },
  },
  portfolio: {
    title: { en: 'Portfolio', es: 'Portafolio' },
    filterAll: { en: 'All', es: 'Todos' },
    filterAr: { en: 'AR', es: 'AR' },
    filterVr: { en: 'VR', es: 'VR' },
    filterGames: { en: 'Interactive', es: 'Interactivo' },
    cvEn: { en: 'Download CV (EN)', es: 'Descargar CV (EN)' },
    cvEs: { en: 'Download CV (ES)', es: 'Descargar CV (ES)' },
  },
  contact: {
    title: { en: 'Get in Touch', es: 'Contacto' },
    subtitle: {
      en: "Interested in working together? Let's connect!",
      es: '¿Interesada en trabajar juntos? ¡Conectemos!',
    },
  },
  footer: {
    copy: {
      en: '© 2025 Cindy Solano. All Rights Reserved.',
      es: '© 2025 Cindy Solano. Todos los derechos reservados.',
    },
  },
}

export function tr(key: { en: string; es: string }, lang: Lang): string {
  return key[lang]
}
