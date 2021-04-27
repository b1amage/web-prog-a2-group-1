var addButton = document.getElementById('add-btn');
var buyNowButton = document.getElementById('buynow-btn');
var productName3 = document.getElementById('product-name').innerHTML;
var price3 = parseInt(document.getElementById('product-price').innerHTML.slice(1));

var quantity3 = 0;



addButton.addEventListener('click', () => {
    quantity3++;
    window.alert(`${productName3} has been added!`);
    localStorage.setItem('price3', price3);
    localStorage.setItem('quantity3', quantity3);
    localStorage.setItem('productName3', productName3);
})