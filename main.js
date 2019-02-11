document.getElementById('slider-left').onclick = sliderLeft;
var left = 0;
var polosa = document.getElementById('polosa');
const images = document.querySelectorAll('img');
const info = document.getElementById('info');
const btnInfo = document.getElementById('info-close');

function sliderLeft() {
  left = left - 128;
  if (left < -512) {
    left = 0;
  }
  polosa.style.left = left + 'px';
}

btnInfo.addEventListener('click', () => {
  info.style.display = 'none';
});

images.forEach(img => {
  img.addEventListener('click', () => {
    info.style.display = 'flex';
    info.children[0].src = img.src;
  });
});
