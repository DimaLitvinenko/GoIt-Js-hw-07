const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listRef = document.querySelector('#gallery');
// const markup = images
//   .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}" width="750" height="500"/></li>`)
//   .join("");
// console.log(markup);

listRef.insertAdjacentHTML(
  'beforeend',
  images
  .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}" width="750" height="500"/></li>`)
  .join("")
);

console.log(listRef.children);


listRef.classList.add('list__row');
listRef.style.listStyle = 'none';



