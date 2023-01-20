const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
stopBtn.disabled = true;
let intervalID;

startBtn.addEventListener('click', event => {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  intervalID = setInterval(switchColorOnBody, 1000);
});

stopBtn.addEventListener('click', event => {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(intervalID);
});

function switchColorOnBody() {
  const body = document.querySelector('body');
  body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
