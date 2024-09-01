// Simple form submission handler
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for reaching out! Your message has been sent.');
    // Clear the form
    this.reset();
});
