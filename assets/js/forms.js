// ============================================
// Chandradev Foods Website Forms
// ============================================

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxUyjGI7qfL5uK2hw4x2p0sujHDJqwESlN-b1pI8KMKWzdV2mmMkbqIdQZbW2RWIutX/exec";

// ==============================
// Mobile Number Validation
// ==============================
document.querySelectorAll('input[type="tel"]').forEach(input => {

    input.addEventListener("input", function () {

        this.value = this.value.replace(/\D/g, "").slice(0, 10);

    });

});

const contactForm = document.getElementById("contactForm");

const contactStatus = document.getElementById("contactStatus");

if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const formData = Object.fromEntries(new FormData(contactForm).entries());

        try {

            const response = await fetch(SCRIPT_URL, {
                method: "POST",
                body: JSON.stringify(formData)
            });

            const result = await response.json();

if (result.success) {

    contactStatus.innerHTML =
        '<div class="success-message">✓ Thank you! Your enquiry has been submitted successfully. Our team will contact you soon.</div>';

    contactForm.reset();

} else {

    contactStatus.innerHTML =
        '<div class="error-message">' + result.message + '</div>';

}
        } catch (error) {

            contactStatus.innerHTML =
    '<div class="error-message">Unable to submit your enquiry. Please try again later.</div>';

            console.error(error);

        }

    });

}

// ============================================
// Distributor Form
// ============================================

const distributorForm = document.getElementById("distributorForm");

const distributorStatus = document.getElementById("distributorStatus");

if (distributorForm) {

    distributorForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const formData = Object.fromEntries(
            new FormData(distributorForm).entries()
        );

        try {

            const response = await fetch(SCRIPT_URL, {
                method: "POST",
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (result.success) {

                distributorStatus.innerHTML =
                    '<div class="success-message">✓ Thank you! Your distributor application has been submitted successfully. Our business team will contact you soon.</div>';

                distributorForm.reset();

            } else {

                distributorStatus.innerHTML =
                    '<div class="error-message">' + result.message + '</div>';

            }

        } catch (error) {

            distributorStatus.innerHTML =
                '<div class="error-message">Unable to submit your application. Please try again later.</div>';

            console.error(error);

        }

    });

}