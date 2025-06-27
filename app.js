const slides = document.querySelectorAll('.slide');
const contents = document.querySelectorAll('.slide-content');
let index = 0;

const fadeClasses = ['fade-up', 'fade-up2', 'fade-up3', 'fade-up4'];

function showSlide(i) {
  slides.forEach((slide, sIdx) => {
    slide.classList.toggle('active', sIdx === i);
  });

  contents.forEach((content, cIdx) => {
    const isActive = cIdx === i;
    content.classList.toggle('active', isActive);

    fadeClasses.forEach(fadeClass => {
      const elements = content.querySelectorAll(`.${fadeClass}`);
      elements.forEach(el => {
        el.classList.remove('show');
        void el.offsetWidth;
        if (isActive) {
          setTimeout(() => el.classList.add('show'), 100);
        }
      });
    });
  });
}

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 5000);

window.addEventListener('load', () => showSlide(index));
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

nextBtn.addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

let autoSlide = setInterval(nextSlide, 5000);

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 5000);
}
