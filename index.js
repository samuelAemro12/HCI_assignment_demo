// Wait for the DOM to fully load before executing any scripts
document.addEventListener('DOMContentLoaded', function () {
    console.log("JavaScript loaded successfully!");
  
    // Function to handle form submission on index.html
    function handleFormSubmission() {
      const ideaForm = document.getElementById('ideaForm');
  
      if (ideaForm) {
        ideaForm.addEventListener('submit', function (event) {
          event.preventDefault(); // Prevent default form submission behavior
  
          // Get form values
          const nameInput = document.getElementById('name').value.trim();
          const emailInput = document.getElementById('email').value.trim();
          const ideasInput = document.getElementById('ideas').value.trim();
  
          // Validate inputs without regex
          if (!nameInput || !emailInput || !ideasInput) {
            alert('Please fill out all fields.');
            return;
          }
  
          if (!validateEmail(emailInput)) {
            alert('Please enter a valid email address.');
            return;
          }
  
          // Display success message
          alert(`Thank you, ${nameInput}! Your idea has been submitted.`);
  
          // Reset the form after submission
          ideaForm.reset();
        });
      }
    }
  
    // Email validation function (without regex)
    function validateEmail(email) {
      const lowerCaseEmail = email.toLowerCase();
      const atIndex = lowerCaseEmail.indexOf('@');
      const dotIndex = lowerCaseEmail.lastIndexOf('.');
  
      // Simple checks for email validity
      if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex + 2 >= lowerCaseEmail.length) {
        return false; // Invalid format
      }
      return true; // Valid format
    }
  
    // Function to handle smooth scrolling for anchor links
    function enableSmoothScrolling() {
      const scrollLinks = document.querySelectorAll('a[href^="#"]');
  
      scrollLinks.forEach(link => {
        link.addEventListener('click', function (event) {
          event.preventDefault(); // Prevent default anchor behavior
  
          const targetId = this.getAttribute('href').substring(1); // Get the target ID
          const targetElement = document.getElementById(targetId); // Find the target element
  
          if (targetElement) {
            // Scroll to the target element smoothly
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
  
            // Add active state to navigation links based on scroll position
            window.addEventListener('scroll', function () {
              const sections = document.querySelectorAll('section, footer'); // Select all main sections
              const navLinks = document.querySelectorAll('header nav a'); // Select all navigation links
  
              let currentSection = '';
  
              sections.forEach(section => {
                const sectionTop = section.offsetTop - 50; // Adjust for header height
                const sectionHeight = section.offsetHeight;
  
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                  currentSection = section.getAttribute('id');
                }
              });
  
              navLinks.forEach(link => {
                link.classList.remove('active'); // Remove active class from all links
                if (link.getAttribute('href').substring(1) === currentSection) {
                  link.classList.add('active'); // Add active class to the current section link
                }
              });
            });
          }
        });
      });
    }
  
    // Function to dynamically update navigation buttons on player profile pages
    function setupDynamicNavigationButtons() {
      const currentPage = window.location.href.split('/').pop(); // Get the current page filename
      const playerPages = ['samuel.html', 'feven.html', 'wogene.html']; // List of player profile pages
      const nextButton = document.querySelector('.next-button'); // Find the "Next" button
  
      if (nextButton && playerPages.includes(currentPage)) {
        const currentIndex = playerPages.indexOf(currentPage); // Get the index of the current page
        const nextIndex = (currentIndex + 1) % playerPages.length; // Calculate the next page index
        const nextPage = playerPages[nextIndex]; // Get the next page filename
  
        // Update the "Next" button's href attribute
        nextButton.setAttribute('href', nextPage);
  
        // Optional: Add a tooltip or title to the button for better accessibility
        nextButton.setAttribute('title', `Go to ${nextPage.replace('.html', '')}'s Profile`);
      }
    }
  
    // Function to add hover effects to images in cards (for index.html)
    function addImageHoverEffects() {
      const memberCards = document.querySelectorAll('.bg-white.p-6.rounded-lg.shadow-md'); // Select all member cards
  
      memberCards.forEach(card => {
        const img = card.querySelector('img'); // Find the image inside each card
  
        if (img) {
          // Add hover effect to make the image slightly grow when hovered
          img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'transform 0.3s ease';
          });
  
          img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1.0)';
            img.style.transition = 'transform 0.3s ease';
          });
        }
      });
    }
  
    // Function to handle back-to-home navigation
    function setupHomeNavigation() {
      const homeIcons = document.querySelectorAll('header nav a img'); // Select all home icons
  
      homeIcons.forEach(icon => {
        icon.addEventListener('click', function () {
          alert('Returning to the home page...');
          window.location.href = 'index.html'; // Redirect to the home page
        });
      });
    }
  
    // Function to initialize all features
    function initializeFeatures() {
      console.log("Initializing features...");
  
      // Enable smooth scrolling
      enableSmoothScrolling();
  
      // Handle form submission (if applicable)
      handleFormSubmission();
  
      // Set up dynamic navigation buttons
      setupDynamicNavigationButtons();
  
      // Add hover effects to images in cards
      addImageHoverEffects();
  
      // Set up home navigation
      setupHomeNavigation();
    }
  
    // Call the initialization function
    initializeFeatures();
  });