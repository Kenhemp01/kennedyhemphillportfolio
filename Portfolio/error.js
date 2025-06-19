const form = document.getElementById('contact-form');
const error = document.getElementById('form-error');

form.addEventListener('submit', function (e) {
  error.style.display = 'none';

  const name = form.elements['name'].value.trim();
  const email = form.elements['_replyto'].value.trim();
  const message = form.elements['message'].value.trim();

  if (!name || !email || !message) {
    e.preventDefault();
    error.textContent = 'Please fill out all fields.';
    error.style.display = 'block';
    return;
  }

  if (!validateEmail(email)) {
    e.preventDefault();
    error.textContent = 'Please enter a valid email address.';
    error.style.display = 'block';
  }
});

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
