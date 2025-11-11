// ==== Carrossel de filmes ====
const container = document.querySelector('.carousel-container');
const images = document.querySelectorAll('.carousel-container img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const title = document.querySelector('.carousel-title'); // adiciona o título

let index = 0;

function showImage() {
  container.style.transform = `translateX(${-index * 100}%)`;
  title.textContent = images[index].dataset.title; // atualiza nome do filme
}

next.addEventListener('click', () => {
  index = (index + 1) % images.length;
  showImage();
});

prev.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  showImage();
});

// Troca automática a cada 4 segundos
setInterval(() => {
  index = (index + 1) % images.length;
  showImage();
}, 4000);

// Inicializa com o primeiro filme
showImage();


