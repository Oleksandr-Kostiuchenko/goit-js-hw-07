//TODO: Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//* Find elements & Add classes
const controls = document.querySelector('#controls');

const input = controls.querySelector('input');
input.classList.add('input-number');

const createBtn = controls.querySelector('[data-create]');
createBtn.classList.add('add-button');

const destroyBtn = controls.querySelector('[data-destroy]');
destroyBtn.classList.add('destroy-button');

