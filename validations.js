//This is for the login popup
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "Username123" && password == "Password123"){ //This an account that will be used for testing
    alert ("Login was a success");
    return false;
    }
    else{
    alert("Wrong username or password");
    }
}

//This is for the register popup
function check() {
    var emailRegister = document.getElementById("email-register").value;
    var usernameRegister = document.getElementById("username-register").value;
    var passwordRegister = document.getElementById("password-register").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (emailRegister == '') {
        alert ("Please enter a valid email");
        emailRegister.focus()
        return false;
    }
    else if (!filter.test(emailRegister)) {
        alert("Invalid email");
        return false;
    }
    else if (usernameRegister == '') {
        alert ("Please enter a valid username");
        usernameRegister.focus()
        return false;
    }
    else if (usernameRegister == "Username123") { //If someone tries putting in the same username as the premade account
        alert ("This username already exists");
        return false;
    }
    else if (passwordRegister == '') {
        alert ("Please enter a valid password");
        passwordRegister.focus()
        return false;
    }
    else {
        alert("Thank you for joining the club!")
    }
}
