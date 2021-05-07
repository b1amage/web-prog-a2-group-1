var horMargin = 40;

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
    if (items.length > 5) {
        container.style.overflowY = "hidden";
        container.style.overflowX = "scroll";
        container.style.flexWrap = "nowrap";
        setup(container, items);
        setInterval(function() {
            startScroll(container, items, stop);
        }, 25);
    }

}

autoScroll("store-container", "store");
autoScroll("product-container", "product");
autoScroll("feature-container first", "feature first");
autoScroll("feature-container last", "feature-last");
