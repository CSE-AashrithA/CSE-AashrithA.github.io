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