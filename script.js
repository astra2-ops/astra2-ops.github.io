(function($) {
  $.fn.scrollDownIcon = function(options) {
    // Default plugin settings
    const settings = $.extend({
      iconPath: 'scroll-down-arrow.svg', // Path to your SVG file
      position: {
        bottom: 20, // Pixels from the bottom
        right: 20 // Pixels from the right
      },
      size: 40, // Size of the icon (width and height)
      backgroundColor: '#fff',
      borderRadius: 50, // Percentage for border radius
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      iconColor: '#333',
    }, options);

    return this.each(function() {
      const $this = $(this);
      const icon = `<embed src="${settings.iconPath}" width="${settings.size}" height="${settings.size}" />`;
      const $scrollDown = $('<div class="scroll-down"></div>')
        .css({
          position: 'fixed',
          bottom: settings.position.bottom + 'px',
          right: settings.position.right + 'px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: settings.size + 'px',
          height: settings.size + 'px',
          backgroundColor: settings.backgroundColor,
          borderRadius: settings.borderRadius + '%',
          boxShadow: settings.boxShadow,
          cursor: 'pointer',
          zIndex: 100
        })
        .html(icon);

      $scrollDown.click(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      });

      $this.append($scrollDown);
    });
  };
})(jQuery);
// Get all the buttons that have the class "join-button"
const joinButtons = document.querySelectorAll('.join-button');

// Add a click event listener to each button
joinButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the link associated with the button (assuming it's in the 'href' attribute)
    const link = button.getAttribute('href');
    
    // If there is a link, open it in a new tab
    if (link) {
      window.open(link, '_blank'); // Opens the link in a new tab
    }
  });
});

// Get the elements with the class "typewriter" (for the typewriter effect)
const typewriterElements = document.querySelectorAll('.typewriter');

// Add a hover effect to the typewriter elements
typewriterElements.forEach(element => {
  element.addEventListener('mouseover', () => {
    // Add a class to change the cursor on hover
    element.classList.add('hover-cursor');
  });

  element.addEventListener('mouseout', () => {
    // Remove the class when the mouse leaves
    element.classList.remove('hover-cursor');
  });
});

// Add a simple hover effect to the "Join Us" button (or any other button you want)
const joinUsButton = document.querySelector('.join-us-button');

if (joinUsButton) {
  joinUsButton.addEventListener('mouseover', () => {
    joinUsButton.style.backgroundColor = '#f1c40f'; // Change background color on hover
  });

  joinUsButton.addEventListener('mouseout', () => {
    joinUsButton.style.backgroundColor = '#ec3750'; // Reset background color
  });
}

// Add a hover effect to the "Read the ASTRA Guide" link (or any other link you want)
const guideLink = document.querySelector('.guide-link');

if (guideLink) {
  guideLink.addEventListener('mouseover', () => {
    guideLink.style.textDecoration = 'none'; // Remove underline on hover
  });

  guideLink.addEventListener('mouseout', () => {
    guideLink.style.textDecoration = 'underline'; // Add underline back
  });
}
