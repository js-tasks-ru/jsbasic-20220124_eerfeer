import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
    
        <div class="carousel__inner">
        </div>
      </div>`);

    const carouselInner = this.elem.querySelector('.carousel__inner');

    for (const slide of slides) {
      carouselInner.insertAdjacentHTML('beforeEnd', 
      `<div class="carousel__slide" data-id="penang-shrimp">
          <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${Number(slide.price).toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button" data-id="${slide.id}">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>`);
    }
    
    this.initArrowsEvents(carouselInner);
    this.initButtonsEvent(carouselInner.querySelectorAll('.carousel__button'));
  }

  initArrowsEvents(carouselInner) {
    const carouselArrowRight = this.elem.querySelector('.carousel__arrow_right'),
          carouselArrowLeft  = this.elem.querySelector('.carousel__arrow_left');
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

  initButtonsEvent(buttons) {
    for (let button of buttons) {
      button.addEventListener('click', () => {
        const e = new CustomEvent("product-add", { 
          detail: button.dataset.id, 
          bubbles: true 
        });
        this.elem.dispatchEvent(e);
      });
    }
  }
}
