/* ── Year ────────────────────────────────────────────────────── */
document.getElementById('year').textContent = new Date().getFullYear();

/* ── Sticky nav ──────────────────────────────────────────────── */
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ── Mobile menu ─────────────────────────────────────────────── */
const menuBtn    = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const iconOpen   = document.getElementById('icon-open');
const iconClose  = document.getElementById('icon-close');

menuBtn.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden', isOpen);
  iconOpen.classList.toggle('hidden', !isOpen);
  iconClose.classList.toggle('hidden', isOpen);
  menuBtn.setAttribute('aria-expanded', String(!isOpen));
});

// Close mobile menu when a link is tapped
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    iconOpen.classList.remove('hidden');
    iconClose.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

/* ── Scroll-reveal (sections) ────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Resources tab switcher ──────────────────────────────────── */
const resTabs   = document.querySelectorAll('.res-tab');
const resPanels = document.querySelectorAll('.res-panel');

resTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    // Update tab styles and ARIA
    resTabs.forEach(t => {
      const active = t.dataset.tab === target;
      t.classList.toggle('res-tab-active',   active);
      t.classList.toggle('res-tab-inactive', !active);
      t.setAttribute('aria-selected', String(active));
    });

    // Show/hide panels; re-trigger reveal animation for newly shown panel
    resPanels.forEach(panel => {
      if (panel.id === `tab-${target}`) {
        panel.classList.remove('hidden');
        // Allow re-animation by toggling visible off then on next frame
        panel.classList.remove('visible');
        requestAnimationFrame(() => panel.classList.add('visible'));
      } else {
        panel.classList.add('hidden');
      }
    });
  });
});

/* ── Active nav highlight on scroll ─────────────────────────── */
const sections = document.querySelectorAll('main section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

const activeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach(sec => activeObserver.observe(sec));
