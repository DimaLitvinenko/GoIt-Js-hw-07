const inputEl = document.getElementById('validation-input');
console.log(inputEl);

const inputLeng = inputEl.dataset.length;
  // console.log(inputEl.getAttribute('data-length'));

const inputValidationHandle = event => {
    let dataLeng = event.currentTarget.value.length;
    console.log(dataLeng);

    if (inputLeng <= dataLeng) {
        // inputEl.classList.remove("invalid");
        return inputEl.classList.toggle("valid");

    } else if (inputLeng > dataLeng && dataLeng !== 0) {
        // inputEl.classList.remove("valid");
        return inputEl.classList.toggle("invalid");
    } 
        
    
};

inputEl.addEventListener('blur', inputValidationHandle);


// `border` становиться зеленым только,
//  когда введённое количество символов строго равно символам указаным в атрибуте инпута `data-length`
//  не больше и не меньше