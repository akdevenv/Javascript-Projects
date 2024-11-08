const buttons = document.querySelectorAll('button');
const main = document.querySelector("#main");


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        //main.style.backgroundColor = e.target.backgroundColor
        //main.style.backgroundColor = 'green';
        main.style.backgroundColor = window.getComputedStyle(button).getPropertyValue('background-color');
    });
});