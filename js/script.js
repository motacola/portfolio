document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector(".nav-toggle"),
        navMenu = document.querySelector(".nav-menu");
    navToggle && navToggle.addEventListener("click", function() {
        navMenu.classList.toggle("active"), navToggle.classList.toggle("active")
    }), window.addEventListener("scroll", function() {
        const t = document.querySelector("header");
        window.scrollY > 50 ? t.classList.add("scrolled") : t.classList.remove("scrolled")
    });
    const filterButtons = document.querySelectorAll(".filter-btn"),
        videoItems = document.querySelectorAll(".video-item");
    filterButtons.forEach(t => {
        t.addEventListener("click", function() {
            filterButtons.forEach(t => t.classList.remove("active")), this.classList.add("active");
            const t = this.getAttribute("data-filter");
            videoItems.forEach(e => {
                "all" === t || e.getAttribute("data-category") === t ? (e.style.display = "block", setTimeout(() => {
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
    });

    function loadVideo() {
        const videoContainer = this.parentElement;
        const videoId = this.dataset.videoid;
        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "");
        iframe.setAttribute("allow", "autoplay; encrypted-media");
        videoContainer.innerHTML = "";
        videoContainer.appendChild(iframe);
    }

    document.querySelectorAll(".video-poster").forEach(poster => {
        poster.addEventListener("click", loadVideo);
    });
});