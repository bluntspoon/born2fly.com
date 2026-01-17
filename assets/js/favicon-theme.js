// Dynamic Favicon Switching Based on System Color Scheme
(function() {
  'use strict';

  // Function to update favicon based on color scheme
  function updateFavicon(isDark) {
    // Find all SVG favicon links without media attribute
    const svgIcons = document.querySelectorAll('link[rel="icon"][type="image/svg+xml"]:not([media])');
    const faviconPath = isDark 
      ? '/assets/images/favicon-dark.svg' 
      : '/assets/images/favicon-light.svg';
    
    // Update all matching favicon links
    svgIcons.forEach(function(icon) {
      icon.href = faviconPath;
    });
  }

  // Check if user's system prefers dark mode
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Set initial favicon
  updateFavicon(darkModeMediaQuery.matches);

  // Listen for changes to color scheme preference
  darkModeMediaQuery.addEventListener('change', function(e) {
    updateFavicon(e.matches);
  });

})();
