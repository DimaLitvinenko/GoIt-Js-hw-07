const listEl = document.querySelector('#categories');
console.log(listEl);
// console.log(listEl.children);


const itemsRef = document.querySelectorAll('.item');
console.log(`В списке ${itemsRef.length} категории.`);


const titleEl = document.querySelectorAll("h2");
// console.log(`Категория:`, titleEl[0].textContent);
// console.log(`Количество элементов:`, titleEl[0].nextElementSibling.children.length);

// console.log(`Категория:`, titleEl[1].textContent);
// console.log(`Количество элементов:`, titleEl[2].nextElementSibling.children.length);

// console.log(`Категория:`, titleEl[2].textContent);
// console.log(`Количество элементов:`, titleEl[2].nextElementSibling.children.length);

const itemsContent = titleEl.forEach(elem => console.log(
    `Категория: ${elem.textContent}
Количество елементов: ${elem.nextElementSibling.children.length}`
));

