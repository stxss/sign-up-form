let password = document.getElementById("pw");
let confirmation = document.getElementById("cpw");
let validation = document.getElementById("pw-validation");

password.addEventListener("focus", handler);
password.addEventListener("keyup", handler);

confirmation.addEventListener("focus", handler);
confirmation.addEventListener("keyup", handler);

function handler() {

    if (password.value === confirmation.value && password.value != "") {
        password.classList.remove("error");
        confirmation.classList.remove("error");

        password.classList.add("valid");
        confirmation.classList.add("valid");

        validation.style.visibility = "hidden";
    } else {
        password.classList.remove("valid");
        confirmation.classList.remove("valid");

        password.classList.add("error");
        confirmation.classList.add("error");

        validation.style.visibility = "visible";
    }
}


let phone = document.getElementById("phone");
phone.addEventListener("focus", phoneHdl);
phone.addEventListener("keyup", phoneHdl);

let regex = /[0-9]{3}-[0-9]{3}-[0-9]{4}/g;

function phoneHdl() {
    let value = phone.value;
    let match = regex.test(value);

    if (match) {
        phone.classList.add("valid");
    }
}

