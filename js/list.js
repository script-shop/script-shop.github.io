export const classRemove = [
  { el: 'body', classes: ['flex-padded', 'padded'] },
  { el: 'aside', classes: ['flex-padded'] },
  { el: 'header', classes: ['shadowed', 'rounded'] },
  { el: '.mob', classes: ['fixed'] },
  { el: '.bar', classes: ['shadowed'] },
  { el: '.middle > li', classes: ['across'] },
  { el: '.bottom > li', classes: ['across'] },
  {
    el: '.mob > *',
    classes: ['fixed', 'shadowed', 'padded', 'rounded', 'hidden'],
  },
];

export const classAdd = [
  { el: '.bar', classes: ['across'] },
  { el: 'header', classes: ['fixed', 'across'] },
  { el: '.content-header > div > i', classes: ['hidden'] },
  { el: '.search-and-filter', classes: ['fixed'] },
  { el: 'nav', classes: ['fixed', 'across', 'padded'] },
  { el: '.mob', classes: ['shadowed', 'rounded', 'across'] },
  { el: 'span', classes: ['hidden'] },
  { el: '.nav > li', classes: ['between'] },
];
