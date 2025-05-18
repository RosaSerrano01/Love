// Generar muchos corazones para formar el "árbol"
const heartContainer = document.getElementById('hearts');
for (let i = 0; i < 150; i++) {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = `${Math.random() * 200}px`;
  heart.style.top = `${Math.random() * 200}px`;
  heart.style.color = ['#e91e63', '#f06292', '#f48fb1', '#ff80ab'][Math.floor(Math.random()*4)];
  heart.innerHTML = '❤';
  heartContainer.appendChild(heart);
}

// Contador de amor
const counter = document.getElementById("counter");
const startDate = new Date("2025-02-16T00:00:00");

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  

  counter.textContent = `${days} días ${hours} horas ${minutes} minutos ${seconds < 10 ? '0' + seconds : seconds} segundos`;
}


setInterval(updateCounter, 1000);
updateCounter();
