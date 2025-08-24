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
const navLinks = document.querySelector('nav ul.nav-links');

function toggleMenu() {
  navLinks.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMenu);

document.querySelectorAll('nav ul.nav-links li a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
