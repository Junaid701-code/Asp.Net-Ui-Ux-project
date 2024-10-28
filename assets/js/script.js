// function for handling slider
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial-content');
    const prevButton = document.querySelector('button.prev');
    const nextButton = document.querySelector('button.next');
    let currentIndex = 0;
    let autoSlideInterval;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.transform = `translateX(${(i - index) * 110}%)`;
            testimonial.classList.remove('active', 'previous', 'next');
            if (i === index) {
                testimonial.classList.add('active');
            } else if (i === (index - 1 + testimonials.length) % testimonials.length) {
                testimonial.classList.add('previous');
            } else if (i === (index + 1) % testimonials.length) {
                testimonial.classList.add('next');
            }
        });
    }

    function autoSlide() {
        autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        }, 5000); // Change slide every 5 seconds (adjust as needed)
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Initialize the slider
    showTestimonial(currentIndex);
    autoSlide(); // Start the auto slider

    // Manual navigation buttons
    prevButton.addEventListener('click', function() {
        stopAutoSlide(); // Stop auto-slide on manual interaction
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
        autoSlide(); // Resume auto-slide after manual interaction
    });

    nextButton.addEventListener('click', function() {
        stopAutoSlide(); // Stop auto-slide on manual interaction
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
        autoSlide(); // Resume auto-slide after manual interaction
    });
});


// js  for accordian
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', function () {
        const accordionContent = this.nextElementSibling;

        // Toggle the content visibility
        accordionContent.style.display = accordionContent.style.display === 'block' ? 'none' : 'block';

        // Toggle the open class for styling
        this.classList.toggle('open');
    });
});


    // Function to add the 'in-view' class when the image scrolls into view
    function checkIfInView() {
        const image = document.querySelector(".dashboard-image");
        const rect = image.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            image.classList.add("in-view");
        }
    }

    // Run the check on scroll and when the page loads
    document.addEventListener("scroll", checkIfInView);
    window.addEventListener("load", checkIfInView);

    // Optional: Highlight active link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section, .features-container, .faq-section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`.navbar-nav .nav-link[href="#${section.id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
});
//Js for Svg in the password
    const togglePassword = document.querySelector('.toggle-password');
    const passwordField = document.querySelector('#password');
    
    togglePassword.addEventListener('click', function () {
        // Toggle the type attribute
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
    
        // Toggle between the "show" and "hide" SVGs
        this.innerHTML = type === 'password' ? 
        `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
            <path d="M10.9508 4.25C9.63078 5.71685 7.98078 6.45 6.00078 6.45C4.02078 6.45 2.37078 5.71685 1.05078 4.25" stroke="#646464" stroke-width="0.825" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.05078 7.54996L2.42578 5.45996" stroke="#646464" stroke-width="0.825" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>` : 
        `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
            <path d="M10.9508 4.25C9.63078 5.71685 7.98078 6.45 6.00078 6.45C4.02078 6.45 2.37078 5.71685 1.05078 4.25" stroke="#646464" stroke-width="0.825" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.9507 7.53676L9.58008 5.45996" stroke="#646464" stroke-width="0.825" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.34961 8.6502L4.62461 6.4502" stroke="#646464" stroke-width="0.825" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.65 8.64995L7.375 6.44995" stroke="#646464" stroke-width="0.825" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
    });

    document.addEventListener('DOMContentLoaded', function () {
        const phoneInput = document.querySelector("#phone");
        if (phoneInput) {
            window.intlTelInput(phoneInput, {
                initialCountry: "auto",
                utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" // For formatting and validation
            });
        }
    });

    