window.addEventListener('load', () => {
    // Smooth scroll to section
    function scrollToSection(id) {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
    }

    const buttons = document.querySelectorAll('[data-scroll]');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-scroll');
            scrollToSection(targetId);
        });
    });

    // Smooth scroll to the top
    const scrollToTopButton = document.getElementById("scrollToTop");

    if (scrollToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollToTopButton.classList.add('active');
            } else {
                scrollToTopButton.classList.remove('active');
            }
        });

        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'particles.json', function () {
        console.log('callback - particles.js config loaded');
    });
});
