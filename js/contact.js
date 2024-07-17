const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (validateForm(name, email, message)) {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    contactForm.reset();
  }
});

function validateForm(name, email, message) {
  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name.match(nameRegex)) {
    alert('Please enter a valid name.');
    return false;
  }

  if (!email.match(emailRegex)) {
    alert('Please enter a valid email address.');
    return false;
  }

  if (message.trim() === '') {
    alert('Please enter a message.');
    return false;
  }

  return true;
}

