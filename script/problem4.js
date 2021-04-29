// a function to validate name
function validateName(){
    let name = document.getElementById("full_name").value;

    // regex to check valid of name
    let checkName = /(([0-9_~!@#$%^&*-]*){1,}[a-zA-Z]([0-9_~!@#$%^&*-]*){1,}){3,}/;

    // use regex to check name
    if (checkName.test(name)){
        return true;
    } else {
        alert("Invalid name");
        return false;
    }
}





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

    // Check if phone number has double dots, spaces or dashes
    let symbols = " .-";
    for (let i = 0; i <= phone.length - 2; i++) {
        if(symbols.indexOf(phone[i]) !== -1 && symbols.indexOf(phone[i + 1]) !== -1) {
            alert("Invalid phone number");
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
        alert("Phone number must have from 9 to 11 digits");
        return false;
    } 

    // Use the regex above to test the valid form of phone number
    if (checkPhone.test(phone)) {
        return true;
    } else {
        alert("Invalid phone number");
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
        alert("Your message must be 50 to 500 letters");
        return false;
    }
}
            

//Valdiate all fields
function validateform(){
    return validateName() && validateEmail() && validatePhone() && validMessage();
}