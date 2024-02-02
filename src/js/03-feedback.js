import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = form.querySelector("input[name='email']");
const message = form.querySelector("textarea[name='message']");
const btnSubmit = form.querySelector("button[type='submit']");

const saveToStorage = () => {
  const data = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
};

const alertMessage = () => {
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  if (emailValue === '' || messageValue === '') {
    alert('Please fill in all fields');
  } else {
    localStorage.removeItem('feedback-form-state');
    email.value = '';
    message.value = '';
  }
};

const localStorageFunction = () => {
  const store = localStorage.getItem('feedback-form-state');
  if (store) {
    const jsonTransition = JSON.parse(store);
    email.value = jsonTransition.email;
    message.value = jsonTransition.email;
  }
};

form.addEventListener('input', throttle(saveToStorage), 500);
form.addEventListener('change', saveToStorage);
localStorageFunction();
btnSubmit.addEventListener('click', event => {
  event.preventDefault();
  alertMessage();
});
