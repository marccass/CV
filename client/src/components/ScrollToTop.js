export function createScrollToTop() {
  const button = document.createElement('button');
  button.id = 'scroll-to-top';
  button.className = 'fixed bottom-8 right-8 z-40 rounded-full shadow-lg glass-effect hover:scale-110 transition-transform w-12 h-12 items-center justify-center hidden';
  button.setAttribute('aria-label', 'Scroll to top');
  
  button.innerHTML = `
    <svg class="h-5 w-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <line x1="12" y1="19" x2="12" y2="5"></line>
      <polyline points="5 12 12 5 19 12"></polyline>
    </svg>
  `;
  
  return button;
}

export function initScrollToTop() {
  const button = createScrollToTop();
  document.body.appendChild(button);
  
  let isVisible = false;
  
  function toggleVisibility() {
    if (window.scrollY > 500) {
      if (!isVisible) {
        button.classList.remove('hidden');
        button.classList.add('flex');
        isVisible = true;
      }
    } else {
      if (isVisible) {
        button.classList.add('hidden');
        button.classList.remove('flex');
        isVisible = false;
      }
    }
  }
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  
  button.addEventListener('click', scrollToTop);
  window.addEventListener('scroll', toggleVisibility);
  
  return button;
}
