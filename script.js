const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const popup = document.getElementById('popup');

// Tombol "No" kabur kalau dideketin (fun trick 😄)
noBtn.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = 'fixed';
  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';
});

// Klik Yes → munculin popup
yesBtn.addEventListener('click', () => {
  popup.classList.add('active');
});

function closePopup() {
  popup.classList.remove('active');
}