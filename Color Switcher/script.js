
const buttons = document.querySelectorAll('button');


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        //main.style.backgroundColor = e.target.backgroundColor
        //main.style.backgroundColor = 'green';
        document.body.style.backgroundColor = window.getComputedStyle(button).getPropertyValue('background-color');
    });
});
