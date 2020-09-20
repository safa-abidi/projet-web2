/*****for the navigation menu*******/

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
});

/******for the form*********/
const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phone = document.getElementById("phone");

var counter = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  //counter
  console.log("counter", counter);
  if (counter >= 4) {
    window.location = "home.html";
  }
});

function checkInputs() {
  const nameValue = name.value.trim(); // trim to remove the whitespaces
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const phoneValue = phone.value.trim();

  if (nameValue === "") {
    setErrorFor(name, "Name cannot be blank");
  } else {
    setSuccessFor(name);
    counter++;
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
    counter++;
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "Password must be longer than 8 characters");
  } else {
    setSuccessFor(password);
    counter++;
  }

  if (phoneValue === "") {
    setErrorFor(phone, "Phone number cannot be blank");
  } else if (phoneValue.length < 8) {
    setErrorFor(phone, "Phone must be longer than 8 numbers");
  } else if (!isPhoneNumber(phoneValue)) {
    setErrorFor(phone, "phone number must follow this form +xxx xxxx xxxx");
  } else {
    setSuccessFor(phone);
    counter++;
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isPhoneNumber(phone) {
  return /^\+?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(phone);
}
