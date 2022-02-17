let isMobile = window.outerWidth <= 600;
let classMobile = isMobile;
import { classRemove, classAdd } from './list.js';

const remove = (item) =>
  document
    .querySelectorAll(item.el)
    .forEach((query) => query.classList.remove(...item.classes));

const add = (item) =>
  document
    .querySelectorAll(item.el)
    .forEach((query) => query.classList.add(...item.classes));

const setMobile = () => {
  if (isMobile) {
    classRemove.map((item) => remove(item));
    classAdd.map((item) => add(item));
  } else {
    classRemove.map((item) => add(item));
    classAdd.map((item) => remove(item));
  }

  classMobile = isMobile;
};

setMobile();

window.addEventListener('resize', (e) => {
  isMobile = e.target.outerWidth < 600;
  console.log(window.outerWidth);
  isMobile != classMobile && setMobile();
});
