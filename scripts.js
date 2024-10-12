// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example interactive animations (optional)
window.addEventListener('scroll', () => {
    document.querySelectorAll('.fade-in').forEach(elem => {
        const position = elem.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (position < screenPosition) {
            elem.classList.add('active');
        }
    });
});
