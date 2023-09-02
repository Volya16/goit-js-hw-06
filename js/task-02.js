const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
console.log(list);

const markup = ingredients.map(element => {
  const li = document.createElement('li')
  li.textContent = element;
  li.classList.add('item')
  console.log(li);
  console.log(element);
  return li
})

list.append(...markup);
console.log(markup);