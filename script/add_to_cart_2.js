var addButton = document.getElementById('add-btn');
var buyNowButton = document.getElementById('buynow-btn');
var productName2 = document.getElementById('product-name').innerHTML;
var price2 = parseInt(document.getElementById('product-price').innerHTML.slice(1));

var quantity2 = 0;



addButton.addEventListener('click', () => {
    quantity2++;
    window.alert(`${productName2} has been added!`);
    localStorage.setItem('price2', price2);
    localStorage.setItem('quantity2', quantity2);
    localStorage.setItem('productName2', productName2);
})