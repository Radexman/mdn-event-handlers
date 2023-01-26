// const input = document.querySelector('.input');
// const output = document.querySelector('.output');
// const outputTwo = document.querySelector('.outputTwo');
// const container = document.querySelector('.container');
// const button = document.querySelector('button');
// console.log(button);

// function random(number) {
//     return Math.floor(Math.random() * number + 1);
// }

// function changeBackground(event) {
//     const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//     event.target.style.backgroundColor = randomColor;
//     console.log(event);
// }

// for (const button of buttons) {
//     button.addEventListener('click', changeBackground);
// }

// input.addEventListener('keydown', (event) => {
//     output.textContent = `You pressed ${event.key}`;
// })

// function handleClick(event) {
//     outputTwo.textContent = `You clicked on a ${event.currentTarget.tagName} element\n`;
// }

// document.body.addEventListener('click', handleClick);
// container.addEventListener('click', handleClick);
// button.addEventListener('click', handleClick);

// const output = document.querySelector('#output');
// function handleClick(e) {
//   output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
// }

// const container = document.querySelector('#container');
// const button = document.querySelector('button');

// document.body.addEventListener('click', handleClick, { capture: true });
// container.addEventListener('click', handleClick, { capture: true });
// button.addEventListener('click', handleClick);

// const container = document.querySelector('.container');
// console.log(container);

// function random(number) {
//     return Math.floor(Math.random() * number + 1);
// }

// function bgChange() {
//     const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//     return randomColor;
// }

// container.addEventListener('click', (event) => {
//     event.target.style.backgroundColor = bgChange();
// })

const button = document.querySelector('button');

button.addEventListener('click', () => {
    if (button.className === 'on') {
        button.textContent = 'Machine is off';
        button.className = 'off';
    } else {
        button.textContent = 'Machine is on';
        button.className = 'on';
    }
})