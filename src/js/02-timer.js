import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const btnStart = document.querySelector('button[data-start]');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');
let intervalId = 0;
let remainedMilliseconds;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const dateNow = new Date();
    if (selectedDates[0].getTime() > dateNow.getTime()) {
      btnStart.removeAttribute('disabled');
      return;
    }

    btnStart.setAttribute('disabled', '');
    Notiflix.Notify.failure('Please choose a date in the future!');
  },
};

const datePicker = flatpickr('input#datetime-picker', options);

btnStart.addEventListener('click', initializeTimer);

function initializeTimer() {
  btnStart.setAttribute('disabled', '');
  const dateNow = new Date();
  remainedMilliseconds =
    datePicker.selectedDates[0].getTime() - dateNow.getTime();

  if (intervalId) clearInterval(intervalId);

  intervalId = setInterval(startTimer, 1000);
}

function startTimer() {
  if (remainedMilliseconds <= 0) {
    clearInterval(intervalId);
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(remainedMilliseconds);

  daysEl.textContent = addLeadingZero(days);
  hoursEl.textContent = addLeadingZero(hours);
  minutesEl.textContent = addLeadingZero(minutes);
  secondsEl.textContent = addLeadingZero(seconds);

  remainedMilliseconds -= 1000;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
