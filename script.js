// Configuration
const SECRET_CODE = "GIFT2026"; // Change this to your secret code

// Utility functions
function showSection(sectionId) {
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active");
  });
  document.getElementById(sectionId).classList.add("active");
}

function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  errorElement.classList.add("show");
  setTimeout(() => {
    errorElement.classList.remove("show");
  }, 5000);
}

// Step 1: Validate Secret Code
function validateSecretCode() {
  const enteredCode = document
    .getElementById("secret-code")
    .value.trim()
    .toUpperCase();

  if (!enteredCode) {
    showError("code-error", "Please enter a secret code");
    return;
  }

  if (enteredCode === SECRET_CODE) {
    showSection("form-section");
  } else {
    showError("code-error", "Invalid secret code. Please try again.");
    document.getElementById("secret-code").value = "";
  }
}

// Step 2: Handle Form Submission
document
  .getElementById("gift-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const submitButton = this.querySelector('button[type="submit"]');

    submitButton.textContent = "Submitting...";
    submitButton.disabled = true;

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const zip = document.getElementById("zip").value;
    const country = document.getElementById("country").value;
    const notes = document.getElementById("notes").value;

    // Construct message body with all shipping information
    let message = `GIFT RECIPIENT INFORMATION\n\n`;
    message += `Phone: ${phone}\n`;
    message += `\nShipping Address:\n`;
    message += `${address}\n`;
    message += `${city}, ${state} ${zip}\n`;
    message += `${country}\n`;

    if (notes) {
      message += `\nDelivery Instructions:\n${notes}`;
    }

    // Create form data with only Web3Forms accepted fields
    const formData = new FormData();
    formData.append("access_key", "86eb9331-f0c0-4e97-8ca4-69dfb6bc3e99");
    formData.append("subject", "New Gift Recipient Information");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        showSection("success-section");
      } else {
        showError("form-error", "Failed to submit form. Please try again.");
        submitButton.textContent = "Submit Information";
        submitButton.disabled = false;
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      showError(
        "form-error",
        "Network error. Please check your connection and try again.",
      );
      submitButton.textContent = "Submit Information";
      submitButton.disabled = false;
    }
  });

// Allow Enter key to submit on secret code field
document
  .getElementById("secret-code")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      validateSecretCode();
    }
  });
