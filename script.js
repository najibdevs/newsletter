document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById("email");
    const emailBtn = document.getElementById("emailbtn");
    const sections = {
        newsletter: document.querySelector(".newsletter"),
        card: document.querySelector(".card"),
        imageContainer: document.querySelector(".image-container"),
        thankYou: document.querySelector(".thank-you")
    };
    const dismissBtn = sections.thankYou.querySelector("button");

    function toggleVisibility(showThankYou) {
        Object.values(sections).forEach(section => {
            section.classList.toggle('hidden', section !== sections.thankYou);
        });
        sections.thankYou.classList.toggle('hidden', !showThankYou);
    }

    function updateEmailValidationStyle(isValid) {
        emailInput.classList.toggle("input-valid", isValid);
        emailInput.classList.toggle("input-invalid", !isValid);
    }

    emailBtn.addEventListener("click", function() {
        const email = emailInput.value;
        if (validateEmail(email)) {
            toggleVisibility(true);
            sections.thankYou.querySelector('p').innerHTML = `A confirmation has been sent to <strong>${email}</strong>. Please open it and click the button inside to confirm your subscription.`;
        } else {
            alert("Please enter a valid email address.");
        }
    });

    emailInput.addEventListener("keyup", function() {
        updateEmailValidationStyle(validateEmail(emailInput.value));
    });

    dismissBtn.addEventListener("click", function() {
        toggleVisibility(false);
    });
});

function validateEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}
