document.addEventListener("DOMContentLoaded", function() {
    // Typed.js for Typewriter Effect
    new Typed("#typed-text", {
        strings: ["a developer.", "an artist.", "the code alchemist."],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        loop: true
    });

    // Particles.js for Background Effect
    particlesJS("particles-js", {
        particles: {
            number: { value: 100 },
            size: { value: 3 },
            move: { speed: 1.5 },
            line_linked: { enable: true, color: "#ffffff" }
        }
    });

    // Burger Menu Toggle
    const burger = document.getElementById("burger");
    const mobileMenu = document.getElementById("mobile-menu");

    burger.addEventListener("click", function() {
        burger.classList.toggle("burger-active");
        mobileMenu.classList.toggle("hidden");
    });
});
