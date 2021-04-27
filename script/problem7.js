var addButton = document.getElementById('add-btn');
var buyNowButton = document.getElementById('buynow-btn');
var productName1 = document.getElementById('product-name').innerHTML;
var price1 = parseInt(document.getElementById('product-price').innerHTML.slice(1));
var quantity1 = 0;




addButton.addEventListener('click', () => {
    quantity1++;
    window.alert(`${productName1} has been added!`);
    localStorage.setItem('price1', price1);
    localStorage.setItem('quantity1', quantity1);
    localStorage.setItem('productName1', productName1);
})
