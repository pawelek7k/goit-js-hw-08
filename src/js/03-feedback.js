import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = form.querySelector("input[name='email']");
const message = form.querySelector("textarea[name='message']");

const saveToStorage = () => {
  const data = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
};

const localStorageFunction = () => {
  const store = localStorage.getItem('feedback-form-state');
  if (store) {
    const jsonTransition = JSON.parse(store);
    email.value = jsonTransition.email;
    message.value = jsonTransition.email;
  }
};

const submitAction = event => {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  email.value = '';
  message.value = '';
};

form.addEventListener('input', throttle(saveToStorage), 500);
form.addEventListener('change', saveToStorage);
form.addEventListener('submit', submitAction);
localStorageFunction();
