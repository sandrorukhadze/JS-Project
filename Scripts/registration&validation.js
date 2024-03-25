export function registration() {

const form = document.getElementById("registrationForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const genderInputs = document.querySelectorAll('input[name="gender"]');
const agreeCheckbox = document.getElementById("agree");
const passwordInput = document.getElementById("password");
const showPasswordButton = document.getElementById("showPasswordButton");

const usernameRegex = /^[a-zA-Z0-9]{4,12}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});

showPasswordButton.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showPasswordButton.textContent = "Hide Password";
  } else {
    passwordInput.type = "password";
    showPasswordButton.textContent = "Show Password";
  }
});

function validateForm() {
  let isValid = true;

  // Username validation
  if (!usernameRegex.test(usernameInput.value)) {
    document.getElementById("usernameError").textContent =
      "Username must be alphanumeric and 4-12 characters long.";
    isValid = false;
  } else {
    document.getElementById("usernameError").textContent = "";
  }

  // Email validation
  if (!emailRegex.test(emailInput.value)) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    isValid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Gender validation
  let genderChecked = false;
  genderInputs.forEach((input) => {
    if (input.checked) {
      genderChecked = true;
    }
  });
  if (!genderChecked) {
    document.getElementById("genderError").textContent =
      "Please select your gender.";
    isValid = false;
  } else {
    document.getElementById("genderError").textContent = "";
  }

  // Checkbox validation
  if (!agreeCheckbox.checked) {
    document.getElementById("agreeError").textContent =
      "You must agree to the terms and conditions.";
    isValid = false;
  } else {
    document.getElementById("agreeError").textContent = "";
  }

  // Password validation
  if (!passwordRegex.test(passwordInput.value)) {
    document.getElementById("passwordError").textContent =
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be 8 or more characters long.";
    isValid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  if (isValid) {
    form.submit();
  }
}

function toggleNavigation() {
  var navigationLinks = document.getElementById("navigation_links");
  if (navigationLinks.style.display === "block") {
    navigationLinks.style.display = "none";
  } else {
    navigationLinks.style.display = "block";
  }
}
}