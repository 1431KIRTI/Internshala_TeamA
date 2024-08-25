const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

prevButton.addEventListener('click', () => {
    if (currentIndex === 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex--;
    }
    updateSlider();
});

nextButton.addEventListener('click', () => {
    if (currentIndex === slides.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateSlider();
});

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
