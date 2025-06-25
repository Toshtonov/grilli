const slides = document.querySelectorAll('.slide');
let current = 0;
let interval = setInterval(showNextSlide, 4000); // avtomatik ketishi

function showNextSlide() {
    slides[current].classList.remove('active');
    slides[current].style.zIndex = 0;

    current = (current + 1) % slides.length;

    slides[current].classList.add('active');
    slides[current].style.zIndex = 1;
}

function showPrevSlide() {
    slides[current].classList.remove('active');
    slides[current].style.zIndex = 0;

    current = (current - 1 + slides.length) % slides.length;

    slides[current].classList.add('active');
    slides[current].style.zIndex = 1;
}