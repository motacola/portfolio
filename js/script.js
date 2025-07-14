document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector(".nav-toggle"),
        navMenu = document.querySelector(".nav-menu"),
        navLinks = document.querySelectorAll(".nav-menu a");

    navToggle && navToggle.addEventListener("click", function() {
        navMenu.classList.toggle("active"), navToggle.classList.toggle("active")
    });

    window.addEventListener("scroll", function() {
        const header = document.querySelector("header");
        window.scrollY > 50 ? header.classList.add("scrolled") : header.classList.remove("scrolled");

        let current = "";
        document.querySelectorAll("section").forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    const filterButtons = document.querySelectorAll(".filter-btn"),
        videoItems = document.querySelectorAll(".video-item");
    filterButtons.forEach(t => {
        t.addEventListener("click", function() {
            filterButtons.forEach(t => t.classList.remove("active")), this.classList.add("active");
            const filter = this.getAttribute("data-filter");
            videoItems.forEach(e => {
                "all" === filter || e.getAttribute("data-category") === filter ? (e.style.display = "block", setTimeout(() => {
                    e.style.opacity = "1", e.style.transform = "translateY(0)"
                }, 100)) : (e.style.opacity = "0", e.style.transform = "translateY(20px)", setTimeout(() => {
                    e.style.display = "none"
                }, 300))
            })
        })
    });

    document.querySelectorAll('a[href^="#"]').forEach(t => {
        t.addEventListener("click", function(t) {
            t.preventDefault();
            const o = this.getAttribute("href");
            if ("#" === o) return;
            const c = document.querySelector(o);
            c && (window.scrollTo({
                top: c.offsetTop - 80,
                behavior: "smooth"
            }), navMenu.classList.contains("active") && navMenu.classList.remove("active"))
        })
    })
});