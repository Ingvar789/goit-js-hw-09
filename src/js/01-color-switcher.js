const body = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

btnStart.addEventListener('click', onStartClick);
btnStop.addEventListener('click', onStopClick);

btnStop.setAttribute('disabled', '');
const COLOR_DELAY = 1000;
let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStartClick() {
    btnStart.setAttribute('disabled', '');
    btnStop.removeAttribute('disabled', '');
    body.style.backgroundColor = getRandomHexColor();
    intervalId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, COLOR_DELAY);
}

function onStopClick() {
    btnStop.setAttribute('disabled', '');
    btnStart.removeAttribute('disabled', '');
    clearInterval(intervalId);
}