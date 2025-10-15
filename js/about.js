// About page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // View More Experience functionality
    const viewMoreBtn = document.getElementById('view-more-experience');
    const hiddenExperience = document.querySelector('.hidden-experience');

    if (viewMoreBtn && hiddenExperience) {
        viewMoreBtn.addEventListener('click', function() {
            if (hiddenExperience.style.display === 'block') {
                hiddenExperience.style.display = 'none';
                viewMoreBtn.textContent = 'View More Experience';
            } else {
                hiddenExperience.style.display = 'block';
                viewMoreBtn.textContent = 'View Less';
            }
        });
    }

    // Smooth scroll to timeline items when clicking client links
    const clientLinks = document.querySelectorAll('.client-link');

    clientLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Check if target is in hidden experience section
                const isHidden = targetElement.closest('.hidden-experience');

                if (isHidden && hiddenExperience.style.display !== 'block') {
                    // Expand hidden experience first
                    hiddenExperience.style.display = 'block';
                    viewMoreBtn.textContent = 'View Less';

                    // Wait for expansion animation, then scroll
                    setTimeout(() => {
                        scrollToElement(targetElement);
                    }, 300);
                } else {
                    scrollToElement(targetElement);
                }
            }
        });
    });

    function scrollToElement(element) {
        // Scroll to element with offset for fixed header
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // Add highlight effect
        element.classList.add('highlight');
        setTimeout(() => {
            element.classList.remove('highlight');
        }, 2000);
    }
    
    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.skill-category, .timeline-item, .client-category, .achievement-item');
        const options = {
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, options);
        
        elements.forEach(element => {
            observer.observe(element);
        });
    };
    
    // Call animation function
    animateOnScroll();
});
