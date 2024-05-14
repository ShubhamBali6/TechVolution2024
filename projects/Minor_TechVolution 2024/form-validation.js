document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Validate form fields
      if (!validateForm()) {
        return;
      }
  
      // If validation succeeds, submit the form (dummy action for demonstration)
      submitForm();
    });
  
    function validateForm() {
      // Basic validation for demonstration
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const dob = document.getElementById("dob").value;
      const address = document.getElementById("address").value;
      const city = document.getElementById("city").value;
      const state = document.getElementById("state").value;
      const zip = document.getElementById("zip").value;
  
      if (!name || !email || !phone || !dob || !address || !city || !state || !zip) {
        alert("All fields are required.");
        return false;
      }
  
      // Additional validation logic (e.g., email format, phone number format, etc.) can be added here
  
      return true; // Return true if all validations pass
    }
  
    function submitForm() {
      // Dummy action for demonstration
      alert("Form submitted successfully!");
      form.reset(); // Reset the form after submission
    }
  });
  