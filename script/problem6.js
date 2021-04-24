// A function to validate email
function validateEmail() {
    let email = document.getElementById("email").value;

    // The regex to check the valid form of email
    let checkEmail = /^(?=[^\.])[a-zA-Z0-9.]{2,}[a-zA-Z0-9]+[@](?=[^\.])[a-zA-Z0-9.]+[.][a-zA-Z]{2,5}$/;

    // Check if email has double dots 
    if (email.includes("..")) {
        alert("There must be no double dots in email");
        return false;
    } 

    // Use the regex above to check the valid form of the email
    if (checkEmail.test(email)) {
        return true;
    } else {
        alert("Invalid email format");
        return false;
    }
}

// A function to validate phone number
function validatePhone() {
    let phone = document.getElementById("phone").value;

    // The regex to check the valid form of phone number 
    let checkPhone = /^(?=[^\.])(?=[^\-])(?=[^\s])[0-9 .-]*[\d]$/;

    // The variable to count the number of digits in phone number
    let numberOfDigits = 0;

    // Check if phone number has double dots, spaces or dashes
    if (phone.includes("..") || phone.includes("  ") || phone.includes("--")) {
        alert("Invalid double symbols in phone field");
        return false;
    }

    // Count how many digits in phone number
    for (let i = 0; i < phone.length; i++) {
        if (Number.isInteger(parseInt(phone[i]))) {
            numberOfDigits++;
        }
    }

    // Check if the number of digits is from 9 to 11 characters
    if (numberOfDigits < 9 || numberOfDigits > 11) {
        alert("Phone number must have from 9 to 11 digits");
        return false;
    } 

    // Use the regex above to test the valid form of phone number
    if (checkPhone.test(phone)) {
        return true;
    } else {
        alert("Invalid phone format");
        return false;
    }
}

// A function to validate password
function validatePassword() {
    let password = document.getElementById("password").value;

    // The regex to check the valid form of password
    let checkPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,20}$/;

    // Check if password has space in it
    if (password.includes(" ")) {
        alert("There must be no space in password");
        return false;
    }

    // Use the regex above to check the valid form of password
    if (checkPassword.test(password)) {
        return true;
    } else {
        alert("Invalid password");
        return false;
    }
}

// A function to validate retype password
function validateRePassword() {
    let retypePassword = document.getElementById("re-password").value;
    let password = document.getElementById("password").value;

    // Check if the retype password is similar to the original password
    if (retypePassword === password) {
        return true;
    } else {
        alert("You must retype the same password");
        return false;
    }
}

// A function to validate first name, last name, address and city
function validatePersonalInfo() {
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;

    // Check if first name, last name, address and city contain at least 3 characters/each
    if (firstName.length >= 3 && lastName.length >= 3 && address.length >= 3 && city.length >= 3) {
        return true;
    } else if (firstName.length < 3) {
        alert("First name must have at least 3 characters");
        return false;
    } else if (lastName.length < 3) {
        alert("Last name must have at least 3 characters");
        return false;
    } else if (address.length < 3) {
        alert("Address must have at least 3 characters");
        return false;
    } else if (city.length < 3) {
        alert("City name must have at least 3 characters");
        return false;
    }
}

// A function to validate zipcode
function validateZipcode() {
    let zipcode = document.getElementById("zipcode").value;

    // The regex to check the valid form of zipcode
    let checkZipcode = /^\d{4,6}$/;

    // Use the regex above to check the valid form of zipcode
    if (checkZipcode.test(zipcode)) {
        return true;
    } else {
        alert("Invalid zipcode");
        return false;
    }
}

// A function to validate all of the input fields when the form is submitted
function validateForm() {
    return validateEmail() && validatePhone() && validatePassword() && validateRePassword() && validatePersonalInfo() && validateZipcode();
}

// A function to display the additional fields for store owner when the chosen account type is Store owner
function showHide() {
    let storeOwner = document.getElementById("store-owner");
    let additional = document.getElementById("additional");

    if (storeOwner.checked) {
        // Remove class "hidden" and add class "visible" to show additional fields
        additional.classList.remove("hidden");
        additional.classList.add("visible")
    } else {
        // Remove class "visible" and add class "hidden" to hide additonal fields
        additional.classList.remove("visible");
        additional.classList.add("hidden");
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
