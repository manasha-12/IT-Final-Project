const contactForm = document.querySelector('#contact-form');
const successMessage = document.querySelector('#success-message');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get form data
  const formData = new FormData(contactForm);
  
  // Validate form data
  if (!formData.get('name') || !formData.get('email') || !formData.get('subject') || !formData.get('message')) {
    alert('Please fill in all the fields!');
    return;
  }
  
  // Show success message
  contactForm.style.display = 'none';
  successMessage.style.display = 'block';
});
