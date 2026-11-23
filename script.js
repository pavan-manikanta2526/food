// Mobile navigation
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

// Menu category filters
const filterButtons = document.querySelectorAll('.filter-btn');
const foodCards = document.querySelectorAll('.food-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const category = button.dataset.filter;
    foodCards.forEach(card => {
      card.classList.toggle('hidden', category !== 'all' && card.dataset.category !== category);
    });
  });
});

// Reservation form demo interaction
const bookingForm = document.getElementById('booking-form');
const formMessage = document.getElementById('form-message');
const dateInput = document.getElementById('date');
const today = new Date();
dateInput.min = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().split('T')[0];

bookingForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!bookingForm.reportValidity()) return;
  const guestName = document.getElementById('name').value.trim();
  formMessage.textContent = `Thanks, ${guestName}! Your demo reservation request is ready. Please call us to confirm your table.`;
  bookingForm.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();
