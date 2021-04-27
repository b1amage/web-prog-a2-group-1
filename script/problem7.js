var addButton = document.getElementById('add-btn');
var buyNowButton = document.getElementById('buynow-btn');
var productName = document.getElementById('product-name').innerHTML;
var price = parseInt(document.getElementById('product-price').innerHTML.slice(1));

console.log(price);

addButton.addEventListener('click', () => {
    window.alert(`${productName} has been added!`);
    localStorage.setItem('order1', price);
})

