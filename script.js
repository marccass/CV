document.addEventListener('DOMContentLoaded', (event) => {

    console.log("Portfoli dinàmic de Marc carregat! (v5 Redisseny Professional - Mòbil Optimitzat)");

    // --- Seleccionem els elements de control ---
    const themeToggleButton = document.getElementById('theme-toggle');
    const langButtons = {
        ca: document.getElementById('lang-ca'),
        es: document.getElementById('lang-es'),
        en: document.getElementById('lang-en'),
    };
    const themeIcon = themeToggleButton.querySelector('i');
    
    // Elements del menú mòbil
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const menuOverlay = document.getElementById('menu-overlay');

    // --- 1. LÒGICA DE TRADUCCIÓ (I18N) ---
    function setLanguage(lang) {

        // Actualitzar el botó de descàrrega de CV
        const cvPaths = {
            ca: 'MarcCassanmagnagoSomozaCV2025CATALA.pdf',
            es: 'MarcCassanmagnagoSomozaCV2025ESPANOL.pdf',
            en: 'MarcCassanmagnagoSomozaCV2025ENGLISH.pdf'
        };
        const downloadBtn = document.getElementById('download-cv-btn');
        
        if (downloadBtn && cvPaths[lang]) {
            downloadBtn.href = cvPaths[lang];
        }

        // Validació de l'idioma
        if (!translations[lang]) {
            console.error(`Idioma no trobat: ${lang}`);
            lang = 'ca'; // Fallback a català
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
    
    // --- 3. LÒGICA DEL MENÚ MÒBIL (MILLORADA) ---
    if (navToggle && navMenu) {
        // Obrir/tancar menú amb el botó
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('is-active');
            navToggle.classList.toggle('is-active');
            menuOverlay.classList.toggle('is-active');
            
            // Prevenir scroll del body quan el menú està obert
            if (navMenu.classList.contains('is-active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Tancar menú quan es fa clic a un enllaç
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('is-active');
                navToggle.classList.remove('is-active');
                menuOverlay.classList.remove('is-active');
                document.body.style.overflow = '';
            });
        });

        // Tancar menú quan es fa clic a l'overlay
        if (menuOverlay) {
            menuOverlay.addEventListener('click', () => {
                navMenu.classList.remove('is-active');
                navToggle.classList.remove('is-active');
                menuOverlay.classList.remove('is-active');
                document.body.style.overflow = '';
            });
        }

        // Tancar menú amb la tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('is-active')) {
                navMenu.classList.remove('is-active');
                navToggle.classList.remove('is-active');
                menuOverlay.classList.remove('is-active');
                document.body.style.overflow = '';
            }
        });
    }

    // --- 4. INICIALITZACIÓ (Carregar preferències) ---
    // Carreguem l'idioma guardat (o català per defecte)
    const savedLang = localStorage.getItem('lang') || 'ca';
    setLanguage(savedLang);

    // Carreguem el tema guardat (o fosc per defecte)
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);


    // --- 5. ANIMACIONS EN FER SCROLL ---

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

    // --- 6. INDICADOR DE SECCIÓ ACTIVA A LA NAVEGACIÓ ---
    const sections = document.querySelectorAll('section[id], header[id]');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => sectionObserver.observe(section));

    // --- 7. EFECTE 3D A LES TARGETES DE PROJECTE (NOMÉS DESKTOP) ---
    const projectCards = document.querySelectorAll('.targeta-projecte');
    
    // Detectar si és un dispositiu tàctil
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    
    if (!isTouchDevice) {
        // Només aplicar efecte 3D en dispositius no tàctils (desktop)
        projectCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -5; // Rotació més subtil
                const rotateY = ((x - centerX) / centerX) * 5;
                card.style.setProperty('--rotateX', `${rotateX}deg`);
                card.style.setProperty('--rotateY', `${rotateY}deg`);
            });
            card.addEventListener('mouseleave', () => {
                card.style.setProperty('--rotateX', '0deg');
                card.style.setProperty('--rotateY', '0deg');
            });
        });
    }

    // --- 8. BOTÓ "TORNAR A DALT" ---
    const scrollToTopBtn = document.getElementById('scroll-to-top');

    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- 9. VALIDACIÓ I GESTIÓ DEL FORMULARI DE CONTACTE ---
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.querySelector('span').textContent;
            
            // Desactivar botó i mostrar estat de càrrega
            submitBtn.disabled = true;
            submitBtn.querySelector('span').textContent = 'Enviant...';
            
            // Amagar missatges anteriors
            formMessage.style.display = 'none';
            formMessage.className = 'form-message';
            
            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });
                
                const data = await response.json();
                
                if (response.ok && data.success) {
                    // Èxit
                    formMessage.textContent = '✓ Missatge enviat correctament! Gràcies per contactar-me.';
                    formMessage.classList.add('success');
                    formMessage.style.display = 'block';
                    contactForm.reset();
                } else {
                    // Error del servidor
                    formMessage.textContent = '✗ Error en enviar el missatge. Si us plau, prova-ho més tard o contacta directament per correu.';
                    formMessage.classList.add('error');
                    formMessage.style.display = 'block';
                }
            } catch (error) {
                // Error de connexió
                console.error('Error:', error);
                formMessage.textContent = '✗ Error de connexió. Comprova la teva connexió a internet i torna-ho a intentar.';
                formMessage.classList.add('error');
                formMessage.style.display = 'block';
            } finally {
                // Restaurar botó
                submitBtn.disabled = false;
                submitBtn.querySelector('span').textContent = originalText;
            }
        });
    }

    // --- 10. MILLORA DE RENDIMENT EN MÒBIL ---
    // Deshabilitar animacions hover en dispositius tàctils per millorar el rendiment
    if (isTouchDevice) {
        document.body.classList.add('touch-device');
    }

});