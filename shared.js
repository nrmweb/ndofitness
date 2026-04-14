// Shared nav + footer injector
const NAV_HTML = `
<nav>
  <a href="index.html" class="nav-logo">NDO<span>.</span></a>
  <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="services.html">Services</a></li>
    <li><a href="book.html">Book</a></li>
    <li><a href="programs.html">Programs</a></li>
    <li><a href="shop.html">Shop</a></li>
    <li><a href="team.html">Team</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
  <div class="nav-right"><a href="book.html" class="nav-cta">Book a Session</a><div class="nav-mobile-toggle" onclick="toggleMenu()"><span></span><span></span><span></span></div></div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="index.html" onclick="toggleMenu()">Home</a>
  <a href="services.html" onclick="toggleMenu()">Services</a>
  <a href="book.html" onclick="toggleMenu()">Book a Session</a>
  <a href="programs.html" onclick="toggleMenu()">Programs</a>
  <a href="shop.html" onclick="toggleMenu()">Shop</a>
  <a href="team.html" onclick="toggleMenu()">Team</a>
  <a href="contact.html" onclick="toggleMenu()">Contact</a>
</div>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div><div class="footer-logo">NDO<span>.</span></div><p class="footer-tagline">Elevated Basketball Training. Nova Scotia's first private basketball facility — Bedford, NS.</p></div>
    <div class="footer-col"><h4>Book</h4><ul><li><a href="book.html">Individual Training</a></li><li><a href="book.html">Small Group</a></li><li><a href="book.html">Court Rentals</a></li><li><a href="book.html">Birthday Parties</a></li></ul></div>
    <div class="footer-col"><h4>Programs</h4><ul><li><a href="programs.html">Mini Ballers</a></li><li><a href="programs.html">U10 Program</a></li><li><a href="programs.html">U13 Program</a></li><li><a href="programs.html">U16 Program</a></li><li><a href="programs.html">Summer Camps</a></li></ul></div>
    <div class="footer-col"><h4>More</h4><ul><li><a href="shop.html">Shop</a></li><li><a href="team.html">Our Team</a></li><li><a href="contact.html">Contact</a></li><li><a href="services.html">All Services</a></li></ul></div>
  </div>
  <div class="footer-bottom">
    <div class="footer-copy">© 2025 NDO Fitness. All rights reserved.</div>
    <div class="footer-powered">Designed by <a href="https://nathanielraymedia.com">Nathaniel Ray Media</a></div>
  </div>
</footer>`;

function toggleMenu(){document.getElementById('mobileMenu').classList.toggle('open');}

document.addEventListener('DOMContentLoaded', () => {
  // Inject nav
  const navEl = document.getElementById('nav-placeholder');
  if(navEl) navEl.outerHTML = NAV_HTML;
  // Inject footer
  const footerEl = document.getElementById('footer-placeholder');
  if(footerEl) footerEl.outerHTML = FOOTER_HTML;
  // Highlight active nav link
  const path = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a').forEach(a => {
    if(a.getAttribute('href') === path) a.style.color = 'var(--text)';
  });
});
