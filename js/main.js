const container = document.querySelector('.container');
const navBtns = document.querySelector('.mob').children;
const list = [];
const toTop = document.querySelector('[data-top]');
const vh = 0.3 * window.outerHeight;

const datasetName = (data) =>
  Object.getOwnPropertyNames(JSON.parse(JSON.stringify(data)))[0].split(
    'Btn'
  )[0];

for (let i in navBtns)
  navBtns[i].dataset && list.push(datasetName(navBtns[i].dataset));

for (let i in list) {
  document
    .querySelector(`[data-${list[i]}-btn]`)
    .addEventListener('click', (e) => {
      const target = datasetName(e.target.dataset);
      const targetClass = document.querySelector(`[data-${target}]`).classList;
      if (target == 'top') {
        window.scroll({
          top: vh - 1,
        });
        container.scroll({
          top: 0,
        });
      } else {
        for (let j in list) {
          if (list[j] != target && list[j] != 'top') {
            document
              .querySelector(`[data-${list[j]}]`)
              .classList.add('mob-hidden');
          }
          targetClass.toggle('mob-hidden');
        }
      }
      const parentClass = e.target.parentElement.parentElement.classList;

      if (targetClass.contains('bar') && !targetClass.contains('mob-hidden')) {
        parentClass.add('round-bottom');
        e.target.parentElement.classList.remove('rounded');
      } else {
        parentClass.remove('round-bottom');
        e.target.parentElement.classList.add('rounded');
      }
    });
}

window.onscroll = () => {
  scrollY < vh
    ? toTop.classList.add('hidden')
    : toTop.classList.remove('hidden');
};

container.onscroll = () => {
  container.scrollTop < 10
    ? toTop.classList.add('hidden')
    : toTop.classList.remove('hidden');
};

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw_cached_site.js');
  });
}
