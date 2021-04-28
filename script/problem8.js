// Add to cart



var product1Box = document.querySelector('.product-1');
var product2Box = document.querySelector('.product-2');
var product3Box = document.querySelector('.product-3');


if (localStorage.getItem('productName1')) {


    var quantity1 = parseInt(localStorage.getItem('quantity1'));
    var price1 = parseInt(localStorage.getItem('price1'));
    var productName1 = localStorage.getItem('productName1');

    document.getElementById('product-name1').innerHTML = productName1;
    document.getElementById('quantity1').value = quantity1;
    document.getElementById('price1').innerHTML = '$' + price1;

    product1Box.style.display = 'flex';
}

if (localStorage.getItem('productName2')) {


    var quantity2 = parseInt(localStorage.getItem('quantity2'));
    var price2 = parseInt(localStorage.getItem('price2'));
    var productName2 = localStorage.getItem('productName2');

    document.getElementById('product-name2').innerHTML = productName2;
    
    document.getElementById('quantity2').value = quantity2;
    document.getElementById('price2').innerHTML = '$' + price2;

    product2Box.style.display = 'flex';
}

if (localStorage.getItem('productName3')) {


    var quantity3 = parseInt(localStorage.getItem('quantity3'));
    var price3 = parseInt(localStorage.getItem('price3'));
    var productName3 = localStorage.getItem('productName3');

    document.getElementById('product-name3').innerHTML = productName3;
    document.getElementById('quantity3').value = quantity3;
    document.getElementById('price3').innerHTML = '$' + price3;

    product3Box.style.display = 'flex';
}

// Calculate
function calculatePrice() {
    var price1 = parseInt(document.getElementById('price1').innerHTML.slice(1));
    var price2 = parseInt(document.getElementById('price2').innerHTML.slice(1));
    var price3 = parseInt(document.getElementById('price3').innerHTML.slice(1));

    var quantity1 = parseInt(document.getElementById('quantity1').value);
    var quantity2 = parseInt(document.getElementById('quantity2').value);
    var quantity3 = parseInt(document.getElementById('quantity3').value);

    var productPrice = document.getElementById('product-price');

    // var discount = checkDiscount();
    
    productPrice.innerHTML = (price1 * quantity1 + price2 * quantity2 + price3 * quantity3) + '$'

    if ((price1 * quantity1 + price2 * quantity2 + price3 * quantity3) == 0) {
        document.getElementById('ship-price').innerHTML = 0 + '$';
    } else {
        document.getElementById('ship-price').innerHTML = 60 + '$';
    }
 
    var shipPrice = parseInt(document.getElementById('ship-price').innerHTML)

    var totalPrice = ((price1 * quantity1 + price2 * quantity2 + price3 * quantity3) + shipPrice);


    document.getElementById('total-price').innerHTML = totalPrice + '$'
}

function checkDiscount() {
    var codeDiscount = document.getElementById('discount').value;
    var rest;

    var price1 = parseInt(document.getElementById('price1').innerHTML.slice(1));
    var price2 = parseInt(document.getElementById('price2').innerHTML.slice(1));
    var price3 = parseInt(document.getElementById('price3').innerHTML.slice(1));

    var quantity1 = parseInt(document.getElementById('quantity1').value);
    var quantity2 = parseInt(document.getElementById('quantity2').value);
    var quantity3 = parseInt(document.getElementById('quantity3').value);


    var shipPrice = parseInt(document.getElementById('ship-price').innerHTML);

    var totalPrice = ((price1 * quantity1 + price2 * quantity2 + price3 * quantity3) + shipPrice);

    switch (codeDiscount) {
        case 'COSC2430-HD':
            rest = 0.8;
            break;
        case 'COSC2430-DI':
            rest = 0.9;
            break;
        default:
            rest = 1;
    }

    document.getElementById('total-price').innerHTML = totalPrice * rest +'$';

    if (rest == 1) {
        window.alert('The code is not available');
    }

    return rest;
}

calculatePrice()

document.getElementById('quantity1').addEventListener('change', calculatePrice);

document.getElementById('quantity2').addEventListener('change', calculatePrice);

document.getElementById('quantity3').addEventListener('change', calculatePrice);


document.getElementById('submit-discount-btn').onclick = checkDiscount;