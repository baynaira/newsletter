document.addEventListener("DOMContentLoaded", function () {
    const emailForm = document.getElementById("email-form");
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");

    emailForm.addEventListener("submit", function (e) {
        e.preventDefault(); 
       
        const emailValue = emailInput.value.trim();

        if (!isValidEmail(emailValue)) {
            emailError.textContent = "Valid email required";
            emailInput.classList.add("invalid"); 
           

        } else {
            
            emailError.textContent = ""; 
            emailInput.classList.remove("invalid"); 
            emailForm.submit();

        }
    });
function isValidEmail(email) {
        // Use a regular expression for basic email format validation
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailPattern.test(email);

    }

});


