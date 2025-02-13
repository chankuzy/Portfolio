// Smooth Scrolling
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// GSAP Animations
gsap.from(".glitch-text", { opacity: 0, y: -50, duration: 1 });
gsap.from(".hero-img-container", { opacity: 0, scale: 0.8, duration: 1, delay: 0.5 });
gsap.from(".btn", { opacity: 0, y: 30, duration: 1, delay: 0.8 });

// Scroll Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".section", {
    scrollTrigger: ".section",
    opacity: 0,
    y: 50,
    duration: 1
});

// Particles.js Effect
particlesJS("particles-js", {
    particles: {
        number: { value: 100 },
        size: { value: 3 },
        move: { speed: 2 }
    }
});