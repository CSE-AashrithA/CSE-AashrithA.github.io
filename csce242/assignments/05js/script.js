const speechCard = document.getElementById("speech-card");
const speechBubble = document.getElementById("speech-bubble");
const beverageSelect = document.getElementById("beverages");
const beverageMessage = document.getElementById("beverage-message");
const sun = document.getElementById("sun");
const sticker = document.getElementById("sticker");

const showSpeech = () => {
    speechBubble.style.display = "block";
};

const showBeverageMessage = () => {
    const selectedBeverage = beverageSelect.value;

    beverageMessage.innerHTML = `${selectedBeverage}: Nice Choice!`;
};

const addSticker = () => {
    sticker.style.display = "block";
};

speechCard.onclick = showSpeech;
beverageSelect.onchange = showBeverageMessage;
sun.onclick = addSticker;