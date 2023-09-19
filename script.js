let password = document.querySelector('[name="password"]');
let confirmPassword = document.querySelector('[name="confirmPassword"]');
let errorMessage = document.querySelector(".error-message");

let pass, confirmPass;

function isPassEqual(pass, confirmPass) {
  pass === confirmPass ? true : false;
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
        console.log("error is displaying");
      }
    } else {
      if (errorMessage.classList.contains("show-error")) {
        errorMessage.classList.remove("show-error");
      }
      console.log("error is hidden");
    }
  }
}
