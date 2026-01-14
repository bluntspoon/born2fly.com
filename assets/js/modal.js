// Modal Functionality
(function() {
  'use strict';

  // Get modal elements
  const modal = document.getElementById('registration-modal');
  const modalClose = document.getElementById('modal-close');
  const modalTriggers = document.querySelectorAll('[data-modal-trigger]');

  if (!modal) return;

  // Function to open modal
  function openModal() {
    modal.classList.add('is-open');
    document.body.classList.add('modal-open');
    // Focus on close button for accessibility
    if (modalClose) {
      setTimeout(() => modalClose.focus(), 100);
    }
  }

  // Function to close modal
  function closeModal() {
    modal.classList.remove('is-open');
    document.body.classList.remove('modal-open');
  }

  // Add click event to all trigger buttons
  modalTriggers.forEach(function(trigger) {
    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      openModal();
    });
  });

  // Close modal when clicking the close button
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  // Close modal when clicking outside the modal content
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close modal when pressing Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

})();
