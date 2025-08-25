document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    const targetPosition = targetElement.offsetTop;

    window.scrollTo({
      top: targetPosition - 50, // Optional offset (e.g., for sticky navbar)
      behavior: 'smooth'
    });
  });
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');

function toggleMenu() {
  navLinks.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMenu);

document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields');
      return;
    }
    
    // Create mailto link (for now - you can integrate with a backend service later)
    const mailtoLink = `mailto:mmukabe@gsumail.gram.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // Open email client
    window.open(mailtoLink);
    
    // Show success message
    alert('Thank you for your message! Your email client should open with a pre-filled message.');
    
    // Reset form
    this.reset();
  });
}
