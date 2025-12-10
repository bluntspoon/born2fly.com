// Carousel functionality
(function() {
  'use strict';

  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach(function(carousel) {
    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const prevBtn = carousel.querySelector('.carousel-btn-prev');
    const nextBtn = carousel.querySelector('.carousel-btn-next');
    const dotsContainer = carousel.querySelector('.carousel-dots');
    const dots = Array.from(dotsContainer.children);

    let currentIndex = 0;
    let autoplayInterval;

    // Set initial position
    updateCarousel(currentIndex);

    // Previous button
    prevBtn.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel(currentIndex);
      resetAutoplay();
    });

    // Next button
    nextBtn.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel(currentIndex);
      resetAutoplay();
    });

    // Dots navigation
    dots.forEach(function(dot, index) {
      dot.addEventListener('click', function() {
        currentIndex = index;
        updateCarousel(currentIndex);
        resetAutoplay();
      });
    });

    // Keyboard navigation
    carousel.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel(currentIndex);
        resetAutoplay();
      } else if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel(currentIndex);
        resetAutoplay();
      }
    });

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    });

    track.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });

    function handleSwipe() {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swipe left - next
          currentIndex = (currentIndex + 1) % slides.length;
        } else {
          // Swipe right - prev
          currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        }
        updateCarousel(currentIndex);
        resetAutoplay();
      }
    }

    // Update carousel position and active states
    function updateCarousel(index) {
      const slideWidth = slides[0].getBoundingClientRect().width;
      track.style.transform = `translateX(-${index * slideWidth}px)`;

      // Update dots
      dots.forEach(function(dot, i) {
        if (i === index) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }

    // Autoplay
    function startAutoplay() {
      autoplayInterval = setInterval(function() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel(currentIndex);
      }, 5000); // Change slide every 5 seconds
    }

    function resetAutoplay() {
      clearInterval(autoplayInterval);
      startAutoplay();
    }

    // Start autoplay
    startAutoplay();

    // Pause autoplay on hover
    carousel.addEventListener('mouseenter', function() {
      clearInterval(autoplayInterval);
    });

    carousel.addEventListener('mouseleave', function() {
      startAutoplay();
    });

    // Update on window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        updateCarousel(currentIndex);
      }, 250);
    });
  });
})();
