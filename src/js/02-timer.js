import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const selector = document.getElementById('datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysField = document.querySelector('[data-days]');
const hoursField = document.querySelector('[data-hours]');
const minutesField = document.querySelector('[data-minutes]');
const secondsField = document.querySelector('[data-seconds]');
startBtn.addEventListener('click', updateTimer);
startBtn.disabled = true;
let timestampInFuture = new Date();
let intervalID = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      alert('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      clearInterval(intervalID);
      timestampInFuture = selectedDates[0];
      startBtn.disabled = false;
      daysField.textContent = '00';
      hoursField.textContent = '00';
      minutesField.textContent = '00';
      secondsField.textContent = '00';
    }
  },
};

flatpickr(selector, options);

function updateTimer(event) {
  const msIn1Day = 86400000;
  const msIn1Hour = 3600000;
  const msIn1Minute = 60000;
  const msIn1Second = 1000;

  startBtn.disabled = true;

  intervalID = setInterval(() => {
    const nowTime = new Date();

    if (timestampInFuture <= nowTime) {
      clearInterval(intervalID);
    } else {
      const futureTime = new Date(timestampInFuture);
      const timeDiff = futureTime - nowTime;

      let remainder = timeDiff % msIn1Day;
      daysField.textContent = addLeadingZero((timeDiff - remainder) / msIn1Day);

      let prevRem = remainder;
      remainder = remainder % msIn1Hour;
      hoursField.textContent = addLeadingZero(
        (prevRem - remainder) / msIn1Hour
      );

      prevRem = remainder;
      remainder = remainder % msIn1Minute;
      minutesField.textContent = addLeadingZero(
        (prevRem - remainder) / msIn1Minute
      );

      prevRem = remainder;
      remainder = remainder % msIn1Second;
      secondsField.textContent = addLeadingZero(
        (prevRem - remainder) / msIn1Second
      );
    }
  }, 1000);
}

function addLeadingZero(num) {
  return num < 10 ? String(`0${num}`) : String(num);
}
