const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listRef = document.querySelector('#ingredients');
// 1
// const markup = ingredients
//   .map(ingredient => `<li>${ingredient}</li>`)
//   .join('');
// console.log(markup);

// listRef.innerHTML = markup;

// console.log(listRef.children);

// 2
const toMakeItems = (array) => array.map(elem => {
  const itemEl = document.createElement('li');
  itemEl.textContent = elem;

  return itemEl;
});

listRef.append(...toMakeItems(ingredients));

console.log(listRef.children);