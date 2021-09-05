const inputEl = document.getElementById('font-size-control');
console.log(inputEl.value);

const textEl = document.getElementById('text');
console.log(textEl.style);

const valueRangeHandler = (event) => textEl.style.fontSize = `${event.currentTarget.value}px`;

inputEl.addEventListener('input', valueRangeHandler);