document.addEventListener('DOMContentLoaded', function() {
    const viewMoreBtn = document.getElementById('view-more-experience');
    const hiddenItems = document.querySelectorAll('.timeline-item.hidden');

    if (viewMoreBtn && hiddenItems.length > 0) {
        viewMoreBtn.addEventListener('click', function() {
            hiddenItems.forEach(item => {
                item.classList.toggle('show');
            });
            const isShown = hiddenItems[0].classList.contains('show');
            viewMoreBtn.textContent = isShown ? 'View Less' : 'View More Experience';
        });
    }

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.skill-category, .timeline-item, .client-category, .achievement-item');
        const options = {
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, options);
        
        elements.forEach(element => {
            observer.observe(element);
        });
    };
    
    // Call animation function
    animateOnScroll();
});
