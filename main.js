document.getElementById('slider-left').onclick = sliderLeft;
var left = 0;
var polosa = document.getElementById('polosa');

function sliderLeft() {

    left = left - 128;
    if (left < -512) {
        left = 0;

    }
    polosa.style.left = left + 'px';
}