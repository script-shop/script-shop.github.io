export const classRemove = [
  { el: 'body', classes: ['flex-padded', 'padded'] },
  { el: 'aside', classes: ['flex-padded'] },
  { el: 'header', classes: ['shadowed', 'rounded'] },
  { el: '.mob', classes: ['fixed'] },
  { el: '.bar', classes: ['shadowed'] },
  {
    el: '.mob > *',
    classes: ['fixed', 'shadowed', 'padded', 'rounded', 'hidden'],
  },
];

export const classAdd = [
  { el: '.bar', classes: ['across'] },
  { el: 'header', classes: ['fixed', 'across'] },
  { el: '.search-and-filter', classes: ['fixed'] },
  { el: 'nav', classes: ['fixed', 'across', 'padded'] },
  { el: '.mob', classes: ['shadowed', 'rounded', 'across'] },
];
