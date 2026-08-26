
const langBtn = document.getElementById('langBtn');
let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
  langBtn.textContent = lang === 'en' ? 'VI' : 'EN';
}
langBtn.addEventListener('click', () => setLanguage(currentLang === 'en' ? 'vi' : 'en'));

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
document.querySelectorAll('.photo img').forEach(img => {
  img.parentElement.addEventListener('click', () => {
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightbox.showModal();
  });
});
document.getElementById('closeLightbox').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (e) => {
  const rect = lightboxImage.getBoundingClientRect();
  const inside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
  if (!inside) lightbox.close();
});

document.getElementById('copyBtn').addEventListener('click', async (e) => {
  try {
    await navigator.clipboard.writeText('0913402238');
    const old = e.target.textContent;
    e.target.textContent = currentLang === 'en' ? 'Copied!' : 'Đã sao chép!';
    setTimeout(() => e.target.textContent = old, 1500);
  } catch {
    window.location.href = 'tel:+84913402238';
  }
});
