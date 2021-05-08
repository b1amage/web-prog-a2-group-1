var overlay = document.getElementById('overlay-about');
var duyBox = document.getElementById('duy-box');
var baoBox = document.getElementById('bao-box');
var tuanBox = document.getElementById('tuan-box');
var longBox = document.getElementById('long-box');
var bao = document.getElementById('more-info-bao');
var duy = document.getElementById('more-info-duy');
var long = document.getElementById('more-info-long');
var tuan = document.getElementById('more-info-tuan');

function offOverlay() {
    overlay.style.display = 'none';
    duy.style.display = 'none';
    bao.style.display = 'none';
    long.style.display = 'none';
    tuan.style.display = 'none';
    document.querySelector('html').style.overflowY = 'scroll';
}   

duyBox.onclick = () => {
    document.querySelector('html').style.overflow = 'hidden';
    overlay.style.display = 'block';
    duy.style.display = 'block';
    // duy.querySelector('h1').innerHTML = 'content here';
    // duy.querySelector('p').innerHTML = 'content here';
    // duy.querySelector('a').innerHTML = 'facebook link here';
};

baoBox.onclick = () => {
    document.querySelector('html').style.overflow = 'hidden';
    overlay.style.display = 'block';
    bao.style.display = 'block';
    // bao.querySelector('h1').innerHTML = 'content here';
    // bao.querySelector('p').innerHTML = 'content here';
    // bao.querySelector('a').innerHTML = 'facebook link here';
};

longBox.onclick = () => {
    document.querySelector('html').style.overflow = 'hidden';
    overlay.style.display = 'block';
    long.style.display = 'block';
    // long.querySelector('h1').innerHTML = 'content here';
    // long.querySelector('p').innerHTML = 'content here';
    // long.querySelector('a').innerHTML = 'facebook link here';
};

tuanBox.onclick = () => {
    document.querySelector('html').style.overflow = 'hidden';
    overlay.style.display = 'block';
    tuan.style.display = 'block';
    // tuan.querySelector('h1').innerHTML = 'content here';
    // tuan.querySelector('p').innerHTML = 'content here';
    // tuan.querySelector('a').innerHTML = 'facebook link here';
};