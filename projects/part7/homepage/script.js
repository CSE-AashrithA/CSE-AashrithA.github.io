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

const tipButton = document.querySelector("#tip-button");
const tipMessage = document.querySelector("#tip-message");

const tips = [
    "Drink water throughout the day, not only after practice.",
    "Try to eat a meal with protein and carbohydrates after training.",
    "Pack a quick snack before a long class or workout.",
    "Sleep helps your body recover just as much as a workout does."
];

let tipNumber = 0;

tipButton.onclick = () => {
    tipMessage.textContent = tips[tipNumber];
    tipNumber++;

    if (tipNumber === tips.length) {
        tipNumber = 0;
    }
};