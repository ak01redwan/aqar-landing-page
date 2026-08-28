/**
 * Progressive-enhancement interactivity only. Every section of this page
 * renders and works (including the search form, which is a real GET form
 * to the app) with this script absent — see docs/DESIGN_SYSTEM.md §JS budget.
 */

function initMobileNav() {
  const toggle = document.querySelector('[data-nav-toggle]');
  const drawer = document.querySelector('[data-nav-drawer]');
  const backdrop = document.querySelector('[data-nav-backdrop]');
  if (!toggle || !drawer || !backdrop) return;

  const closeBtn = drawer.querySelector('[data-nav-close]');
  const focusableSelector = 'a[href], button:not([disabled])';
  let lastFocused = null;

  function open() {
    lastFocused = document.activeElement;
    drawer.classList.remove('hidden');
    backdrop.classList.remove('hidden');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    const first = drawer.querySelector(focusableSelector);
    first?.focus();
    document.addEventListener('keydown', onKeydown);
  }

  function close() {
    drawer.classList.add('hidden');
    backdrop.classList.add('hidden');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onKeydown);
    lastFocused?.focus();
  }

  function onKeydown(event) {
    if (event.key === 'Escape') {
      close();
      return;
    }
    if (event.key !== 'Tab') return;
    const focusables = Array.from(drawer.querySelectorAll(focusableSelector));
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    isOpen ? close() : open();
  });
  closeBtn?.addEventListener('click', close);
  backdrop.addEventListener('click', close);
}

function initHeaderElevation() {
  const header = document.querySelector('[data-site-header]');
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle('is-elevated', window.scrollY > 4);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

initMobileNav();
initHeaderElevation();
