const inputEl = document.querySelector('#validation-input');
console.log(inputEl);

const inputLeng = inputEl.dataset.length;
  // console.log(inputEl.getAttribute('data-length'));

const inputValidationHandle = event => {
    let dataLeng = event.currentTarget.value.length;
    console.log(dataLeng);

    if (inputLeng <= dataLeng) {
        inputEl.classList.remove("invalid");
        return inputEl.classList.add("valid");

    } else if (inputLeng > dataLeng && dataLeng !== 0) {
        inputEl.classList.remove("valid");
        return inputEl.classList.add("invalid");

    } else {
        return inputEl.classList.remove("invalid");
    };
};

inputEl.addEventListener('blur', inputValidationHandle);

