// // Initialising parameters for scrolling events
// var stop = 'false';
// var duplicate = 'true';
// var container = document.getElementById("scroll");
// var stores = document.getElementsByClassName("store");
// var horMargin = 50;

// // Duplicate the length of the container
// function setup() {
//     let intialLength = stores.length;
//     for (let i = 0; i < intialLength; i++) {
//         container.appendChild(stores[i].cloneNode(true));
//     }
// }

// // Create a scroll effect
// function startScroll() {
//     if (duplicate === 'true') {
//         setup();
//         duplicate = 'false';
//     }

//     let width = stores[0].offsetWidth;

//     if (stop === 'false') {
//         container.scrollLeft += 4;
//     } 

//     if (container.scrollLeft === 0) {
//         let clone = stores[stores.length-1].cloneNode(true);
//         container.removeChild(stores[stores.length-1]);
//         container.prepend(clone);
//         container.scrollLeft = width + horMargin * 2;
//     }

//     if (container.scrollLeft >= width + horMargin * 2) {
//         let clone = stores[0].cloneNode(true);
//         container.removeChild(stores[0]);
//         container.appendChild(clone);
//         container.scrollLeft = 0;
//     }
// }

// function stopScroll() {
//     stop = 'true';
// }

// function restartScroll() {
//     stop = 'false';
// }

// if (stores.length > 5) {
//     setInterval('startScroll()', 25);
// }

// container.onmouseover = stopScroll;
// container.onmouseleave = restartScroll;

var horMargin = 50;

// Duplicate the length of the container
function setup(container, items) {
    let intialLength = items.length;
    for (let i = 0; i < intialLength; i++) {
        container.appendChild(items[i].cloneNode(true));
    }
}

// Create a scroll effect
function startScroll(container, items, stop) {
    let width = items[0].offsetWidth;

    if (stop === 'false') {
        container.scrollLeft += 4;
    } 

    if (container.scrollLeft === 0) {
        let clone = items[items.length-1].cloneNode(true);
        container.removeChild(items[items.length-1]);
        container.prepend(clone);
        container.scrollLeft = width + horMargin * 2;
    }

    if (container.scrollLeft >= width + horMargin * 2) {
        let clone = items[0].cloneNode(true);
        container.removeChild(items[0]);
        container.appendChild(clone);
        container.scrollLeft = 0;
    }
}

function stopScroll(stop) {
    stop = 'true';
}

function restartScroll(stop) {
    stop = 'false';
}


function autoScroll(containerName, item) {
    let items = document.getElementsByClassName(item);
    let container = document.getElementsByClassName(containerName)[0];
    let stop = 'false';
    container.onmouseover = function() {
        stop = 'true';
    }

    container.onmouseleave = function() {
        stop = 'false';
    }
    setup(container, items);
    if (items.length > 5) {
        setInterval(function() {
            startScroll(container, items, stop);
        }, 25);
    }

    
}

autoScroll("store-container", "store");
autoScroll("product-container", "product");
autoScroll("feature-container", "feature");
// autoScroll("feature-container last", "feature");
