const carColors = ["red", "blue", "orange", "purple", "teal", "pink"];

function createCar(color, leftPosition, topPosition) {
    const car = document.createElement("div");
    const roof = document.createElement("div");

    car.className = "car";
    roof.className = "roof";

    car.style.backgroundColor = color;
    car.style.left = leftPosition + "%";
    car.style.top = topPosition + "px";

    car.appendChild(roof);

    document.getElementById("road").appendChild(car);
}

for (let i = 0; i < 8; i++) {
    const randomColor = carColors[Math.floor(Math.random() * carColors.length)];
    const randomLeft = Math.floor(Math.random() * 88);

    let randomTop = 30;

    if (Math.random() < 0.5) {
        randomTop = 120;
    }

    createCar(randomColor, randomLeft, randomTop);
}