const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

hamburgerButton.addEventListener('click' ,() => {
navList.classList.toggle('show');
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.hero-text, .button, .logo-area, .about-title, .sub, .cv, .about-img, .icons, .project-title, .card, .project-title, .social, .social-mail`,{
    interval: 100
})

// text typing

const spnText = document.querySelector('.sub');
const txt = 'Prowadząc własną działalność gospodarczą zacząłem interesować się zagadnieniami z branży IT. Uważam ,że jest to dziedzina dająca możliwość nieustannego rozwoju. Głównie interesują mnie technologie frontendowe, w których od roku stale się rozwijam. Kilka moich projektów komercyjnych, wykonannych na zlecenie przyjaciół znajdziesz poniżej. '

// Parametry
let indexText = 0;
const time = 40;

// Implementacja
const addLetter = () => {
 spnText.textContent += txt[indexText];
 indexText++;
 if (indexText === txt.length) clearInterval(indexTyping);
}
const indexTyping = setInterval(addLetter, time);

