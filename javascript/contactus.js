const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Message sent successfully!');
  contactForm.reset();
});
