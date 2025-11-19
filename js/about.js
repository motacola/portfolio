const MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const REVEAL_SELECTOR = '.skill-category, .timeline-item, .client-category, .achievement-item';

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
    
    initRevealAnimations();
});

function initRevealAnimations() {
    const targets = document.querySelectorAll(REVEAL_SELECTOR);
    if (!targets.length) {
        return;
    }

    const prefersReducedMotion =
        typeof window !== 'undefined' && 'matchMedia' in window
            ? window.matchMedia(MOTION_QUERY).matches
            : false;

    const canAnimate = !prefersReducedMotion && 'IntersectionObserver' in window;

    if (!canAnimate) {
        targets.forEach(element => element.classList.add('is-visible'));
        return;
    }

    document.body.classList.add('supports-reveal');

    const observer = new IntersectionObserver(
        (entries, intersectionObserver) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    intersectionObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    targets.forEach(element => observer.observe(element));
}
