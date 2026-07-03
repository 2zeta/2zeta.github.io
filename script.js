const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const text = "Web Developer | Cybersecurity | Networking";
let i = 0;

function type() {
    if (i < text.length) {
        document.querySelector("h3").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 60);
    }
}

type();
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section, .project-card, .skill-card").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});