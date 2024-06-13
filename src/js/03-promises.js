import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const createButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const step = Number(form.elements.step.value);
  const amount = Number(form.elements.amount.value);

  createButton.disabled = true;

  const promises = [];

  for (let i = 0; i < amount; i++) {
    const currentDelay = delay + i * step;
    const promise = createPromise(i + 1, currentDelay)
      .then(({ position, delay }) => {
        iziToast.success({
          title: 'Success',
          message: `✅ Fulfilled promise ${position} in ${delay}ms`,
          position: 'topRight',
        });
      })
      .catch(({ position, delay }) => {
        iziToast.error({
          title: 'Error',
          message: `❌ Rejected promise ${position} in ${delay}ms`,
          position: 'topRight',
        });
      });

    promises.push(promise);
  }

  Promise.allSettled(promises).then(() => {
    form.reset();

    createButton.disabled = false;
  });
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
