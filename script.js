let password = document.querySelector('[name="password"]');
let confirmPassword = document.querySelector('[name="confirmPassword"]');
let errorMessage = document.querySelector(".error-message");

let pass, confirmPass;

// function isPassEqual(pass, confirmPass) {
//   pass === confirmPass ? true : false;
// }

function checkPasswords() {
  if (pass && confirmPass) {
    if (pass !== confirmPass) {
      if (
        document.activeElement !== confirmPassword &&
        document.activeElement !== password
      ) {
        if (!errorMessage.classList.contains("show-error")) {
          errorMessage.classList.add("show-error");
        }
        if (password.checkValidity() || confirmPassword.checkValidity()) {
          password.setCustomValidity("Please make sure passwords are the same");
          confirmPassword.setCustomValidity(
            "Please make sure passwords are the same"
          );
        }
        console.log("error is displaying");
      }
    } else {
      if (errorMessage.classList.contains("show-error")) {
        errorMessage.classList.remove("show-error");
      }
      if (!password.checkValidity() || !confirmPassword.checkValidity()) {
        password.setCustomValidity("");
        confirmPassword.setCustomValidity("");
      }
      console.log("error is hidden");
    }
  } else {
    if (errorMessage.classList.contains("show-error")) {
      errorMessage.classList.remove("show-error");
    }
    if (!password.checkValidity() || !confirmPassword.checkValidity()) {
      password.setCustomVatlidity("");
      confirmPassword.setCustomValidity("");
    }
    console.log("error is hidden");
  }
}

password.addEventListener("input", function () {
  pass = this.value;
  console.log(this.value);
  console.log(document.activeElement);
  checkPasswords();
});

confirmPassword.addEventListener("input", function () {
  confirmPass = this.value;
  checkPasswords();
});

document.addEventListener("click", checkPasswords);
