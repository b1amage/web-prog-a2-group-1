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
 
    var shipPrice = parseInt(document.getElementById('ship-price').innerHTML)

    var totalPrice = ((price1 * quantity1 + price2 * quantity2 + price3 * quantity3) + shipPrice);

    console.log(totalPrice)

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
// document.getElementById('quantity1').addEventListener('change', checkDiscount);
document.getElementById('quantity2').addEventListener('change', calculatePrice);
// document.getElementById('quantity2').addEventListener('change', checkDiscount);
document.getElementById('quantity3').addEventListener('change', calculatePrice);
// document.getElementById('quantity3').addEventListener('change', checkDiscount);

document.getElementById('discount').onchange = checkDiscount;

