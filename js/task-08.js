
// Переписать задание 8, реализовав функционал, при котором дивы не перерисовываются,
// а дорисовываются к отрендеренным ранее.

const controlRefs = {
    input: document.querySelector('input'),
    render: document.querySelector('button[data-action="render"]'),
    destroy: document.querySelector('button[data-action="destroy"]'),
    boxes: document.querySelector('#boxes'),
};
const { input, render, destroy, boxes } = controlRefs;



const createBoxesHandler = (amount) => {
    amount = input.value;
    console.log(`input.value:`, amount);

    let boxSize = 30;
    const elements = [];
    for (let i = 1; i <= amount; i += 1) {

        console.log(`amount`, amount);
        console.log(`i`, i); // = (input.value === кол-во элементов)
        // console.log(amount === i);
        boxSize += 10;
       
        const boxEl = document.createElement('div');
        boxEl.style.width = `${boxSize}px`;
        boxEl.style.height = `${boxSize}px`;
        boxEl.style.backgroundColor = `rgb(${colorHandler()})`;

        boxEl.style.border = ('2px ridge blue');
        boxEl.style.marginTop = ('5px');
            
        elements.push(boxEl);
        
    };
    
    console.log(elements);
    return boxes.append(...elements);
    
};


// const createBoxesHandler = (amount) => {
//     amount = Number(input.value);
//     console.log(amount);
//     let boxSize = 30;
//     boxes.innerHTML = [...Array(amount)]
//         .map(() => {
//             boxSize += 10;
//             return `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: rgb(${colorHandler()});" ></div>`;
//         })
//         .join('')
// };


const destroyBoxesHandler = () => {
    boxes.innerHTML = '';
};

const colorHandler = () => {
    const r = Math.round(Math.random() * (256));
    const g = Math.round(Math.random() * (256));
    const b = Math.round(Math.random() * (256));
    console.log([r, g, b]);

    return [r, g, b];
};

render.addEventListener('click', createBoxesHandler);
destroy.addEventListener('click', destroyBoxesHandler);



