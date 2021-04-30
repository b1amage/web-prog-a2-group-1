// A function to validate email
function validateEmail() {
    let email = document.getElementById("email").value;
    var invalidEmail = document.getElementsByClassName('invalid email')[0];

    // The regex to check the valid form of email
    let checkEmail = /^(?=[^\.])[a-zA-Z0-9.]{2,}[a-zA-Z0-9]+[@](?=[^\.])[a-zA-Z0-9.]+[.][a-zA-Z]{2,5}$/;

    // Check if email has double dots 
    let doubleDots = false;
    if (email.includes("..")) {
        invalidEmail.style.display = 'block';
        invalidEmail.innerHTML = "There must be no double dots in email";
        doubleDots = true;
        return false;
    } 

    if (!doubleDots) {
        invalidEmail.style.display = 'none';
    }

    // Use the regex above to check the valid form of the email
    if (checkEmail.test(email)) {
        invalidEmail.style.display = 'none';
        return true;
    } else {
        invalidEmail.style.display = 'block';
        invalidEmail.innerHTML = "Invalid email format";
        return false;
    }
}

// A function to validate phone number
function validatePhone() {
    let phone = document.getElementById("phone").value;
    var invalidPhone = document.getElementsByClassName('invalid phone')[0];

    // The regex to check the valid form of phone number 
    let checkPhone = /^(?=[^\.])(?=[^\-])(?=[^\s])[0-9 .-]*[\d]$/;

    // Check if phone number has double dots, spaces or dashes
    let symbols = " .-";
    let symbolsDouble = false;
    for (let i = 0; i <= phone.length - 2; i++) {
        if(symbols.indexOf(phone[i]) !== -1 && symbols.indexOf(phone[i + 1]) !== -1) {
            invalidPhone.style.display = 'block';
            invalidPhone.innerHTML = "No double dots, spaces or dashes in phone";
            symbolsDouble = true;
            return false;
        } 
    }

    if (!symbolsDouble) {
        invalidPhone.style.display = 'none';
    }

    // Count how many digits in phone number
    let numberOfDigits = 0;
    for (let i = 0; i < phone.length; i++) {
        if (Number.isInteger(parseInt(phone[i]))) {
            numberOfDigits++;
        }
    }

    // Check if the number of digits is from 9 to 11 characters
    let checkNumberOfDigits = true;
    if (numberOfDigits < 9 || numberOfDigits > 11) {
        invalidPhone.style.display = 'block';
        invalidPhone.innerHTML = "Phone number must have from 9 to 11 digits";
        checkNumberOfDigits = false;
        return false;
    } 

    if (checkNumberOfDigits) {
        invalidPhone.style.display = 'none';
    }

    // Use the regex above to test the valid form of phone number
    if (checkPhone.test(phone)) {
        invalidPhone.style.display = 'none';
        return true;
    } else {
        invalidPhone.style.display = 'block';
        invalidPhone.innerHTML = "Invalid phone";
        return false;
    }
}

// A function to validate password
function validatePassword() {
    let password = document.getElementById("password").value;
    var invalidPassword = document.getElementsByClassName('invalid password')[0];

    // The regex to check the valid form of password
    let checkPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,20}$/;

    // Check if password has space in it
    let hasSpace = false;
    if (password.includes(" ")) {
        invalidPassword.style.display = 'block';
        invalidPassword.innerHTML = "There must be no space in password";
        hasSpace = true;
        return false;
    }

    if (!hasSpace) {
        invalidPassword.style.display = 'none';
    }

    // Use the regex above to check the valid form of password
    if (checkPassword.test(password)) {
        invalidPassword.style.display = 'none';
        return true;
    } else {
        invalidPassword.style.display = 'block';
        invalidPassword.innerHTML = "Invalid password";
        return false;
    }
}

// A function to validate retype password
function validateRePassword() {
    let retypePassword = document.getElementById("re-password").value;
    let password = document.getElementById("password").value;
    var invalidRePassword = document.getElementsByClassName('invalid re-password')[0];

    // Check if the retype password is similar to the original password
    if (retypePassword === password) {
        invalidRePassword.style.display = 'none';
        return true;
    } else {
        invalidRePassword.style.display = 'block';
        invalidRePassword.innerHTML = "You must retype the same password";
        return false;
    }
}

// A function to validate first name, last name, address and city
// function validatePersonalInfo() {
//     let firstName = document.getElementById("first-name").value;
//     let lastName = document.getElementById("last-name").value;
//     let address = document.getElementById("address").value;
//     let city = document.getElementById("city").value;
//     var invalidFirstName = document.getElementsByClassName('invalid first-name')[0];
//     var invalidLastName = document.getElementsByClassName('invalid last-name')[0];
//     var invalidAddress = document.getElementsByClassName('invalid address')[0];
//     var invalidCity = document.getElementsByClassName('invalid city')[0];

//     // Check if first name, last name, address and city contain at least 3 characters/each
//     if (firstName.length >= 3 && lastName.length >= 3 && address.length >= 3 && city.length >= 3) {
//         invalidFirstName.style.display = 'none';
//         invalidLastName.style.display = 'none';
//         invalidAddress.style.display = 'none';
//         invalidCity.style.display = 'none';
//         return true;
//     } else if (firstName.length < 3) {
//         invalidFirstName.style.display = 'block';
//         invalidFirstName.innerHTML = "First name must have at least 3 characters";
//         return false;
//     } else if (lastName.length < 3) {
//         invalidLastName.style.display = 'block';
//         invalidLastName.innerHTML = "Last name must have at least 3 characters";
//         return false;
//     } else if (address.length < 3) {
//         invalidAddress.style.display = 'block';
//         invalidAddress.innerHTML = "Address must have at least 3 characters";
//         return false;
//     } else if (city.length < 3) {
//         invalidCity.style.display = 'block';
//         invalidCity.innerHTML = "City name must have at least 3 characters";
//         return false;
//     }
// }

function checkPersonalInfo(inputField, errorMessage) {
    let input = document.getElementById(inputField).value;
    let invalidInput = document.getElementsByClassName(`invalid ${inputField}`)[0];
    if (input.length >= 3) {
        invalidInput.style.display = 'none';
        return true;
    } else {
        invalidInput.style.display = 'block';
        invalidInput.innerHTML = errorMessage;
        return false;
    }
}

function validatePersonalInfo() {
    return checkPersonalInfo('first-name', "First name must have at least 3 characters")
    && checkPersonalInfo('last-name', "Last name must have at least 3 characters") 
    && checkPersonalInfo('address', "Address must have at least 3 characters") 
    && checkPersonalInfo('city', "City must have at least 3 characters");
}

// A function to validate zipcode
function validateZipcode() {
    let zipcode = document.getElementById("zipcode").value;
    var invalidZipcode = document.getElementsByClassName('invalid zipcode')[0];

    // The regex to check the valid form of zipcode
    let checkZipcode = /^\d{4,6}$/;

    // Use the regex above to check the valid form of zipcode
    if (checkZipcode.test(zipcode)) {
        invalidZipcode.style.display = 'none';
        return true;
    } else {
        invalidZipcode.style.display = 'block';
        invalidZipcode.innerHTML = "Invalid zipcode";
        return false;
    }
}

// A function to validate all of the input fields when the form is submitted
function validateForm() {
    return validateEmail() && validatePhone() && validatePassword() && validateRePassword() && validatePersonalInfo() && validateZipcode();
}

