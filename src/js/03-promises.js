import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', createPromises);

function createPromises(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;

  const delay = parseInt(elements.delay.value);
  const step = parseInt(elements.step.value);
  const amount = parseInt(elements.amount.value);

  for (let i = 0; i < amount; i += 1) {
    createPromise(i + 1, delay + step * i);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    });
}
