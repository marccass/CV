// =========================================
// PORTFOLI PROFESSIONAL - MARC CASSANMAGNAGO
// JavaScript amb animacions i interactivitat fluida
// =========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log("Portfoli Professional de Marc carregat! ✨");

    // --- Selecció d'elements ---
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
    
    // Elements d'scroll
    const header = document.querySelector('.header');
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    const scrollProgress = document.getElementById('scroll-progress');

    // =========================================
    // 1. SISTEMA DE TRADUCCIÓ (I18N)
    // =========================================
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
            lang = 'ca';
        }

        // Guardar preferència
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;

        // Actualitzar botons
        Object.values(langButtons).forEach(btn => btn.classList.remove('active'));
        if (langButtons[lang]) {
            langButtons[lang].classList.add('active');
        }

        // Aplicar traduccions
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;
            const translation = translations[lang][key];
            
            if (translation) {
                if (element.placeholder !== undefined) {
                    element.placeholder = translation;
                } else {
                    element.innerHTML = translation;
                }
            }
        });
    }

    // Event listeners per als botons d'idioma
    Object.keys(langButtons).forEach(lang => {
        if (langButtons[lang]) {
            langButtons[lang].addEventListener('click', () => {
                setLanguage(lang);
                // Animació de feedback
                langButtons[lang].style.transform = 'scale(0.95)';
                setTimeout(() => {
                    langButtons[lang].style.transform = 'scale(1)';
                }, 150);
            });
        }
    });

    // =========================================
    // 2. SISTEMA DE TEMA (CLAR/FOSC)
    // =========================================
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Actualitzar icona amb animació
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

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme);
    }

    // =========================================
    // 3. MENÚ MÒBIL
    // =========================================
    function toggleMenu() {
        navToggle.classList.toggle('is-active');
        navMenu.classList.toggle('is-active');
        menuOverlay.classList.toggle('is-active');
        document.body.style.overflow = navMenu.classList.contains('is-active') ? 'hidden' : '';
    }

    function closeMenu() {
        navToggle.classList.remove('is-active');
        navMenu.classList.remove('is-active');
        menuOverlay.classList.remove('is-active');
        document.body.style.overflow = '';
    }

    if (navToggle) {
        navToggle.addEventListener('click', toggleMenu);
    }

    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            closeMenu();
            
            // Smooth scroll amb offset per al header fix
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // =========================================
    // 4. HEADER SCROLL EFFECT
    // =========================================
    let lastScroll = 0;
    
    function handleScroll() {
        const currentScroll = window.pageYOffset;
        
        // Header amb efecte vidre
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Botó scroll to top
        if (currentScroll > 500) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
        
        // Barra de progrés
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (currentScroll / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
        
        lastScroll = currentScroll;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    // =========================================
    // 5. BOTÓ SCROLL TO TOP
    // =========================================
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // =========================================
    // 6. NAVEGACIÓ ACTIVA SEGONS SECCIÓ
    // =========================================
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id], header[id]');
        const scrollPos = window.pageYOffset + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink, { passive: true });

    // =========================================
    // 7. INTERSECTION OBSERVER PER ANIMACIONS
    // =========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animar barres de progrés d'habilitats
                if (entry.target.id === 'habilitats') {
                    animateSkillBars();
                }
            }
        });
    }, observerOptions);

    // Observar seccions
    document.querySelectorAll('.section-reveal').forEach(section => {
        observer.observe(section);
    });

    // =========================================
    // 8. ANIMACIÓ DE BARRES D'HABILITATS
    // =========================================
    let skillsAnimated = false;
    
    function animateSkillBars() {
        if (skillsAnimated) return;
        
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach((bar, index) => {
            setTimeout(() => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 50);
            }, index * 100);
        });
        
        skillsAnimated = true;
    }

    // =========================================
    // 9. EFECTE PARALLAX SUAU PER PROJECTES
    // =========================================
    const projectCards = document.querySelectorAll('.targeta-projecte');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // =========================================
    // 10. PARTÍCULES DE FONS ANIMADES
    // =========================================
    function createParticles() {
        const particlesContainer = document.getElementById('particles');
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = Math.random() * 4 + 1 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = 'var(--color-primari)';
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.opacity = Math.random() * 0.5;
            particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
            particle.style.animationDelay = Math.random() * 5 + 's';
            
            particlesContainer.appendChild(particle);
        }
    }

    // Afegir animació CSS per a les partícules
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translate(0, 0);
            }
            25% {
                transform: translate(20px, -20px);
            }
            50% {
                transform: translate(-20px, 20px);
            }
            75% {
                transform: translate(20px, 20px);
            }
        }
    `;
    document.head.appendChild(style);

    createParticles();

    // =========================================
    // 11. FORMULARI DE CONTACTE
    // =========================================
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.querySelector('span').textContent;
            
            // Deshabilitar botó i mostrar estat de càrrega
            submitButton.disabled = true;
            submitButton.querySelector('span').textContent = 'Enviant...';
            
            try {
                const formData = new FormData(contactForm);
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    formMessage.textContent = '✓ Missatge enviat correctament!';
                    formMessage.className = 'form-message success';
                    contactForm.reset();
                } else {
                    throw new Error('Error en enviar el formulari');
                }
            } catch (error) {
                formMessage.textContent = '✗ Error en enviar el missatge. Torna-ho a provar.';
                formMessage.className = 'form-message error';
            } finally {
                submitButton.disabled = false;
                submitButton.querySelector('span').textContent = originalText;
                
                // Amagar missatge després de 5 segons
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            }
        });
    }

    // =========================================
    // 12. INICIALITZACIÓ
    // =========================================
    function init() {
        // Carregar preferències guardades
        const savedLang = localStorage.getItem('lang') || 'ca';
        const savedTheme = localStorage.getItem('theme') || 'dark';
        
        setLanguage(savedLang);
        setTheme(savedTheme);
        
        // Executar handleScroll inicial
        handleScroll();
        updateActiveNavLink();
        
        console.log('✨ Portfoli inicialitzat correctament');
    }

    init();

    // =========================================
    // 13. EFECTES ADDICIONALS DE HOVER
    // =========================================
    
    // Efecte de hover per als botons
    const buttons = document.querySelectorAll('.boto, .animated-button, .social-link, .contact-link');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });

    // Efecte de ripple per als botons
    function createRipple(event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        ripple.style.width = ripple.style.height = `${diameter}px`;
        ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
        ripple.classList.add('ripple');

        const rippleStyle = document.createElement('style');
        rippleStyle.textContent = `
            .ripple {
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple-animation 0.6s ease-out;
                pointer-events: none;
            }
            @keyframes ripple-animation {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        
        if (!document.querySelector('style[data-ripple]')) {
            rippleStyle.setAttribute('data-ripple', 'true');
            document.head.appendChild(rippleStyle);
        }

        const existingRipple = button.querySelector('.ripple');
        if (existingRipple) {
            existingRipple.remove();
        }

        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
    }

    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });

    // =========================================
    // 14. PREVENCIÓ DE FOUC (Flash Of Unstyled Content)
    // =========================================
    document.body.style.opacity = '0';
    window.addEventListener('load', () => {
        document.body.style.transition = 'opacity 0.3s ease-in';
        document.body.style.opacity = '1';
    });

    // =========================================
    // 15. LAZY LOADING D'IMATGES MILLORAT
    // =========================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // =========================================
    // 16. DETECCIÓ DE PREFERÈNCIA DE MOVIMENT REDUÏT
    // =========================================
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        // Desactivar animacions si l'usuari prefereix moviment reduït
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        console.log('Mode de moviment reduït activat');
    }
});
