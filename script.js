(function (d) {
  // Get DOM elements
  const $signUp = d.querySelector(".sign-up");
  const $warningOutput = d.querySelector(".sign-up__warning");
  const $inputEmail = d.querySelector("#email");
  const $inputButtonSend = d.querySelector("#send");

  // Regular expression for email validation
  const emailReg = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.){1,2}[a-zA-Z]{3,}))$/
  );

  const $successMessage = d.querySelector(".success-message");
  const $mailOutput = d.querySelector(".success-message__output");
  const $inputButtonReturn = d.querySelector("#return");

  // This function validates the email entered by the user.
  function validateEmail(e) {
    // Get the value of the field where the event happened.
    let fieldValue = e.target.value;

    // If the field is empty, show an error message.
    if (fieldValue.length === 0) {
      d.body.classList.add("error");
      $warningOutput.textContent = "Valid email required";
    } else {
      // If the field is not empty, remove the error message.
      d.body.classList.remove("error");
      $warningOutput.textContent = "";
    }
  }

  // This function redirects to a success message if the email is valid.
  function redirectToSuccessMessage() {
    // If the email is valid, show the success message and hide the sign up form.
    if (emailReg.test($inputEmail.value)) {
      $signUp.classList.add("none");
      $successMessage.classList.remove("none");
      $mailOutput.textContent = $inputEmail.value;
    } else {
      // If the email is not valid, show an error message.
      d.body.classList.add("error");
      $warningOutput.textContent = "Valid email required";
    }
  }

  // This function returns to the sign up form from the success message.
  function returnToSignUp() {
    // Show the sign up form and hide the success message.
    $signUp.classList.remove("none");
    $successMessage.classList.add("none");

    // Clear the input field and the output field.
    $inputEmail.value = "";
    $mailOutput.textContent = "";
  }

  // Event listeners
  $inputEmail.addEventListener("blur", validateEmail);
  $inputButtonSend.addEventListener("click", redirectToSuccessMessage);
  $inputButtonReturn.addEventListener("click", returnToSignUp);
})(document);
