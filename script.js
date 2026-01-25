// Dark mode toggle button
const button = document.querySelector('.dark-toggle');
const hamburger = document.querySelector('.navbaricon');
const navControls = document.querySelector('.nav-controls');
const container = document.querySelector('.container');
const navbarColorChange = document.querySelectorAll('.navbarColor');
const reveals = document.querySelectorAll('.reveal');
const windowHeight = window.innerHeight;

// Dark mode - find classes to change
const elementsToBlackBg = document.querySelectorAll('.bcToBlack');
const elementsToGrayBg = document.querySelectorAll('.bcToGray');
const elementsToWhiteBg = document.querySelectorAll('.bcToWhite');
const elementsToUnderline = container.querySelectorAll('a');
const borderLineElements = document.querySelectorAll('.decBorderLine');

// For white color we need 2 arrays (all links and all colToWhite elements)
const textToWhite = document.querySelectorAll('.colToWhite');
const allLinks = document.querySelectorAll('a');
const allIcons = document.querySelectorAll('i');
const elementsToWhiteColor = [...textToWhite, ...allLinks, ...allIcons];

// Get elements for transition animations
const animationBgZero = document.querySelectorAll('.bcAnimation0');
const animationBgFull = document.querySelectorAll('.bcAnimation100');

// Get photos that should disappear in dark mode
const photosToDisappear = document.querySelectorAll('.photoInvisible');

// Get photos that should appear in dark mode
const photosToAppear = document.querySelectorAll('.photoVisible');

// Toggle dark mode on elements with appropriate classes
const toggleDarkMode = () => {
    button.classList.toggle('active');

    elementsToBlackBg.forEach(element => {
        element.classList.toggle('bcToBlack_on');
    });
    elementsToGrayBg.forEach(element => {
        element.classList.toggle('bcToGray_on');
    });
    elementsToWhiteBg.forEach(element => {
        element.classList.toggle('bcToWhite_on');
    });
    elementsToWhiteColor.forEach(element => {
        element.classList.toggle('colToWhite_on');
    });
    elementsToUnderline.forEach(element => {
        element.classList.toggle('decToUnderline_on');
    });
    borderLineElements.forEach(element => {
        element.classList.toggle('decBorderLine_on');
    });
    animationBgZero.forEach(element => {
        element.classList.toggle('bcAnimation0_on');
    });
    animationBgFull.forEach(element => {
        element.classList.toggle('bcAnimation100_on');
    });
    photosToDisappear.forEach(element => {
        element.classList.toggle('photoInvisible_on');
    });
    photosToAppear.forEach(element => {
        element.classList.toggle('photoVisible_on');
    });
}

// Toggle mobile menu visibility
const toggleMobileMenu = () => {
    navControls.classList.toggle('show');
}

// Handle phone menu height change
const handlePhoneMenu = () => {
    if (window.innerWidth <= 768) {
        navbarColorChange.forEach(element => {
            element.classList.toggle('newHeight_on');
        });
    }
}

// Reveal animations for HTML elements on scroll
const revealAnimation = () => {
    reveals.forEach(element => {
        let windowHeight = window.innerHeight;
        let elementTop = element.getBoundingClientRect().top;
        let elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        }
    });
}

// Hamburger menu toggle
const menuToggle = document.querySelector('.navbaricon');
menuToggle.onclick = () => {
    menuToggle.classList.toggle('active');
}

// Event listeners
button.addEventListener('click', toggleDarkMode);
hamburger.addEventListener('click', handlePhoneMenu);
hamburger.addEventListener('click', toggleMobileMenu);
window.addEventListener('scroll', revealAnimation);
