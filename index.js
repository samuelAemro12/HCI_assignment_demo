document.addEventListener('DOMContentLoaded', function () {
    console.log("JavaScript loaded successfully!");

    function handleFormSubmission() {
      const ideaForm = document.getElementById('ideaForm');
  
      if (ideaForm) {
        ideaForm.addEventListener('submit', function (event) {
          event.preventDefault(); 
  
     
          const nameInput = document.getElementById('name').value.trim();
          const emailInput = document.getElementById('email').value.trim();
          const ideasInput = document.getElementById('ideas').value.trim();
  
          if (!nameInput || !emailInput || !ideasInput) {
            alert('Please fill out all fields.');
            return;
          }
  
          if (!validateEmail(emailInput)) {
            alert('Please enter a valid email address.');
            return;
          }
          alert(`Thank you, ${nameInput}! Your idea has been submitted.`);
  
          ideaForm.reset();
        });
      }
    }
  
    function validateEmail(email) {
      const lowerCaseEmail = email.toLowerCase();
      const atIndex = lowerCaseEmail.indexOf('@');
      const dotIndex = lowerCaseEmail.lastIndexOf('.');
  
      if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex + 2 >= lowerCaseEmail.length) {
        return false; // Invalid format
      }
      return true; // Valid format
    }

    function enableSmoothScrolling() {
      const scrollLinks = document.querySelectorAll('a[href^="#"]');
  
      scrollLinks.forEach(link => {
        link.addEventListener('click', function (event) {
          event.preventDefault(); 
  
          const targetId = this.getAttribute('href').substring(1); 
          const targetElement = document.getElementById(targetId); 
  
          if (targetElement) {
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
  
    function setupDynamicNavigationButtons() {
      const currentPage = window.location.href.split('/').pop(); 
      const playerPages = ['samuel.html', 'feven.html', 'wogene.html']; 
      const nextButton = document.querySelector('.next-button'); 
  
      if (nextButton && playerPages.includes(currentPage)) {
        const currentIndex = playerPages.indexOf(currentPage); // Get the index of the current page
        const nextIndex = (currentIndex + 1) % playerPages.length; // Calculate the next page index
        const nextPage = playerPages[nextIndex]; // Get the next page filename
  

        nextButton.setAttribute('href', nextPage);
  
        nextButton.setAttribute('title', `Go to ${nextPage.replace('.html', '')}'s Profile`);
      }
    }
  
    function addImageHoverEffects() {
      const memberCards = document.querySelectorAll('.bg-white.p-6.rounded-lg.shadow-md');
  
      memberCards.forEach(card => {
        const img = card.querySelector('img'); 
  
        if (img) {
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
  
    function setupHomeNavigation() {
      const homeIcons = document.querySelectorAll('header nav a img'); 
  
      homeIcons.forEach(icon => {
        icon.addEventListener('click', function () {
          alert('Returning to the home page...');
          window.location.href = 'index.html'; 
        });
      });
    }
  
    // Function to initialize all features
    function initializeFeatures() {
      console.log("Initializing features...");

      enableSmoothScrolling();
  
      handleFormSubmission();
  
      setupDynamicNavigationButtons();
  
      addImageHoverEffects();
  
      setupHomeNavigation();
    }
  
    initializeFeatures();
  });