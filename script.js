const form = document.querySelector("#form");
const email = document.querySelector("#email");
const country = document.querySelector("#country");
const postal = document.querySelector("#postal");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirm");
const allInputs = document.querySelectorAll("input");

const emailError = document.querySelector("#email-error");
const countryError = document.querySelector("#country-error");
const postalError = document.querySelector("#postal-error");
const passwordError = document.querySelector("#password-error");
const passwordConfirmError = document.querySelector("#password-confirm-error");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("high five!")
});

email.addEventListener("input", () => {
    if (email.value.length === 0) {
        emailError.innerText = "";
        email.classList = "";
    } else if (email.value.length < 6) {
        emailError.innerText = "There's no way your email address is that short!";
        email.classList = "invalid";
    } else if (email.value.length > 100) {
        emailError.innerText = "There's no way your email address is that long!";
        email.classList = "invalid";
    } else if (!(email.value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))) {
        emailError.innerText = "Please enter a valid email address!";
        email.classList = "invalid";
    } else if (email.value.length > 0) {
        emailError.innerText = "";
        email.classList = "valid";
    };
});

country.addEventListener("input", () => {
    if (country.value.length === 0) {
        countryError.innerText = "";
        country.classList = "";
    } else if (country.value.length < 3) {
        countryError.innerText = "Please enter a country at least 3 characters long!";
        country.classList = "invalid"
    } else if (country.value.length > 50) {
        countryError.innerText = "Please enter a country no longer than 50 characters!";
        country.classList = "invalid";
    } else if (!(country.value.match(`^[A-Za-z ]+$`))) {
        countryError.innerText = "Please enter a valid country!"
        country.classList = "invalid";
    } else {
        countryError.innerText = "";
        country.classList = "valid";
    }
});

postal.addEventListener("input", () => {
    if (postal.value.length === 0) {
        postalError.innerText = "";
        postal.classList = "";
    } else if (postal.value.length !== 5) {
        postalError.innerText = "Please enter a postal code 5 digits long!";
        postal.classList = "invalid";
    } else if (!(postal.value.match(/^\d+$/))) {
        postalError.innerText = "Please enter a valid postal code!";
        postal.classList = "invalid";
    } else {
        postalError.innerText = "";
        postal.classList = "valid";
    }
})

password.addEventListener("input", () => {
    if (password.value.length === 0) {
        passwordError.innerText = "";
        password.classList = "";
    } else if (password.value.length < 8) {
        passwordError.innerText = "Please enter a password at least 8 characters long!";
        password.classList = "invalid";
    } else if (password.value.length > 100) {
        passwordError.innerText = "Please enter a password no more than 100 characters long!";
        password.classList = "invalid";
    } else if (password.value !== passwordConfirm.value) {
        passwordError.innerText = "Please enter a matching password!";
        password.classList = "invalid";
        passwordConfirm.classList = "invalid";
    } else {
        passwordError.innerText = "";
        passwordConfirmError.innerText = "";
        password.classList = "valid";
        passwordConfirm.classList = "valid";
    };
});

passwordConfirm.addEventListener("input", () => {
    if (passwordConfirm.value.length === 0) {
        passwordConfirmError.innerText = "";
        passwordConfirm.classList = "";
    } else if (passwordConfirm.value.length < 8) {
        passwordConfirmError.innerText = "Please enter a password at least 8 characters long!";
        passwordConfirm.classList = "invalid";
    } else if (password.value.length > 100) {
        passwordConfirmError.innerText = "Please enter a password no more than 100 characters long!";
        passwordConfirm.classList = "invalid";
    } else if (passwordConfirm.value !== password.value) {
        passwordConfirmError.innerText = "Please enter a matching password!";
        password.classList = "invalid";
        passwordConfirm.classList = "invalid";
    } else {
        passwordError.innerText = "";
        passwordConfirmError.innerText = "";
        password.classList = "valid";
        passwordConfirm.classList = "valid";
    }
});