// Enhanced about page script with better error handling
document.addEventListener("DOMContentLoaded", function() {
    try {
        // View more experience functionality
        const viewMoreButtons = document.querySelectorAll(".view-more-experience-btn");
        const hiddenItems = document.querySelectorAll(".timeline-item.hidden");
        
        if (viewMoreButtons.length > 0 && hiddenItems.length > 0) {
            viewMoreButtons.forEach(button => {
                button.addEventListener("click", function() {
                    let anyVisible = false;
                    
                    hiddenItems.forEach(item => {
                        item.classList.toggle("show");
                        if (item.classList.contains("show")) {
                            anyVisible = true;
                        }
                    });
                    
                    const buttonText = anyVisible ? "View Less" : "View More Experience";
                    viewMoreButtons.forEach(btn => btn.textContent = buttonText);
                    
                    // Update ARIA attributes
                    const isExpanded = anyVisible;
                    button.setAttribute("aria-expanded", isExpanded);
                    
                    // Smooth scroll to first hidden item when expanding
                    if (anyVisible && hiddenItems.length > 0) {
                        setTimeout(() => {
                            const firstHiddenItem = hiddenItems[0];
                            const headerHeight = document.querySelector("header")?.offsetHeight || 80;
                            const targetPosition = firstHiddenItem.offsetTop - headerHeight - 20;
                            
                            window.scrollTo({
                                top: targetPosition,
                                behavior: "smooth"
                            });
                        }, 100);
                    }
                });
            });
        }

        // Intersection Observer for scroll animations
        const observeElements = () => {
            const elements = document.querySelectorAll(
                ".skill-category, .timeline-item, .client-category, .achievement-item"
            );
            
            if (elements.length === 0) return;
            
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Add a small delay for staggered animation effect
                        setTimeout(() => {
                            entry.target.classList.add("is-visible");
                        }, Math.random() * 200);
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            
            elements.forEach(element => {
                observer.observe(element);
            });
        };
        
        // Initialize animations
        observeElements();
        
        // Download CV button analytics (if needed)
        const downloadButtons = document.querySelectorAll('.download-cv-btn');
        downloadButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Track download event (replace with your analytics code)
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'download', {
                        'event_category': 'CV',
                        'event_label': 'Christopher Belgrave CV'
                    });
                }
                console.log('CV download initiated');
            });
        });
        
        // Keyboard navigation improvements
        document.addEventListener('keydown', function(event) {
            // Allow Enter key to trigger button clicks
            if (event.key === 'Enter' && event.target.classList.contains('view-more-experience-btn')) {
                event.target.click();
            }
        });
        
        // Error handling for missing elements
        const criticalElements = [
            '.timeline',
            '.skills-section',
            '.experience-section'
        ];
        
        criticalElements.forEach(selector => {
            if (!document.querySelector(selector)) {
                console.warn(`Critical element missing: ${selector}`);
            }
        });
        
    } catch (error) {
        console.error('Error initializing about page:', error);
        
        // Fallback functionality for view more buttons
        const viewMoreButtons = document.querySelectorAll(".view-more-experience-btn");
        const hiddenItems = document.querySelectorAll(".timeline-item.hidden");
        
        if (viewMoreButtons.length > 0 && hiddenItems.length > 0) {
            viewMoreButtons.forEach(button => {
                button.addEventListener("click", function() {
                    hiddenItems.forEach(item => {
                        item.style.display = item.style.display === 'none' ? 'block' : 'none';
                    });
                });
            });
        }
    }
});