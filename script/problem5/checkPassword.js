// A function to check if the password is valid
function checkPassword() {
    let password = document.getElementById("password").value;
    let email = document.getElementById("email/phone").value;

    // Check if the password is "password"
    if (password === "password") {
        // Set the status of login to success when the users logged in successfully
        sessionStorage.setItem("successLogin", "true");
        // Store the email that users used to log in
        sessionStorage.setItem("login-email", email);
        return true;
    } else {
        // Display the error message when the password is invalid
        let errorMessage = document.getElementById("error");
        errorMessage.style.display = 'block';
        return false;
    }
}