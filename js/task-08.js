const controlRefs = {
    input: document.querySelector('input'),
    render: document.querySelector('button[data-action="render"]'),
    destroy: document.querySelector('button[data-action="destroy"]'),
};
const { input, render, destroy } = controlRefs;

const createBoxesHandler = amount => {
    amount = Number(input.value);
    console.log(amount);

    let boxSize = 30;

    boxes.innerHTML = [...Array(amount)]
        .map(() => {
            boxSize += 10;
            return `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: rgb(${colorHandler()});" ></div>`;
        })
        .join('')
};

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

render.addEventListener("click", createBoxesHandler);
destroy.addEventListener("click", destroyBoxesHandler);



