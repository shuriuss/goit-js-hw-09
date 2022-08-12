import { Notify } from 'notiflix/build/notiflix-notify-aio';
const formEl = document.querySelector('.form');

formEl.addEventListener('submit', handler);

function handler(event) {
  event.preventDefault();
  const obj = {
    delay: Number(event.target.elements.delay.value),
    step: Number(event.target.elements.step.value),
    amount: Number(event.target.elements.amount.value),
  };

  for (let i = 0; i <= obj.amount; i += 1) {
    const newStep = obj.delay + obj.step * i;
    createPromise(i+1, newStep)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
