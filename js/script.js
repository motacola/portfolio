// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', currentTheme);

    // Update icon based on current theme
    const updateThemeIcon = (theme) => {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    };

    updateThemeIcon(currentTheme);

    // Theme toggle click handler
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';

            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    // Navigation toggle for mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle) {
        const toggleMenu = () => {
            navMenu.classList.toggle('active');
            const isActive = navMenu.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isActive);

            // Animate hamburger to X
            const spans = navToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
        };

        navToggle.addEventListener('click', toggleMenu);

        // Keyboard accessibility for nav toggle
        navToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMenu();
            }
        });
    }
    
    // Scroll header effect and progress indicator
    const scrollProgress = document.getElementById('scrollProgress');

    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Update scroll progress indicator
        if (scrollProgress) {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            scrollProgress.style.width = scrolled + '%';
        }
    });
    
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const videoItems = document.querySelectorAll('.video-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filter videos
            videoItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Lazy load YouTube videos for better performance
    const lazyLoadVideos = () => {
        const videoContainers = document.querySelectorAll('.video-container');

        const videoObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const container = entry.target;
                    const iframe = container.querySelector('iframe');
                    const overlay = container.querySelector('.video-overlay');

                    // Load iframe src from data attribute
                    if (iframe && iframe.dataset.src) {
                        iframe.src = iframe.dataset.src;
                        iframe.removeAttribute('data-src');
                    }

                    // Add click handler for play button
                    if (overlay && iframe) {
                        overlay.addEventListener('click', function() {
                            const src = iframe.src;

                            // Add autoplay parameter
                            if (src && src.indexOf('autoplay=1') === -1) {
                                iframe.src = src + (src.indexOf('?') !== -1 ? '&' : '?') + 'autoplay=1';
                            }

                            // Hide overlay with animation
                            overlay.style.opacity = '0';
                            setTimeout(() => {
                                overlay.style.display = 'none';
                            }, 300);
                        });
                    }

                    observer.unobserve(container);
                }
            });
        }, {
            rootMargin: '50px' // Start loading 50px before video enters viewport
        });

        videoContainers.forEach(container => {
            videoObserver.observe(container);
        });
    };

    // Initialize lazy loading
    lazyLoadVideos();
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formStatus = document.getElementById('formStatus');
            const formData = new FormData(contactForm);

            // Show loading state
            formStatus.textContent = 'Sending message...';
            formStatus.className = 'form-status';
            formStatus.style.display = 'block';

            // Simulate form submission (replace with actual backend endpoint)
            setTimeout(() => {
                // Success simulation
                formStatus.textContent = 'Thank you! Your message has been sent successfully.';
                formStatus.className = 'form-status success';
                contactForm.reset();

                // Hide success message after 5 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);

                // For actual implementation, use:
                /*
                fetch('your-backend-endpoint.php', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        formStatus.textContent = 'Thank you! Your message has been sent successfully.';
                        formStatus.className = 'form-status success';
                        contactForm.reset();
                    } else {
                        formStatus.textContent = 'Sorry, there was an error sending your message. Please try again.';
                        formStatus.className = 'form-status error';
                    }
                })
                .catch(error => {
                    formStatus.textContent = 'Sorry, there was an error sending your message. Please try again.';
                    formStatus.className = 'form-status error';
                });
                */
            }, 1000);
        });
    }
    
    // Initialize animations for elements
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.video-item, .hero h1, .hero p');
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
    
    // Call animation functions
    animateOnScroll();
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });
});
