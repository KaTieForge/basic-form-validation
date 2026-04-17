// Select form and message element
const form = document.getElementById("contactForm");
const message = document.getElementById("message");

// Add submit event listener
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Basic validation
  if (name === "" || email === "") {
    message.textContent = "Please fill out all fields.";
    message.style.color = "red";
  } else {
    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
  }
});
