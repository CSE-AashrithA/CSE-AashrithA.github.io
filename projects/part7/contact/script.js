const arrow = document.getElementById("arrow");
const mainNav = document.getElementById("main-nav");

const toggleMenu = () => {
    mainNav.classList.toggle("show");

    if (mainNav.classList.contains("show")) {
        arrow.innerHTML = "&#9650;";
    } else {
        arrow.innerHTML = "&#9660;";
    }
};

arrow.onclick = toggleMenu;

const contactForm = document.querySelector("#contact-form");
const formResult = document.querySelector("#form-result");

contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const formDataObject = Object.fromEntries(formData);
    const formDataJson = JSON.stringify(formDataObject);

    formResult.textContent = "Sending message...";

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: formDataJson
        });

        const data = await response.json();

        if (data.success) {
            formResult.textContent = "Thank you! Your message was sent.";
            contactForm.reset();
        } else {
            formResult.textContent = "Something went wrong. Please try again.";
        }
    } catch (error) {
        formResult.textContent = "Something went wrong. Please try again.";
    }

    setTimeout(() => {
        formResult.textContent = "";
    }, 1000);
});