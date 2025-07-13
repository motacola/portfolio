document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle"),
        navMenu = document.querySelector(".nav-menu");
    navToggle && navToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active"), navToggle.classList.toggle("active")
    }), window.addEventListener("scroll", function () {
        const e = document.querySelector("header");
        window.scrollY > 50 ? e.classList.add("scrolled") : e.classList.remove("scrolled")
    });
    const filterButtons = document.querySelectorAll(".filter-btn"),
        videoItems = document.querySelectorAll(".video-item");
    filterButtons.forEach(e => {
        e.addEventListener("click", function () {
            filterButtons.forEach(e => e.classList.remove("active")), this.classList.add("active");
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
    const hashLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    hashLinks.forEach(e => {
        e.addEventListener("click", t => {
            t.preventDefault();
            const o = e.getAttribute("href"),
                c = document.querySelector(o);
            if (c) {
                const n = c.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({
                    top: n,
                    behavior: "smooth"
                }), history.pushState(null, "", o)
            }
        })
    })
});
