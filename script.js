// ----------------------------
// Smooth scroll for nav links
// ----------------------------
document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ----------------------------
// Back to top button
// ----------------------------
const backToTop = document.createElement('a');
backToTop.href = '#';
backToTop.className = 'back-to-top';
backToTop.textContent = '↑ Top';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// ----------------------------
// Portfolio Gallery Load
// ----------------------------
const gallery = document.getElementById("imageGallery");
const totalImages = 16; // Number of images

for (let i = 1; i <= totalImages; i++) {
  const img = document.createElement("img");
  img.src = `photo${i}.jpg`;
  img.alt = `Gallery image ${i}`;
  img.addEventListener('click', () => {
    openLightbox(img.src);
  });
  gallery.appendChild(img);
}

// ----------------------------
// Lightbox Function
// ----------------------------
function openLightbox(src) {
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.background = 'rgba(0, 0, 0, 0.8)';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.zIndex = '10000';
  overlay.style.cursor = 'pointer';

  const fullImage = document.createElement('img');
  fullImage.src = src;
  fullImage.style.maxWidth = '90%';
  fullImage.style.maxHeight = '90%';
  fullImage.style.borderRadius = '12px';
  overlay.appendChild(fullImage);

  overlay.addEventListener('click', () => {
    document.body.removeChild(overlay);
  });

  document.body.appendChild(overlay);
}

// ----------------------------
// Dark Mode Toggle
// ----------------------------
const toggle = document.getElementById('darkModeToggle');
const body = document.body;

// Load saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  toggle.checked = true;
}

// Toggle dark mode
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
  }
});
