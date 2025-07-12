document.addEventListener("DOMContentLoaded", function() {
    // Mobile menu toggle
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");
    
    if (navToggle) {
        navToggle.addEventListener("click", function() {
            navMenu.classList.toggle("active");
            navToggle.classList.toggle("active");
        });
    }

    // Throttle function to limit how often a function can fire
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // Header scroll effect with throttling
    const headerScrollHandler = throttle(function() {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }, 16); // ~60fps throttling

    window.addEventListener("scroll", headerScrollHandler);

    // Filter buttons functionality
    const filterButtons = document.querySelectorAll(".filter-btn");
    const videoItems = document.querySelectorAll(".video-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            
            // Add active class to clicked button
            this.classList.add("active");
            
            const filterValue = this.getAttribute("data-filter");
            
            // Filter video items with smooth animation
            videoItems.forEach(item => {
                const category = item.getAttribute("data-category");
                
                if (filterValue === "all" || category === filterValue) {
                    item.style.display = "block";
                    // Use requestAnimationFrame for smooth animation
                    requestAnimationFrame(() => {
                        item.style.opacity = "1";
                        item.style.transform = "translateY(0)";
                    });
                } else {
                    item.style.opacity = "0";
                    item.style.transform = "translateY(20px)";
                    setTimeout(() => {
                        item.style.display = "none";
                    }, 300);
                }
            });
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            
            const href = this.getAttribute("href");
            if (href === "#") return;
            
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
                
                // Close mobile menu if open
                if (navMenu.classList.contains("active")) {
                    navMenu.classList.remove("active");
                    navToggle.classList.remove("active");
                }
            }
        });
    });
});