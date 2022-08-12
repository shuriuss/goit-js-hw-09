//!

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputTime = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

btnStart.addEventListener('click', handler);

let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let date = new Date();
    btnStart.disabled = true;
    // console.log(selectedDates[0]);
    if (timerId) {
      Notify.warning('Please reload the page');
      return;
    }
    if (selectedDates[0].getTime() <= date.getTime()) {
      Notify.failure('Please choose a date in the future');
      return;
    } else {
      btnStart.disabled = false;
    }
  },
};

flatpickr(inputTime, options);

function handler() {
  const dateFut = new Date(inputTime.value);
  timerId = setInterval(() => {
    const dateNow = new Date();
    const time = dateFut.getTime() - dateNow.getTime();
    if (time <= 0) {
      clearInterval(timerId);
      return;
    }
    convertMs(time);
  }, 1000);
  btnStart.disabled = true;
  return;
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

  daysEl.textContent = addLeadingZero(days);
  hoursEl.textContent = addLeadingZero(hours);
  minutesEl.textContent = addLeadingZero(minutes);
  secondsEl.textContent = addLeadingZero(seconds);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}





// //!

// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const inputTime = document.querySelector('#datetime-picker');
// const btnStart = document.querySelector('[data-start]');
// const daysEl = document.querySelector('[data-days]');
// const hoursEl = document.querySelector('[data-hours]');
// const minutesEl = document.querySelector('[data-minutes]');
// const secondsEl = document.querySelector('[data-seconds]');

// btnStart.addEventListener('click', handler)

// let timerId = null;

// const options = {
//    enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     let date = new Date();
//     btnStart.disabled = true;
//     // console.log(selectedDates[0]);
//     if (timerId) {
//       Notify.warning('Please reload the page');
//       return;
//     }

//     if (selectedDates[0].getTime() <= date.getTime()) {
//       Notify.failure('Please choose a date in the future');
//       return;
//     } else {
//       btnStart.disabled = false;

//       timerId = setInterval(() => {
//         date = new Date();
//         let time = selectedDates[0].getTime() - date.getTime();
//         if (time < 0) {
//           clearInterval(timerId);
//           return;
//         }
//         convertMs(time);
//       }, 1000);
//       return;
//     }
//   },
// };

// flatpickr(inputTime, options);

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   daysEl.textContent = addLeadingZero(days);
//   hoursEl.textContent = addLeadingZero(hours);
//   minutesEl.textContent = addLeadingZero(minutes);
//   secondsEl.textContent = addLeadingZero(seconds);

//   return { days, hours, minutes, seconds };
// }

// function addLeadingZero(value) {
//   return value.toString().padStart(2, '0');
// }