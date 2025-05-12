// Event Handling
document.getElementById('clickBtn').addEventListener('click', () => {
  alert('Button was clicked!');
});

const box = document.getElementById('hoverBox');
box.addEventListener('mouseover', () => box.style.backgroundColor = 'coral');
box.addEventListener('mouseout', () => box.style.backgroundColor = 'lightblue');

document.addEventListener('keydown', (e) => {
  console.log(`You pressed: ${e.key}`);
});

document.getElementById('secretBtn').addEventListener('dblclick', () => {
  alert('🎉 Secret double-click activated!');
});

// Interactive Elements
document.getElementById('changeMe').addEventListener('click', function() {
  this.textContent = "I'm Changed!";
  this.style.backgroundColor = 'green';
});

// Image Gallery
const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
let index = 0;
document.getElementById('nextImg').addEventListener('click', () => {
  index = (index + 1) % images.length;
  document.getElementById('galleryImg').src = images[index];
});

// Tabs
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.content').forEach(c => c.style.display = 'none');
    document.getElementById(tab.dataset.target).style.display = 'block';
  });
});

// Form Validation
const form = document.getElementById('signupForm');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = form.email.value;
  const password = form.password.value;

  let message = '';
  if (!email.includes('@')) {
    message = 'Please enter a valid email.';
  } else if (password.length < 8) {
    message = 'Password must be at least 8 characters.';
  } else {
    message = '✅ Form submitted successfully!';
    feedback.style.color = 'green';
  }

  feedback.textContent = message;
});

// Real-time password validation
form.password.addEventListener('input', () => {
  if (form.password.value.length < 8) {
    feedback.textContent = 'Password too short!';
    feedback.style.color = 'red';
  } else {
    feedback.textContent = '';
  }
});
