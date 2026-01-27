// Portfolio JavaScript

// Navigation scroll effect
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const mobileToggle = document.querySelector('.nav-mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileToggle.classList.toggle('active');
  });
}

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.work-item, .experiment-item, .featured-content, .about-inner');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add('revealed');
    }
  });
};

// Add reveal class for CSS
const style = document.createElement('style');
style.textContent = `
  .work-item, .experiment-item, .featured-content, .about-inner {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .work-item.revealed, .experiment-item.revealed, .featured-content.revealed, .about-inner.revealed {
    opacity: 1;
    transform: translateY(0);
  }
  .work-item:nth-child(2) { transition-delay: 0.1s; }
  .work-item:nth-child(3) { transition-delay: 0.2s; }
  .work-item:nth-child(4) { transition-delay: 0.3s; }
  .experiment-item:nth-child(2) { transition-delay: 0.1s; }
  .experiment-item:nth-child(3) { transition-delay: 0.2s; }
  .experiment-item:nth-child(4) { transition-delay: 0.3s; }

  /* Mobile menu styles */
  @media (max-width: 768px) {
    .nav-links {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #f8f4ed;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }
    .nav-links.active {
      opacity: 1;
      visibility: visible;
    }
    .nav-links a {
      font-size: 1.5rem;
    }
    .nav-mobile-toggle {
      z-index: 101;
    }
    .nav-mobile-toggle.active span:first-child {
      transform: rotate(45deg) translate(5px, 5px);
    }
    .nav-mobile-toggle.active span:last-child {
      transform: rotate(-45deg) translate(5px, -5px);
    }
  }
`;
document.head.appendChild(style);

// Run reveal on load and scroll
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Close mobile menu if open
      if (navLinks) {
        navLinks.classList.remove('active');
      }
      if (mobileToggle) {
        mobileToggle.classList.remove('active');
      }
    }
  });
});
