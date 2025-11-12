import './index.css';
import { initNavigation } from './components/Navigation.js';
import { initScrollToTop } from './components/ScrollToTop.js';
import { createHomePage } from './pages/Home.js';
import { translations } from './lib/translations.js';

// State management
let currentLanguage = localStorage.getItem('language') || 'ca';
let currentTheme = localStorage.getItem('theme') || 'dark';

// Initialize theme
function initTheme() {
  if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

// Toggle theme
function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', currentTheme);
  initTheme();
}

// Update page content
function updatePageContent() {
  const root = document.getElementById('root');
  root.innerHTML = createHomePage(currentLanguage);
  
  // Re-initialize scroll animations
  initScrollAnimations();
  
  // Re-initialize form handler
  initContactForm();
  
  // Re-initialize CV download
  initCVDownload();
}

// Change language
function changeLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', currentLanguage);
  updatePageContent();
}

// Initialize scroll animations
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    },
    { threshold: 0.1 }
  );

  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach((el) => observer.observe(el));
  

}

// Initialize contact form
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');

      if (name && email && message) {
        showToast(translations[currentLanguage].contactSuccess, 'success');
        form.reset();
      } else {
        showToast(translations[currentLanguage].contactError, 'error');
      }
    });
  }
}

// Initialize CV download
function initCVDownload() {
  const downloadBtn = document.getElementById('download-cv-btn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      const cvPaths = {
        ca: '/MarcCassanmagnagoSomozaCV2025CATALA.pdf',
        es: '/MarcCassanmagnagoSomozaCV2025ESPANOL.pdf',
        en: '/MarcCassanmagnagoSomozaCV2025ENGLISH.pdf',
      };
      
      const link = document.createElement('a');
      link.href = cvPaths[currentLanguage];
      link.download = cvPaths[currentLanguage].split('/').pop() || 'CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
}

// Simple toast notification
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ${
    type === 'success' ? 'bg-primary text-primary-foreground' : 'bg-destructive text-destructive-foreground'
  }`;
  toast.textContent = message;
  toast.style.opacity = '0';
  toast.style.transform = 'translate(-50%, 20px)';
  
  document.body.appendChild(toast);
  
  // Trigger animation
  setTimeout(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translate(-50%, 0)';
  }, 10);
  
  // Remove after 3 seconds
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translate(-50%, 20px)';
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 3000);
}

// Initialize app
function initApp() {
  // Initialize theme
  initTheme();
  
  // Initialize navigation
  const navController = initNavigation(currentLanguage, changeLanguage, toggleTheme);
  
  // Initialize scroll to top button
  initScrollToTop();
  
  // Initialize page content
  updatePageContent();
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
