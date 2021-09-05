const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const countNumber = document.getElementById('value');

let counterValue = 0;
const decrementButtonClickHandler = () => (countNumber.textContent = counterValue -= 1);
const incrementButtonClickHandler = () => (countNumber.textContent = counterValue += 1);

decrementBtn.addEventListener('click', decrementButtonClickHandler);
incrementBtn.addEventListener('click', incrementButtonClickHandler);


const container = document.getElementById('counter');
container.style.marginBottom = '5px';

const resetBtn = document.createElement('button');
resetBtn.type = 'button';
resetBtn.textContent = 'reset';
resetBtn.style.backgroundColor = 'indigo';
resetBtn.style.color = 'white';

container.after(resetBtn);

const resetButtonClickHandler = () => {
    const isConfirm = confirm('Do you want to reset this value?');

    if (isConfirm === true) {
        (countNumber.textContent = counterValue = 0);
    }
}

resetBtn.addEventListener('click', resetButtonClickHandler);