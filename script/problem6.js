function validateEmail() {
    let email = document.getElementById("email").value;
    let checkEmail = /^(?=[^\.])[a-zA-Z0-9.]{2,}[a-zA-Z0-9]+[@](?=[^\.])[a-zA-Z0-9.]+[.][a-zA-Z]{2,5}$/;

    if (email.includes("..")) {
        alert("There must be no double dots in email");
        return false;
    } 

    if (checkEmail.test(email)) {
        return true;
    } else {
        alert("Invalid email format");
        return false;
    }
}

function validatePhone() {
    let phone = document.getElementById("phone").value;
    let checkPhone = /^(?=[^\.])(?=[^\-])(?=[^\s])[0-9 .-]*[\d]$/;
    let numberOfDigits = 0;

    if (phone.includes("..") || phone.includes("  ") || phone.includes("--")) {
        alert("Invalid double symbols in phone field");
        return false;
    }

    for (let i = 0; i < phone.length; i++) {
        if (Number.isInteger(parseInt(phone[i]))) {
            numberOfDigits++;
        }
    }

    if (numberOfDigits < 9 || numberOfDigits > 11) {
        alert("Phone number must have from 9 to 11 digits");
        return false;
    } 

    if (checkPhone.test(phone)) {
        return true;
    } else {
        alert("Invalid phone format");
        return false;
    }
}

function validatePassword() {
    let password = document.getElementById("password").value;
    let checkPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,20}$/;

    if (password.includes(" ")) {
        alert("There must be no space in password");
        return false;
    }

    if (checkPassword.test(password)) {
        return true;
    } else {
        alert("Invalid password");
        return false;
    }
}

function validateRePassword() {
    let retypePassword = document.getElementById("re-password").value;
    let password = document.getElementById("password").value;
    if (retypePassword === password) {
        return true;
    } else {
        alert("You must retype the same password");
        return false;
    }
}

function validatePersonalInfo() {
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;

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

function validateZipcode() {
    let zipcode = document.getElementById("zipcode").value;
    let checkZipcode = /^\d{4,6}$/;

    if (checkZipcode.test(zipcode)) {
        return true;
    } else {
        alert("Invalid zipcode");
        return false;
    }
}

function validateForm() {
    return validateEmail() && validatePhone() && validatePassword() && validateRePassword() && validatePersonalInfo() && validateZipcode();
}