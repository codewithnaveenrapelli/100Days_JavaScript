//? Form Validation
document.querySelector('.formSubmit').addEventListener('click', (e) => {
    e.preventDefault();

    const userName = document.getElementById("username").value;
    const phoneNumber = document.getElementById("phone").value;
    const email = document.getElementById("mail").value;
    const password = document.getElementById("password").value;
    const conformPassword = document.getElementById("conformPassword").value;

    const userNameRegex = /^[A-Za-z0-9]{3,20}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/;
    const emailRegex = /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
    const phoneRegex = /^[6-9][\d]{9}$/;

    // clear previous error
    document.querySelectorAll('.error').forEach((currentElement) => currentElement.textContent = "")

    let isValid = true;



    if (!userNameRegex.test(userName)) {
        document.getElementById("usernameError").textContent = "username is not valid"
        isValid = false;
    }
    if (!passwordRegex.test(password)) {
        document.getElementById("passwordError").textContent = "password is not valid"
        isValid = false;
    }
    if (!emailRegex.test(email)) {
        document.getElementById("mailError").textContent = "email is not valid"
        isValid = false;
    }
    if (!phoneRegex.test(phoneNumber)) {
        document.getElementById("phoneError").textContent = "phone number is not valid"
        isValid = false;
    }

    if (conformPassword !== password) {
        document.getElementById("conformPassword").textContent = "Password is not matching"
        isValid = false;
    }
    let userData = [];
    if (isValid) {
        let form = document.getElementsByClassName("form-control");

        Array.from(form).forEach((currentElement) => userData.push(currentElement.value));

        Array.from(form).forEach((currentElement) => currentElement.value = "");
        console.log(userData);
        alert("Registration Successful")

    }

})



