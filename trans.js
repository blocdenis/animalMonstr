document.getElementById('slider_trans').onmousemove = function (event) {
    var x = event.offsetX;
    document.getElementById('trans_two').style.width = x + 'px';
}
document.getElementById('slider_trans').onmouseleave = function (event) {
    document.getElementById('trans_two').style.width = '128px';
}