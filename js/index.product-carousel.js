const slides = [
  '<div><img src="img/baby-yoda.svg" alt="Baby Yoda"></div>',
  '<div><img src="img/banana.svg" alt="Banana"></div>',
  '<div><img src="img/girl.svg" alt="Girl"></div>',
  '<div><img src="img/viking.svg" alt="Viking"></div>',
];

let currentIndex = 0;

function renderSlide() {
  const slideContainer = document.querySelector(".product-carousel__slides");
  slideContainer.innerHTML = slides[currentIndex];
  if (window.matchMedia("(min-width: 768px)").matches) {
    const secondSlideIndex =
      currentIndex + 1 >= slides.length ? 0 : currentIndex + 1;
    slideContainer.innerHTML += slides[secondSlideIndex];
    if (window.matchMedia("(min-width: 980px)").matches) {
      const thirdSlideIndex =
        secondSlideIndex + 1 >= slides.length ? 0 : secondSlideIndex + 1;
      slideContainer.innerHTML += slides[thirdSlideIndex];
    }
  }
}

function nextSlide() {
  currentIndex = currentIndex + 1 >= slides.length ? 0 : currentIndex + 1;
  renderSlide();
}

function prevSlide() {
  currentIndex = currentIndex - 1 < 0 ? slides.length - 1 : currentIndex - 1;
  renderSlide();
}

// setInterval(nextSlide, 3000);

renderSlide();

const btnNext = document.querySelector(".product-carousel__btn-next");
const btnPrev = document.querySelector(".product-carousel__btn-prev");

btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide);

window.addEventListener('resize', renderSlide);
