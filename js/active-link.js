document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section[id]");
    const navLi = document.querySelectorAll("nav .nav-menu li a");
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });
        navLi.forEach((a) => {
            a.classList.remove("nav__item--active");
            if (a.getAttribute("href").includes(current)) {
                a.classList.add("nav__item--active");
            }
        });
    });
});
