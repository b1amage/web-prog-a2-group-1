function checkPassword() {
    let password = document.getElementById("password").value;
    if (password === "password") {
        return true;
    } else {
        alert("Wrong password");
        return false;
    }
}
