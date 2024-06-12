const form = document.querySelector('.feedback-form');
const input = document.querySelector('.input-email');
const textarea = document.querySelector('.textarea-message');
const btn = document.querySelector('.button-submit');

form.addEventListener('input', () => {
  const formData = new FormData(form);
  const email = formData.get('email');
  const message = formData.get('message');
  const data = { email, message };
  saveToLS('feedback-form-state', data);
});

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}
function loadFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return json;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const data = loadFromLS('feedback-form-state');
  form.elements.email.value = data?.email || '';
  form.elements.message.value = data?.message || '';
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const { email, message } = e.target.elements;
  if (email.value === '' || message.value === '') {
    alert('Fill please all fields');
  }
  console.log({ email: email.value, message: message.value });

  // const formData = new FormData(form);
  // const email = formData.get('email');
  // const message = formData.get('message');
  // const data = { email, message };
  // console.log(data);

  form.reset();

  localStorage.removeItem('feedback-form-state');
});
