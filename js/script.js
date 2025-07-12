// Enhanced main script with error handling and performance improvements
document.addEventListener("DOMContentLoaded", function() {
    try {
        // Mobile navigation toggle
        const navToggle = document.querySelector(".nav-toggle");
        const navMenu = document.querySelector(".nav-menu");
        
        if (navToggle && navMenu) {
            navToggle.addEventListener("click", function() {
                navMenu.classList.toggle("active");
                navToggle.classList.toggle("active");
                
                // Update ARIA attributes for accessibility
                const isExpanded = navMenu.classList.contains("active");
                navToggle.setAttribute("aria-expanded", isExpanded);
                navMenu.setAttribute("aria-hidden", !isExpanded);
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener("click", function(event) {
                if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                    navMenu.classList.remove("active");
                    navToggle.classList.remove("active");
                    navToggle.setAttribute("aria-expanded", "false");
                    navMenu.setAttribute("aria-hidden", "true");
                }
            });
            
            // Close mobile menu on escape key
            document.addEventListener("keydown", function(event) {
                if (event.key === "Escape" && navMenu.classList.contains("active")) {
                    navMenu.classList.remove("active");
                    navToggle.classList.remove("active");
                    navToggle.setAttribute("aria-expanded", "false");
                    navMenu.setAttribute("aria-hidden", "true");
                    navToggle.focus();
                }
            });
        }

        // Header scroll effect with throttling
        let ticking = false;
        function updateHeader() {
            const header = document.querySelector("header");
            if (header) {
                if (window.scrollY > 50) {
                    header.classList.add("scrolled");
                } else {
                    header.classList.remove("scrolled");
                }
            }
            ticking = false;
        }
        
        window.addEventListener("scroll", function() {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        });

        // Video filtering with improved performance
        const filterButtons = document.querySelectorAll(".filter-btn");
        const videoItems = document.querySelectorAll(".video-item");
        
        if (filterButtons.length > 0 && videoItems.length > 0) {
            filterButtons.forEach(button => {
                button.addEventListener("click", function() {
                    // Update active state
                    filterButtons.forEach(btn => btn.classList.remove("active"));
                    this.classList.add("active");
                    
                    const filter = this.getAttribute("data-filter");
                    
                    // Use DocumentFragment for better performance
                    videoItems.forEach((item, index) => {
                        const category = item.getAttribute("data-category");
                        const shouldShow = filter === "all" || category === filter;
                        
                        if (shouldShow) {
                            item.style.display = "block";
                            // Stagger animations for better UX
                            setTimeout(() => {
                                item.style.opacity = "1";
                                item.style.transform = "translateY(0)";
                            }, index * 50);
                        } else {
                            item.style.opacity = "0";
                            item.style.transform = "translateY(20px)";
                            setTimeout(() => {
                                item.style.display = "none";
                            }, 300);
                        }
                    });
                    
                    // Update URL without page reload for better UX
                    const url = new URL(window.location);
                    if (filter !== "all") {
                        url.searchParams.set("filter", filter);
                    } else {
                        url.searchParams.delete("filter");
                    }
                    window.history.replaceState({}, "", url);
                });
            });
            
            // Apply filter from URL on page load
            const urlParams = new URLSearchParams(window.location.search);
            const urlFilter = urlParams.get("filter");
            if (urlFilter) {
                const filterButton = document.querySelector(`[data-filter="${urlFilter}"]`);
                if (filterButton) {
                    filterButton.click();
                }
            }
        }

        // Smooth scrolling for anchor links with offset for fixed header
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener("click", function(e) {
                e.preventDefault();
                const href = this.getAttribute("href");
                
                if (href === "#") return;
                
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = document.querySelector("header")?.offsetHeight || 80;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth"
                    });
                    
                    // Close mobile menu if open
                    if (navMenu && navMenu.classList.contains("active")) {
                        navMenu.classList.remove("active");
                        navToggle.classList.remove("active");
                    }
                    
                    // Update focus for accessibility
                    target.focus();
                }
            });
        });

        // Intersection Observer for animations (if elements exist)
        const animatedElements = document.querySelectorAll('.video-item, .skill-category, .timeline-item, .achievement-item');
        if (animatedElements.length > 0) {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            
            animatedElements.forEach(el => observer.observe(el));
        }

        // Performance monitoring
        if ('performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData) {
                        console.log('Page Load Performance:', {
                            'DOM Content Loaded': perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
                            'Load Complete': perfData.loadEventEnd - perfData.loadEventStart,
                            'Total Load Time': perfData.loadEventEnd - perfData.fetchStart
                        });
                    }
                }, 0);
            });
        }

    } catch (error) {
        console.error('Error initializing main script:', error);
        // Fallback for critical functionality
        const navToggle = document.querySelector(".nav-toggle");
        const navMenu = document.querySelector(".nav-menu");
        if (navToggle && navMenu) {
            navToggle.addEventListener("click", () => {
                navMenu.classList.toggle("active");
            });
        }
    }
});