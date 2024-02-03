import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = form.querySelector("input[name='email']");
const message = form.querySelector("textarea[name='message']");
const btnSubmit = form.querySelector("button[type='submit']");

form.addEventListener(
  'input',
  throttle(() => {
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify({
        email: email.value,
        message: message.value,
      })
    );
    btnSubmit.disabled = !(email.value && message.value);
  }, 500)
);

const localStorageFunction = () => {
  const store = localStorage.getItem('feedback-form-state');
  if (store) {
    const jsonTransition = JSON.parse(store);
    email.value = jsonTransition.email;
    message.value = jsonTransition.message;
  }
};

form.addEventListener('submit', event => {
  event.preventDefault();

  console.log({
    email: email.value,
    message: message.value,
  });

  form.reset();
  localStorage.removeItem('feedback-form-state');
  email.value = '';
  message.value = '';
  btnSubmit.disabled = true;
});

localStorageFunction();
