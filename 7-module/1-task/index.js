import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = createElement(`
      <div class="ribbon">
        <!--Кнопка прокрутки влево-->
        <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>

        <!--Ссылки на категории-->
        <nav class="ribbon__inner">
        </nav>

        <!--Кнопка прокрутки вправо-->
        <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
      </div>`);
    
    const innerElem = this.elem.querySelector('.ribbon__inner');
    for (const category of this.categories) {
      innerElem.insertAdjacentHTML(
        `beforeend`, 
        `<a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>`
      );
      const a = innerElem.lastChild;  
      a.onclick = (e) => {
        e.preventDefault();
        const previousActive = document.querySelector('.ribbon__item_active');
        if (previousActive)
          previousActive.classList.remove('ribbon__item_active');
        a.classList.add('ribbon__item_active');
        const event = new CustomEvent('ribbon-select', {
          detail: e.target.dataset.id, 
          bubbles: true 
        });
        this.elem.dispatchEvent(event);
      }
    }
    
    const lArrow = this.elem.querySelector('.ribbon__arrow_left');
    lArrow.onclick = () => {
      innerElem.scrollBy(-350, 0);
      if (innerElem.scrollLeft === 0)
        lArrow.classList.remove('ribbon__arrow_visible');
      else rArrow.classList.add('ribbon__arrow_visible');
    };
    const rArrow = this.elem.querySelector('.ribbon__arrow_right');
    rArrow.onclick = () => {
      innerElem.scrollBy(350, 0);
      if ((innerElem.scrollWidth - innerElem.scrollLeft - innerElem.clientWidth) < 1)
        rArrow.classList.remove('ribbon__arrow_visible');
      else lArrow.classList.add('ribbon__arrow_visible');
    };

    
  }
}
