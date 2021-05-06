// a function to validate name
function validateName(){
    let name = document.getElementById("full_name").value;
    let name_alert = document.getElementById("name_alert");
    // regex to check valid of name
    let checkName = /(([0-9_~!@#$%^&*-]*){1,}[a-zA-Z]([0-9_~!@#$%^&*-]*){1,}){3,}/;

    // use regex to check name
    if (checkName.test(name)){
        name_alert.classList.remove("a");
        name_alert.classList.add("b");
        name_alert.innerHTML = "Valid name";
        return true;
    } else {
        name_alert.classList.remove("b");
        name_alert.classList.add("a");
        name_alert.innerHTML = "Invalid name";;
        return false;
    }
}





// A function to validate email
function validateEmail() {
    let email = document.getElementById("email").value;
    let email_alert = document.getElementById("email_alert");
    // The regex to check the valid form of email
    let checkEmail = /^(?=[^\.])[a-zA-Z0-9.]{2,}[a-zA-Z0-9]+[@](?=[^\.])[a-zA-Z0-9.]+[.][a-zA-Z]{2,5}$/;

    // Check if email has double dots 
    if (email.includes("..")) {
        email_alert.classList.add("a");
        email_alert.classList.remove("b");
        email_alert.innerHTML = "Invalid email";
        return false;
    } 

    // Use the regex above to check the valid form of the email
    if (checkEmail.test(email)) {
        email_alert.classList.add("b");
        email_alert.classList.remove("a");
        email_alert.innerHTML = "Valid email";
        return true;
    } else {
        email_alert.classList.add("a");
        email_alert.classList.remove("b");
        email_alert.innerHTML = "Invalid email";
        return false;
    }
}

// A function to validate phone number
function validatePhone() {
    let phone = document.getElementById("phone").value;
    let phone_alert = document.getElementById("phone_alert")
    // The regex to check the valid form of phone number 
    let checkPhone = /^(?=[^\.])(?=[^\-])(?=[^\s])[0-9 .-]*[\d]$/;

    // Check if phone number has double dots, spaces or dashes
    let symbols = " .-";
    for (let i = 0; i <= phone.length - 2; i++) {
        if(symbols.indexOf(phone[i]) !== -1 && symbols.indexOf(phone[i + 1]) !== -1) {
            phone_alert.classList.add("a");
            phone_alert.classList.remove("b");
            phone_alert.innerHTML = "Invalid phone number";
            return false;
        } 
    }

    // Count how many digits in phone number
    let numberOfDigits = 0;
    for (let i = 0; i < phone.length; i++) {
        if (Number.isInteger(parseInt(phone[i]))) {
            numberOfDigits++;
        }
    }

    // Check if the number of digits is from 9 to 11 characters
    if (numberOfDigits < 9 || numberOfDigits > 11) {
        phone_alert.classList.add("a");
        phone_alert.classList.remove("b");
        phone_alert.innerHTML = "Your phone number must contain 9 to 11 numbers";
        return false;
    } 

    // Use the regex above to test the valid form of phone number
    if (checkPhone.test(phone)) {
        phone_alert.classList.add("b");
        phone_alert.classList.remove("a");
        phone_alert.innerHTML = "Valid phone number";
        return true;
    } else {
        phone_alert.classList.add("a");
        phone_alert.classList.remove("b");
        phone_alert.innerHTML = "Invalid phone number";
        return false;
    }
}




//Function to count how many words
var mess = document.getElementById("alert");
function keyboard_press_count(event){
    var current_len = document.getElementById("msg").value.length;
    var needed_len = 0;
    var y = event.keyCode;
    if (current_len < 50){        
        needed_len = 50 - current_len;
        mess.classList.remove("b");
        mess.classList.add("a");
        mess.innerHTML = `You have ${needed_len} words left to reach 50 words`;
    } else if (current_len <= 500 && current_len >= 50){
        needed_len = 500 - current_len;
        mess.classList.remove("a");
        mess.classList.add("b");
        mess.innerHTML = `You have ${needed_len} words left to reach 500 words`;
    } else {
            needed_len = current_len - 500;
            mess.classList.remove("b");
            mess.classList.add("a");
            mess.innerHTML = `You have ${needed_len} over the limmit`
    }
}

function backspace_count(event){
    var x = event.keyCode
    var current_len = document.getElementById("msg").value.length;
    var needed_len = 0;
    if (x== 8){
        if (current_len < 50){
            needed_len = 50 - current_len;
            mess.classList.remove("b");
            mess.classList.add("a");
            mess.innerHTML = `You have ${needed_len} words left to reach 50 words`;
        }else if (current_len < 500){
            needed_len = 500 - current_len;
            mess.classList.remove("a");
            mess.classList.add("b");
            mess.innerHTML = `You have ${needed_len} words left to reach 500 words`;
        } else {
            needed_len = current_len - 500;
            mess.classList.remove("b");
            mess.classList.add("a");
            mess.innerHTML = `Delete ${needed_len} letters`;
        }
    }
}


// Function to check validate message area
function validMessage(){
    var len = document.getElementById("msg").value.length;
    if (50 <= len && len <= 500){
        return true;
    } else {
        mess.classList.add("a");
        mess.classList.remove("b");
        mess.innerHTML ="Your message must be 50 to 500 letters";
        return false;
    }
}

// Function to have at leaste one radio is checked
function validRadio(){
    var radio_alert = document.getElementById("radio_alert");
    if (document.getElementById("email_method").checked == false && document.getElementById("phone_method").checked == false){
        radio_alert.classList.add("a");
        radio_alert.classList.remove("b");
        radio_alert.innerHTML = "You have to choose one option";
        return false;
    } else {
        radio_alert.classList.add("b");
        radio_alert.classList.remove("a");
        radio_alert.innerHTML = "Valid";
        return true;
    }
}

// Function that have at lease checkbox is checked
<<<<<<< HEAD
// function validCheckbox(){ 
//     var checkbox_alert =  document.getElementsById("checkbox_alert");
//     if (document.getElementById("monday").checked === false && document.getElementById("tuesday").checked === false && document.getElementById("wednesday").checked === false && document.getElementById("thursday").checked === false && document.getElementById("friday").checked === false && document.getElementById("saturday").checked === false && document.getElementById("sunday").checked === false ){
//         checkbox_alert.classList.add("a");
//         checkbox_alert.classList.remove("b");
//         checkbox_alert.innerHTML = "You need to choose one date";
//         return false;
//     } else {
//         return true;
//     }
// }
var groupOfCheckboxes = document.getElementsByName("contact_days");
function checkCheckbox() {
    let checkbox_alert =  document.getElementById("checkbox_alert");
    let checkboxChecked = function() {
        for (let i = 0; i < groupOfCheckboxes.length; i++) {
            if (groupOfCheckboxes[i].checked) {
                return true;
            }
        }
        return false;
    }
    if (checkboxChecked() === false) {
        checkbox_alert.classList.add("a");
        checkbox_alert.checked.remove("b");
        checkbox_alert.innerHTML = "You need to choose one option"
        return false;
    } else {
        checkbox_alert.innerHTML = "";
        return true;
    }
}

function validateCheckboxes() {
    for (let i = 0; i < groupOfCheckboxes.length; i++) {
        groupOfCheckboxes[i].addEventListener("change", checkCheckbox);
    }
=======
function validateCheckbox(){ 
    var checkbox_alert =  document.getElementById("checkbox_alert");
        if (document.getElementById("monday").checked == false && document.getElementById("tuesday").checked == false && document.getElementById("wednesday").checked == false && document.getElementById("thursday").checked == false && document.getElementById("friday").checked == false && document.getElementById("saturday").checked == false && document.getElementById("sunday").checked == false ){
            checkbox_alert.classList.add("a");
            checkbox_alert.classList.remove("b");
            checkbox_alert.innerHTML = "You need to choose one date";
             return false;
        } else {
            return true;
        }
>>>>>>> f5219c07c2107bd20fa93dfb7df6d4ac077fb3e5
}

// Inform the users whether the inputs are valid or not while they are typing
document.getElementById("full_name").addEventListener("input", validateName);
document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("phone").addEventListener("input", validatePhone);


//Valdiate all fields
function validateform(event){
<<<<<<< HEAD
    if(!validateName() || !validateEmail() || !validatePhone() || !validRadio() || !checkCheckbox() || !validMessage()) {
=======
    if(!validateName() || !validateEmail() || !validatePhone() || !validRadio() || !validateCheckbox() || !validMessage()) {
>>>>>>> f5219c07c2107bd20fa93dfb7df6d4ac077fb3e5
        event.preventDefault(); // If there is invalid input, prevent the form from being submitted by cancelling the event
    } else {
        return true; // Submit the form when all inputs are valid
    }
}

// Submit all form
document.querySelector("form").addEventListener("submit", validateform);
