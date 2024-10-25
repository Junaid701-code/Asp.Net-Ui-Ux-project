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

const togglePassword = document.querySelector('.toggle-password');
    const passwordField = document.querySelector('#password');

    togglePassword.addEventListener('click', function () {
        // Toggle the type attribute
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);

        // Toggle the eye icon
        this.innerHTML = type === 'password' ? 
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye" viewBox="0 0 24 24">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
        </svg>` : 
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye-off" viewBox="0 0 24 24">
            <path d="M17.94 17.94A10.06 10.06 0 0012 20C5 20 1 12 1 12a15.32 15.32 0 014.19-5.65M10.6 10.6a4 4 0 005.65 5.65M9.53 9.53L1 1M15.65 15.65l5.3 5.3M1 12s4-8 11-8a10.06 10.06 0 016.06 1.94"></path>
        </svg>`;
    });