const inputRef = document.querySelector('#name-input');
console.log(inputRef);

const outputRef = document.querySelector('#name-output');
console.log(outputRef);
console.log(outputRef.textContent);

const valueInputHandler = (event) => {
    (event.currentTarget.value === '')
        ? outputRef.textContent = 'незнакомец'
        : outputRef.textContent = event.currentTarget.value;
};

inputRef.addEventListener("input", valueInputHandler);
