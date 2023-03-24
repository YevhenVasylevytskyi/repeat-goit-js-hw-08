import throttle from 'lodash.throttle';

const feedBackForm = document.querySelector('.feedback-form');
const FORM_KEY = "feedback-form-state";

const localStorageFormData = localStorage.getItem(FORM_KEY);
const jsonLocalStorageFormData = JSON.parse(localStorageFormData);

const emailInput = feedBackForm.elements.email;
const messageInput = feedBackForm.elements.message;

if (JSON.parse(localStorageFormData) !== null) {
    emailInput.value = jsonLocalStorageFormData.email;
    messageInput.value = jsonLocalStorageFormData.message;
}

feedBackForm.addEventListener('input', throttle((event) => {  

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  
  localStorage.setItem(FORM_KEY, JSON.stringify(formData));
}, 500));

feedBackForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!emailInput.value || !messageInput.value) {
    alert('Усі поля повинні бути заповнені');
    return;
  }

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  console.log(formData);

  feedBackForm.reset();
});