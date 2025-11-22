document.addEventListener("DOMContentLoaded", () => {
  const formContainer = document.querySelector(".form-container");
  const successCard = document.getElementById("success-card");

  const emailInput = document.getElementById("email");
  const submitBtn = document.getElementById("submit-button");
  const dismissBtn = document.getElementById("dismiss-button");
  const userEmailSpot = document.getElementById("user-email");

  function isValidEmail(email) {
    // simple email check – good enough for this challenge
    return /\S+@\S+\.\S+/.test(email);
  }

  submitBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();

    if (!isValidEmail(email)) {
      emailInput.style.borderColor = "red";
      return;
    }

    emailInput.style.borderColor = ""; // reset if previously red

    // Insert email into success message
    userEmailSpot.textContent = email;

    // Hide form & show success
    formContainer.classList.add("hidden");
    successCard.classList.remove("hidden");
  });

  dismissBtn.addEventListener("click", () => {
    successCard.classList.add("hidden");
    formContainer.classList.remove("hidden");

    // reset form input
    emailInput.value = "";
    emailInput.style.borderColor = "";
  });
});
