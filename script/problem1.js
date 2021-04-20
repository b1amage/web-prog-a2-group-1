let isUnderstand = false;

if (isUnderstand == false) {

document.getElementById('understand').onclick = () => {
    document.getElementById('overlay-cookies').style.display = 'none';
    document.getElementById('box-message').style.display = 'none';
    document.getElementById('full-html').style.overflow = 'scroll';
    document.getElementById('full-html').style.overflowX = 'hidden';
    isUnderstand = true;
    console.log(isUnderstand)

}

}