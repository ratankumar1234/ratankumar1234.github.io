// 1. Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 2. Scroll Reveal Animation Logic
function revealElements() {
    const reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150; // Element appears when 150px from bottom of viewport

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            // Optional: remove 'active' class if you want elements to disappear on scroll-up
            // reveals[i].classList.remove('active'); 
        }
    }
}

// Add event listeners
window.addEventListener('scroll', revealElements);
// Run on load to check for elements already in view
revealElements();