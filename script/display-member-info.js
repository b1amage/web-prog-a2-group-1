// Initialise the variables
var overlay = document.getElementById('overlay-about');
var duyBox = document.getElementById('duy-box');
var baoBox = document.getElementById('bao-box');
var tuanBox = document.getElementById('tuan-box');
var longBox = document.getElementById('long-box');
var bao = document.getElementById('more-info-bao');
var duy = document.getElementById('more-info-duy');
var long = document.getElementById('more-info-long');
var tuan = document.getElementById('more-info-tuan');

// Turn off overlay
function offOverlay() {
    overlay.style.display = 'none';
    duy.style.display = 'none';
    bao.style.display = 'none';
    long.style.display = 'none';
    tuan.style.display = 'none';
    document.querySelector('html').style.overflowY = 'scroll';
}   

// Create an overlay when clicking on the box 
duyBox.onclick = () => {
    document.querySelector('html').style.overflow = 'hidden';
    overlay.style.display = 'block';
    duy.style.display = 'block';
};

baoBox.onclick = () => {
    document.querySelector('html').style.overflow = 'hidden';
    overlay.style.display = 'block';
    bao.style.display = 'block';
};

longBox.onclick = () => {
    document.querySelector('html').style.overflow = 'hidden';
    overlay.style.display = 'block';
    long.style.display = 'block';
};

tuanBox.onclick = () => {
    document.querySelector('html').style.overflow = 'hidden';
    overlay.style.display = 'block';
    tuan.style.display = 'block';
};