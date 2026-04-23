document.addEventListener('DOMContentLoaded', function () {

    // ========== LANGUAGE SYSTEM ==========
    var currentLang = 'en';

    var phrasesEN = [
        'Unity & AR/VR Developer',
        'Game Developer with C#',
        'XR Experience Creator'
    ];
    var phrasesES = [
        'Desarrolladora Unity & AR/VR',
        'Desarrolladora de videojuegos con C#',
        'Creadora de experiencias XR'
    ];

    var langToggle = document.getElementById('lang-toggle');
    var langFlags = langToggle.querySelectorAll('.lang-flag');

    function updateLangButton() {
        langFlags[0].classList.toggle('lang-active', currentLang === 'en');
        langFlags[1].classList.toggle('lang-active', currentLang === 'es');
    }

    function switchLanguage() {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        document.documentElement.lang = currentLang;
        updateLangButton();

        document.querySelectorAll('[data-en][data-es]').forEach(function (el) {
            var text = el.getAttribute('data-' + currentLang);
            // Preserve leading <i> icons (e.g. location pin)
            var icon = el.querySelector('i');
            if (icon) {
                var iconHTML = icon.outerHTML + ' ';
                el.innerHTML = iconHTML + text;
            } else if (el.children.length === 0) {
                el.textContent = text;
            } else {
                el.innerHTML = text;
            }
        });

        // Reset typing effect with new language
        phraseIndex = 0;
        charIndex = 0;
        isErasing = false;
        typedEl.textContent = '';
    }

    langToggle.addEventListener('click', switchLanguage);
    updateLangButton();

    // ========== VIDEO CONFIGURATION ==========
    // Map each portfolio item's data-video to its YouTube video ID.
    // Set `vertical: true` for YouTube Shorts (9:16) so the card switches to a vertical layout.
    var videos = {
        // AR Projects
        '3M_AR':                { id: '_tgqP-84Z8c', vertical: true },
        'CoralesARFinal':       { id: '_tsiIlKFvq4', vertical: true },
        'ManoARCompleto':       { id: 'C9S75TX11sI', vertical: true },
        'carreraObservacion':   { id: '-f_sJtM1JDM' },
        'VetancoAR':            { id: 'x3p_npXPdUs' },
        'BUG':                  { id: 'Zdf0iH4gXAM' },
        'OmenHP_AR':            { id: 'W3NZn2fW6ss' },
        'Mompox1_AR':           { id: 'ynhmhyYZe6Y', vertical: true },
        'Mompox2_AR':           { id: '_YFtmZNx9N4', vertical: true },
        'Nissan_AR':            { id: 'g2EH5UE0q3Y', vertical: true },
        'AbbotEnsure_AR':       { id: 'xcSaN8Jp7IA', vertical: true },
        // VR Projects
        'SaintGobainVR':        { id: 'pvm-32RJs80' },
        'ClinicaVR':            { id: 'WDxhbqCB5I8' },
        'CyberattackVR':        { id: 'vu5JcDuCEM0' },
        'SubestacionVR':        { id: 'P6lEuXZJQ7o' },
        'SubestacionICEP':      { id: 'LL9TJ3kgOm8' },
        'PWC360':               { id: 'uyzSekEEMA0' },
        'Kale2_VR':             { id: 'loM5CenFuLc' },
        'CotelVR':              { id: '9FNpAM3cpSs' },
        'VetancoVR':            { id: 'LoHnEk_PTdg' },
        'FiberglassVR':         { id: 'DDOLf16o4XM' },
        'ArthurHolmesShowroom': { id: 'vBy0aL1Z-ak' },
        'SaintGobainHololensMR':{ id: 'QeYUYMNGk78' },
        'ACUVUE_VR':            { id: 'l3ZZRgt-Buc' },
        // Games
        'ZonaConciertos':       { id: 'vzShtyPItuc' },
        'MundoVirtual':         { id: '-d4rEZX91z4' },
        'Ecopetrol':            { id: 'IkY8sYcdJy0' },
        'StencilDemo':          { id: '5LIlJrXyiBY' },
        'FlappyBird_Game':      { id: 'VCWH93IikY0', vertical: true }
    };

    // Inject a YouTube <iframe> into each portfolio item's video container.
    document.querySelectorAll('[data-video]').forEach(function (item) {
        var videoId = item.getAttribute('data-video');
        var info = videos[videoId];
        if (!info) return;

        var container = item.querySelector('.portfolio-video');
        if (!container) return;

        if (info.vertical) {
            container.classList.add('vertical');
        }

        var iframe = document.createElement('iframe');
        iframe.src = 'https://www.youtube-nocookie.com/embed/' + info.id + '?rel=0';
        iframe.title = 'YouTube video';
        iframe.loading = 'lazy';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.setAttribute('allowfullscreen', '');
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';

        container.appendChild(iframe);
    });

    // ========== TYPING EFFECT ==========
    var phraseIndex = 0;
    var charIndex = 0;
    var isErasing = false;
    var typedEl = document.getElementById('typed-text');
    var typingSpeed = 120;
    var erasingSpeed = 60;
    var pauseTime = 2000;

    function getPhrases() {
        return currentLang === 'es' ? phrasesES : phrasesEN;
    }

    function typeLoop() {
        var phrases = getPhrases();
        var current = phrases[phraseIndex % phrases.length];

        if (!isErasing) {
            typedEl.textContent = current.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === current.length) {
                isErasing = true;
                setTimeout(typeLoop, pauseTime);
                return;
            }
            setTimeout(typeLoop, typingSpeed);
        } else {
            typedEl.textContent = current.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isErasing = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(typeLoop, 400);
                return;
            }
            setTimeout(typeLoop, erasingSpeed);
        }
    }

    typeLoop();

    // ========== MOBILE NAV TOGGLE ==========
    var navToggle = document.getElementById('nav-toggle');
    var navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('open');
        });
    });

    // ========== NAVBAR SCROLL EFFECT ==========
    var navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 15, 26, 0.95)';
        } else {
            navbar.style.background = 'rgba(15, 15, 26, 0.85)';
        }
    });

    // ========== PORTFOLIO FILTER ==========
    var filterButtons = document.querySelectorAll('.filter-btn');
    var portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var filter = this.getAttribute('data-filter');
            if (!filter) return;

            filterButtons.forEach(function (b) { b.classList.remove('active'); });
            this.classList.add('active');

            portfolioItems.forEach(function (item) {
                var category = item.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    // ========== SCROLL FADE-IN ANIMATION ==========
    var fadeElements = document.querySelectorAll(
        '.skill-card, .portfolio-item, .contact-card, .about-content'
    );

    fadeElements.forEach(function (el) {
        el.classList.add('fade-in');
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(function (el) {
        observer.observe(el);
    });

    // ========== SMOOTH SCROLL FOR NAV LINKS ==========
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ========== PARTICLE SYSTEM ==========
    var particlesContainer = document.getElementById('particles');
    var colors = [
        'rgba(233, 69, 96, ',   // primary red
        'rgba(83, 52, 131, ',    // purple
        'rgba(15, 52, 96, ',     // blue accent
        'rgba(234, 234, 234, '   // white-ish
    ];

    function createParticle() {
        var particle = document.createElement('div');
        particle.className = 'particle';

        var size = Math.random() * 4 + 2;
        var color = colors[Math.floor(Math.random() * colors.length)];
        var opacity = Math.random() * 0.4 + 0.1;
        var duration = Math.random() * 8 + 6;
        var x = Math.random() * 100;
        var driftY = -(Math.random() * 150 + 80);

        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = x + '%';
        particle.style.bottom = '-10px';
        particle.style.background = color + opacity + ')';
        particle.style.setProperty('--opacity', opacity);
        particle.style.setProperty('--drift-y', driftY + 'px');
        particle.style.animationDuration = duration + 's';
        particle.style.boxShadow = '0 0 ' + (size * 2) + 'px ' + color + (opacity * 0.5) + ')';

        particlesContainer.appendChild(particle);

        setTimeout(function () {
            particle.remove();
        }, duration * 1000);
    }

    // Spawn particles at intervals
    setInterval(createParticle, 300);

    // Create initial batch
    for (var i = 0; i < 20; i++) {
        setTimeout(createParticle, i * 150);
    }
});
