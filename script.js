const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const popup = document.getElementById('popup');
const balloonContainer = document.getElementById('balloon-container');

function createBalloon(isMassive = false) {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  
  // Warna balon
  const colors = ['#ff477e', '#ffd166', '#06d6a0', '#118ab2', '#ef476f', '#8338ec', '#ff9f1c'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  balloon.style.backgroundColor = randomColor;
  
  // Posisi X (kiri-kanan) random
  balloon.style.left = Math.random() * 100 + 'vw';
  
  // Ukuran balon
  const size = isMassive ? (Math.random() * 40 + 50) : (Math.random() * 30 + 30);
  balloon.style.width = size + 'px';
  balloon.style.height = (size * 1.3) + 'px';
  
  // Kecepatan terbang
  const duration = isMassive ? (Math.random() * 2 + 2) : (Math.random() * 3 + 5);
  balloon.style.animationDuration = duration + 's';
  
  balloonContainer.appendChild(balloon);

  // Hapus dari layar setelah selesai terbang
  setTimeout(() => {
    balloon.remove();
  }, duration * 1000);
}

// Balon muncul otomatis tiap 0.5 detik (setengah detik)
setInterval(() => {
  createBalloon();
}, 500);

// Tombol No kabur
noBtn.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = 'fixed';
  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';
});

// Pas tombol YES dipencet, munculin puluhan balon sekaligus
yesBtn.addEventListener('click', () => {
  popup.classList.add('active');
  
  for (let i = 0; i < 60; i++) {
    setTimeout(() => {
      createBalloon(true); 
    }, i * 30); 
  }
});

function closePopup() {
  popup.classList.remove('active');
}
