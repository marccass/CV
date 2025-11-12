import { translations } from '../lib/translations.js';

export function createNavigation() {
  const nav = document.createElement('nav');
  nav.id = 'main-nav';
  nav.className = 'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-5';
  
  nav.innerHTML = `
    <div class="container">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a
          href="#hero"
          class="text-xl font-bold text-gradient hover:opacity-80 transition-opacity"
        >
          Marc C. Somoza
        </a>

        <!-- Desktop Navigation -->
        <div id="desktop-nav" class="hidden lg:flex items-center gap-8">
          <!-- Nav links will be inserted here -->
        </div>

        <!-- Controls -->
        <div class="flex items-center gap-3">
          <!-- Theme Toggle -->
          <button
            id="theme-toggle"
            class="inline-flex items-center justify-center rounded-full w-10 h-10 hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="Toggle theme"
          >
            <svg id="sun-icon" class="h-5 w-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <svg id="moon-icon" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>

          <!-- Language Switcher -->
          <div class="hidden sm:flex items-center gap-1 bg-muted/50 rounded-full p-1">
            <button data-lang="ca" class="lang-btn px-3 py-1 rounded-full text-sm font-medium transition-all text-muted-foreground hover:text-foreground">CA</button>
            <button data-lang="es" class="lang-btn px-3 py-1 rounded-full text-sm font-medium transition-all text-muted-foreground hover:text-foreground">ES</button>
            <button data-lang="en" class="lang-btn px-3 py-1 rounded-full text-sm font-medium transition-all text-muted-foreground hover:text-foreground">EN</button>
          </div>

          <!-- Mobile Menu Toggle -->
          <button
            id="mobile-menu-toggle"
            class="lg:hidden inline-flex items-center justify-center rounded-full w-10 h-10 hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="Toggle menu"
          >
            <svg id="menu-icon" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <svg id="close-icon" class="h-5 w-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;

  // Mobile Menu
  const mobileMenu = document.createElement('div');
  mobileMenu.id = 'mobile-menu';
  mobileMenu.className = 'fixed inset-0 z-40 lg:hidden hidden';
  mobileMenu.innerHTML = `
    <div class="absolute inset-0 bg-background/80 backdrop-blur-md" id="mobile-menu-overlay"></div>
    <div class="absolute top-20 left-0 right-0 glass-effect m-4 rounded-2xl p-6 space-y-4">
      <div id="mobile-nav-links"></div>
      
      <!-- Mobile Language Switcher -->
      <div class="flex sm:hidden items-center gap-2 pt-4 border-t border-border">
        <button data-lang="ca" class="mobile-lang-btn flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all bg-muted/50 text-muted-foreground hover:text-foreground">CA</button>
        <button data-lang="es" class="mobile-lang-btn flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all bg-muted/50 text-muted-foreground hover:text-foreground">ES</button>
        <button data-lang="en" class="mobile-lang-btn flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all bg-muted/50 text-muted-foreground hover:text-foreground">EN</button>
      </div>
    </div>
  `;

  return { nav, mobileMenu };
}

export function initNavigation(currentLang, onLanguageChange, onThemeToggle) {
  const { nav, mobileMenu } = createNavigation();
  document.body.prepend(mobileMenu);
  document.body.prepend(nav);

  let isMobileMenuOpen = false;

  // Update navigation links based on language
  function updateNavLinks() {
    const t = translations[currentLang];
    const navLinks = [
      { href: '#about', label: t.navAbout },
      { href: '#education', label: t.navEducation },
      { href: '#skills', label: t.navSkills },
      { href: '#projects', label: t.navProjects },
      { href: '#experience', label: t.navExperience },
      { href: '#contact', label: t.navContact },
    ];

    // Desktop nav
    const desktopNav = document.getElementById('desktop-nav');
    desktopNav.innerHTML = navLinks.map(link => `
      <a
        href="${link.href}"
        class="nav-link text-foreground/80 hover:text-foreground transition-colors font-medium"
      >
        ${link.label}
      </a>
    `).join('');

    // Mobile nav
    const mobileNavLinks = document.getElementById('mobile-nav-links');
    mobileNavLinks.innerHTML = navLinks.map(link => `
      <a
        href="${link.href}"
        class="mobile-nav-link block text-lg font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
      >
        ${link.label}
      </a>
    `).join('');

    // Add click handlers
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          if (isMobileMenuOpen) {
            toggleMobileMenu();
          }
        }
      });
    });
  }

  // Update language buttons
  function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn, .mobile-lang-btn').forEach(btn => {
      const lang = btn.getAttribute('data-lang');
      if (lang === currentLang) {
        btn.className = btn.classList.contains('mobile-lang-btn')
          ? 'mobile-lang-btn flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all bg-primary text-primary-foreground'
          : 'lang-btn px-3 py-1 rounded-full text-sm font-medium transition-all bg-primary text-primary-foreground';
      } else {
        btn.className = btn.classList.contains('mobile-lang-btn')
          ? 'mobile-lang-btn flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all bg-muted/50 text-muted-foreground hover:text-foreground'
          : 'lang-btn px-3 py-1 rounded-full text-sm font-medium transition-all text-muted-foreground hover:text-foreground';
      }
    });
  }

  // Toggle mobile menu
  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    const mobileMenuEl = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (isMobileMenuOpen) {
      mobileMenuEl.classList.remove('hidden');
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    } else {
      mobileMenuEl.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    }
  }

  // Scroll handler
  function handleScroll() {
    const navEl = document.getElementById('main-nav');
    if (window.scrollY > 50) {
      navEl.className = 'fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-effect shadow-lg py-3';
    } else {
      navEl.className = 'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-5';
    }
  }

  // Event listeners
  document.getElementById('mobile-menu-toggle').addEventListener('click', toggleMobileMenu);
  document.getElementById('mobile-menu-overlay').addEventListener('click', toggleMobileMenu);
  
  document.getElementById('theme-toggle').addEventListener('click', () => {
    onThemeToggle();
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    sunIcon.classList.toggle('hidden');
    moonIcon.classList.toggle('hidden');
  });

  document.querySelectorAll('.lang-btn, .mobile-lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      currentLang = lang;
      onLanguageChange(lang);
      updateNavLinks();
      updateLanguageButtons();
      if (isMobileMenuOpen) {
        toggleMobileMenu();
      }
    });
  });

  window.addEventListener('scroll', handleScroll);

  // Initialize
  updateNavLinks();
  updateLanguageButtons();

  return {
    updateLanguage: (lang) => {
      currentLang = lang;
      updateNavLinks();
      updateLanguageButtons();
    }
  };
}
