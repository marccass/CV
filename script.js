document.addEventListener('DOMContentLoaded', (event) => {

    console.log("Portfoli dinàmic de Marc carregat! (v3 Estètic)");

    // --- Seleccionem els nous elements de control ---
    const themeToggleButton = document.getElementById('theme-toggle');
    const langButtons = {
        ca: document.getElementById('lang-ca'),
        es: document.getElementById('lang-es'),
        en: document.getElementById('lang-en'),
    };
    const themeIcon = themeToggleButton.querySelector('i');
    
    // NOU: Elements del menú mòbil
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // --- 1. LÒGICA DE TRADUCCIÓ (I18N) ---
    function setLanguage(lang) {

        // --- NOU: LÒGICA PER ACTUALITZAR EL BOTÓ DE DESCÀRREGA DE CV ---
        const cvPaths = {
            ca: 'Marc Cassanmagnago Somoza CV 2025 CATALÀ..pdf',
            es: 'Marc Cassanmagnago Somoza CV 2025 ESPAÑOL.pdf',
            en: 'Marc Cassanmagnago Somoza CV 2025 ENGLISH.pdf'
        };
        const downloadBtn = document.getElementById('download-cv-btn');
        
        if (downloadBtn && cvPaths[lang]) {
            downloadBtn.href = cvPaths[lang];
        }
        // --- FI DEL NOU CODI ---

        if (!translations[lang]) {
            console.error(`Idioma no trobat: ${lang}`);
            return;
        }

        // Guardem la preferència
        localStorage.setItem('lang', lang);
        
        // Actualitzem l'atribut 'lang' del HTML
        document.documentElement.lang = lang;

        // Actualitzem els botons
        Object.values(langButtons).forEach(btn => btn.classList.remove('active'));
        if (langButtons[lang]) {
            langButtons[lang].classList.add('active');
        }

        // Iterem per tots els elements que tenen 'data-key'
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;
            const translation = translations[lang][key];
            
            if (translation) {
                // Mirem si és un 'placeholder' o text normal
                if (element.placeholder !== undefined) {
                    element.placeholder = translation;
                } else {
                    // Usem innerHTML per permetre etiquetes com <strong>
                    element.innerHTML = translation;
                }
            }
        });
    }

    // Afegim 'click' listeners als botons d'idioma
    Object.keys(langButtons).forEach(lang => {
        if (langButtons[lang]) {
            langButtons[lang].addEventListener('click', () => setLanguage(lang));
        }
    });

    // --- 2. LÒGICA DE CANVI DE TEMA (DIA/NIT) ---
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Actualitzem la icona del botó
        if (theme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }

    function toggleTheme() {
        const currentTheme = localStorage.getItem('theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    }

    // Afegim 'click' listener al botó de tema
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme);
    }
    
    // --- 3. NOU: LÒGICA DEL MENÚ MÒBIL ---
    if (navToggle && navMenu) {
        // Obrir/tancar menú amb el botó
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('is-active');
            navToggle.classList.toggle('is-active');
        });

        // Tancar menú quan es fa clic a un enllaç
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('is-active');
                navToggle.classList.remove('is-active');
            });
        });
    }

    // --- 4. INICIALITZACIÓ (Carregar preferències) ---
    // Carreguem l'idioma guardat (o català per defecte)
    const savedLang = localStorage.getItem('lang') || 'ca';
    setLanguage(savedLang);

    // Carreguem el tema guardat (o fosc per defecte)
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);


    // --- 5. ANIMACIONS (Codi anterior) ---

    // Animació general d'entrada en fer scroll
    const animatedElements = document.querySelectorAll('.animat-entrada');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Canvi d'estil del Header en fer scroll
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Efecte 3D a les targetes de projecte
    const projectCards = document.querySelectorAll('.targeta-projecte');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;
            card.style.setProperty('--rotateX', `${rotateX}deg`);
            card.style.setProperty('--rotateY', `${rotateY}deg`);
        });
        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--rotateX', '0deg');
            card.style.setProperty('--rotateY', '0deg');
        });
    });

});