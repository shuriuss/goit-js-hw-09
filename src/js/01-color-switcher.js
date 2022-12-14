//!Вариант 1

// const startEL = document.querySelector('[data-start]');
// const stopEL = document.querySelector('[data-stop]');
// const body = document.querySelector('body');
// let timerId = null;

// startEL.addEventListener('click', () => {
//   if (!timerId) {
//     timerId = setInterval(() => {
//       body.style.backgroundColor = getRandomHexColor();
//     }, 1000);
//   }
// });

// stopEL.addEventListener('click', () => {
//   clearInterval(timerId);
//   timerId = null;
// });

// function getRandomHexColor() {
//   console.log(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

//!Вариант 2

const startEL = document.querySelector('[data-start]');
const stopEL = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;

startEL.addEventListener('click', () => {
  startEL.disabled = true;
  stopEL.disabled = false;

  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopEL.addEventListener('click', () => {
  startEL.disabled = false;
  clearInterval(timerId);
 ;
});

function getRandomHexColor() {
  console.log(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
