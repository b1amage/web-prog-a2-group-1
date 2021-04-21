// let isUnderstand = false;

// if (isUnderstand == false) {

// document.getElementById('understand').onclick = () => {
//     document.getElementById('overlay-cookies').style.display = 'none';
//     document.getElementById('box-message').style.display = 'none';
//     document.getElementById('full-html').style.overflow = 'scroll';
//     document.getElementById('full-html').style.overflowX = 'hidden';
//     isUnderstand = true;
//     console.log(isUnderstand)

// }

// }

const cookieContainer = document.querySelector('.cookie-container');
const cookieButton = document.querySelector('.cookie-btn');

cookieButton.addEventListener("click", () => {
    cookieContainer.classList.remove("active");
    localStorage.setItem("cookieBannerDisplayed", "true");
    document.getElementById('overlay-cookies').style.display = 'none';
    document.getElementById('full-html').style.overflow = 'scroll';
    document.getElementById('full-html').style.overflowX = 'hidden';
});

setTimeout( () => {
    if (!localStorage.getItem("cookieBannerDisplayed")) {
        cookieContainer.classList.add("active");
        document.getElementById('overlay-cookies').style.display = 'block';
    }
}, 1000);


