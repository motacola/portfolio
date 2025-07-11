// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Navigation toggle for mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Scroll header effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
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
    
    // Video play functionality
    const videoContainers = document.querySelectorAll('.video-container');
    
    videoContainers.forEach(container => {
        const overlay = container.querySelector('.video-overlay');
        const iframe = container.querySelector('iframe');
        
        if (overlay && iframe) {
            overlay.addEventListener('click', function() {
                // Get the current src
                const src = iframe.src;
                
                // Add autoplay parameter if not already present
                if (src.indexOf('autoplay=1') === -1) {
                    iframe.src = src + (src.indexOf('?') !== -1 ? '&' : '?') + 'autoplay=1';
                }
                
                // Hide overlay
                overlay.style.opacity = '0';
                setTimeout(() => {
                    overlay.style.display = 'none';
                }, 300);
            });
        }
    });
    
    // Lazy load videos for better performance
    const lazyLoadVideos = () => {
        const videoItems = document.querySelectorAll('.video-item');
        const options = {
            rootMargin: '100px 0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const iframe = entry.target.querySelector('iframe');
                    const src = iframe.getAttribute('data-src');
                    
                    if (src) {
                        iframe.src = src;
                        iframe.removeAttribute('data-src');
                    }
                    
                    observer.unobserve(entry.target);
                }
            });
        }, options);
        
        videoItems.forEach(item => {
            observer.observe(item);
        });
    };
    
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
    lazyLoadVideos();
    
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
