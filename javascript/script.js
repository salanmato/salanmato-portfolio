const homeSection = document.getElementById('home')
const buttonHome = document.getElementById('home-button')

const sections = document.querySelectorAll('section')
let currentSection = 0

function moveToSection(index) {
    if (index >= 0 && index < sections.length) {
        sections[index].scrollIntoView({ behavior: 'smooth' })
        currentSection = index
    }
}

document.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
        moveToSection(currentSection + 1)
    } else {
        moveToSection(currentSection - 1)
    }
})

document.addEventListener("keyup", (event) => {
    if (event.key == "ArrowDown") {
        moveToSection(currentSection + 1)
    } else if (event.key == "ArrowUp") {
        moveToSection(currentSection - 1)
    }
})


const observerButtonHome = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            buttonHome.classList.add('hidden');
        } else {
            buttonHome.classList.remove('hidden');
        }
    });
}, {
    threshold: 0.9
});

observerButtonHome.observe(homeSection);
