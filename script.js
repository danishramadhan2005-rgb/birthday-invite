const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const popup = document.getElementById('popup');
const balloonContainer = document.getElementById('balloon-container');

// Fungsi bikin balon pakai JS Animation (lebih stabil dari CSS)
function createBalloon(isMassive = false) {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  
  const colors = ['#ff477e', '#ffd166', '#06d6a0', '#118ab2', '#ef476f', '#8338ec'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  balloon.style.backgroundColor = randomColor;
  balloon.style.borderBottomColor = randomColor;
  
  const startX = Math.random() * 100; // vw
  balloon.style.left = startX + 'vw';
  
  const size = isMassive ? (Math.random() * 30 + 40) : (Math.random() * 20 + 20);
  balloon.style.width = size + 'px';
  balloon.style.height = (size * 1.3) + 'px';
  
  balloonContainer.appendChild(balloon);

  // Logika Animasi Terbang
  let posY = window.innerHeight + 100; // Mulai dari bawah layar
  const speed = isMassive ? (Math.random() * 3 + 4) : (Math.random() * 2 + 1);
  const sway = Math.random() * 2; // Goyangan kiri kanan
  let angle = 0;

  function animate() {
    posY -= speed;
    angle += 0.02;
    
    // Efek goyang
    const currentX = (startX * window.innerWidth / 100) + Math.sin(angle) * 30; 
    
    balloon.style.transform = `translate(${currentX - (startX * window.innerWidth / 100)}px, ${posY - (window.innerHeight + 100)}px) rotate(${Math.sin(angle) * 10}deg)`;
    
    // Kalau udah lewat atas layar, hapus
    if (posY > -200) {
      requestAnimationFrame(animate);
    } else {
      balloon.remove();
    }
  }
  
  requestAnimationFrame(animate);
}

// Balon muncul tiap 500ms (setengah detik)
setInterval(() => {
  createBalloon();
}, 500);

// Tombol "No" kabur
noBtn.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = 'fixed';
  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';
});

// Pas YES diklik, munculin popup + balon meriah
yesBtn.addEventListener('click', () => {
  popup.classList.add('active');
  
  // Semburan balon banyak banget
  for (let i = 0; i < 60; i++) {
    setTimeout(() => {
      createBalloon(true); // true = mode massive
    }, i * 30);
  }
});

function closePopup() {
  popup.classList.remove('active');
}
