const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const popup = document.getElementById('popup');
const balloonContainer = document.getElementById('balloon-container');

function createBalloon(isMassive = false) {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  
  const colors = ['#ff477e', '#ffd166', '#06d6a0', '#118ab2', '#ef476f', '#8338ec'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  balloon.style.backgroundColor = randomColor;
  balloon.style.borderBottomColor = randomColor;
  
  balloon.style.left = Math.random() * 100 + 'vw';
  
  const size = isMassive ? (Math.random() * 40 + 60) : (Math.random() * 30 + 30);
  balloon.style.width = size + 'px';
  balloon.style.height = (size * 1.3) + 'px';
  
  const duration = isMassive ? (Math.random() * 2 + 3) : (Math.random() * 3 + 5);
  balloon.style.animationDuration = duration + 's';
  
  balloonContainer.appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, duration * 1000);
}

setInterval(() => {
  createBalloon();
}, 600);

noBtn.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = 'fixed';
  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';
});

yesBtn.addEventListener('click', () => {
  popup.classList.add('active');
  
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      createBalloon(true);
    }, i * 50);
  }
});

function closePopup() {
  popup.classList.remove('active');
}
