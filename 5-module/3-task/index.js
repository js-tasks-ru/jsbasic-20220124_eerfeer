function initCarousel() {
  const carouselInner = document.querySelector('.carousel__inner');
  const carouselArrowRight = document.querySelector('.carousel__arrow_right'),
        carouselArrowLeft  = document.querySelector('.carousel__arrow_left');
  const slides = carouselInner.children;
  let currentSlideNumber = 0;

  if (currentSlideNumber === 0) 
    carouselArrowLeft.style.display = 'none';

  if (currentSlideNumber === (slides.length - 1)) 
    carouselArrowRight.style.display = 'none';
  

  carouselArrowLeft.onclick = () => {        
    carouselArrowLeft.style.display = 'flex';
    carouselArrowRight.style.display = 'flex';
    currentSlideNumber--;
    carouselInner.style.transform = `translateX(${-slides[currentSlideNumber].offsetWidth*currentSlideNumber}px)`;
    if (currentSlideNumber === 0) {
      carouselArrowRight.style.display = 'flex';
      carouselArrowLeft.style.display = 'none';
      return;
    }
  }

  carouselArrowRight.onclick = () => {        
    carouselArrowLeft.style.display = 'flex';
    carouselArrowRight.style.display = 'flex';
    currentSlideNumber++;
    carouselInner.style.transform = `translateX(${-slides[currentSlideNumber].offsetWidth*currentSlideNumber}px)`;
    if (currentSlideNumber === (slides.length - 1)) {
      carouselArrowLeft.style.display = 'flex';
      carouselArrowRight.style.display = 'none';
      return;
    }
  }
}
