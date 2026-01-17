// Dynamic Favicon Switching Based on System Color Scheme
(function() {
  'use strict';

  // Function to update favicon based on color scheme
  function updateFavicon(isDark) {
    // Find the fallback SVG favicon link (the one without a media attribute)
    const fallbackIcon = document.querySelector('link[rel="icon"][type="image/svg+xml"]:not([media])');
    
    if (fallbackIcon) {
      // Extract the current href and replace light with dark or vice versa
      const currentHref = fallbackIcon.href;
      const newHref = isDark 
        ? currentHref.replace('favicon-light.svg', 'favicon-dark.svg')
        : currentHref.replace('favicon-dark.svg', 'favicon-light.svg');
      
      fallbackIcon.href = newHref;
    }
  }

  // Check if user's system prefers dark mode
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Set initial favicon based on system preference
  updateFavicon(darkModeMediaQuery.matches);

  // Listen for changes to color scheme preference
  darkModeMediaQuery.addEventListener('change', function(e) {
    updateFavicon(e.matches);
  });

})();
