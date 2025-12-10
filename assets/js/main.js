// Mobile Navigation Toggle
(function() {
  'use strict';

  // Get elements
  const mobileNavToggle = document.getElementById('mobile-nav-toggle');
  const mainNav = document.getElementById('main-nav');

  if (!mobileNavToggle || !mainNav) return;

  // Toggle mobile navigation
  mobileNavToggle.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';

    // Toggle aria-expanded
    this.setAttribute('aria-expanded', !isExpanded);

    // Toggle is-open class on nav
    mainNav.classList.toggle('is-open');

    // Prevent body scroll when menu is open
    if (!isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // Close mobile nav when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInside = mobileNavToggle.contains(event.target) || mainNav.contains(event.target);
    const isOpen = mainNav.classList.contains('is-open');

    if (!isClickInside && isOpen) {
      mobileNavToggle.setAttribute('aria-expanded', 'false');
      mainNav.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });

  // Close mobile nav when pressing Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      const isOpen = mainNav.classList.contains('is-open');
      if (isOpen) {
        mobileNavToggle.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    }
  });

  // Close mobile nav and restore scroll on window resize
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      if (window.innerWidth >= 768) {
        mobileNavToggle.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    }, 250);
  });

  // Handle navigation links in mobile menu
  const navLinks = mainNav.querySelectorAll('a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      // Close mobile menu when a link is clicked
      if (window.innerWidth < 768) {
        mobileNavToggle.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  });

})();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});
