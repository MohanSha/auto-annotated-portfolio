document.addEventListener('DOMContentLoaded', () => {
    // Reveal sections on scroll
    const sections = document.querySelectorAll('section');
    
    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15,
    });

    sections.forEach(section => {
        section.classList.add('section-reveal');
        sectionObserver.observe(section);
    });

    // Floating hearts animation
    const createHeart = () => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 3 + 's';
        document.querySelector('.floating-hearts').appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    };

    setInterval(createHeart, 300);
}); 