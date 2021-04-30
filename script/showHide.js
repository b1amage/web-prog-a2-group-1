// A function to display the additional fields for store owner when the chosen account type is Store owner
function showHide() {
    let storeOwner = document.getElementById("store-owner");
    let additional = document.getElementById("additional");
    let business = document.getElementById("business");
    let storeName = document.getElementById("store-name");
    let storeCategory = document.getElementById("store-category");
    if (storeOwner.checked) {
        // Remove class "hidden" and add class "visible" to show additional fields
        additional.classList.remove("hidden");
        additional.classList.add("visible")
        business.required = true;
        storeName.required = true;
        storeCategory.required = true;
    } else {
        // Remove class "visible" and add class "hidden" to hide additonal fields
        additional.classList.remove("visible");
        additional.classList.add("hidden");
        business.required = false;
        storeName.required = false;
        storeCategory.required = false;
    }
}

// A function to hide the additional fields when the users reset the form
function clear() {
    let additional = document.getElementById("additional");

    // Remove class "visible" and add class "hidden" to hide additonal fields
    additional.classList.remove("visible");
    additional.classList.add("hidden");
}

// Invoke the showHide() function when Store owner or Shopper account type is chosen
document.getElementById("store-owner").onclick = showHide;
document.getElementById("shopper").onclick = showHide;

// Invoke the clear() function when the user reset the form
document.getElementById("clear").onclick = clear;
