const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
let intervalId = 0;

btnStart.addEventListener('click', startSwitchingColor);
btnStop.addEventListener('click', stopSwitchingColor);

function startSwitchingColor() {
  btnStart.setAttribute('disabled', '');
  btnStop.removeAttribute('disabled');
  switchtColor();
  intervalId = setInterval(switchtColor, 1000);
}

function stopSwitchingColor() {
  btnStart.removeAttribute('disabled');
  btnStop.setAttribute('disabled', '');
  clearInterval(intervalId);
}

function switchtColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
