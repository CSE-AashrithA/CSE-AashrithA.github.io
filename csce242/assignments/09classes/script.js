// I found Vacation images on Unsplash: https://unsplash.com/
class Vacation {
    constructor(title, type, description, thingsToDo, image, map) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.thingsToDo = thingsToDo;
        this.image = image;
        this.map = map;
    }

    getCard() {
        const card = document.createElement("article");
        card.classList.add("vacation-card");

        const title = document.createElement("h3");
        title.innerHTML = this.title;

        const type = document.createElement("p");
        type.innerHTML = this.type + " Vacation";

        const image = document.createElement("img");
        image.src = "images/" + this.image;
        image.alt = this.title;

        card.appendChild(title);
        card.appendChild(type);
        card.appendChild(image);

        card.onclick = () => {
            showModal(this);
        };

        return card;
    }

    getDetails() {
        const details = document.createElement("div");

        const title = document.createElement("h2");
        title.innerHTML = this.title;

        details.appendChild(title);
        details.appendChild(this.addInfoLine("Type", this.type));
        details.appendChild(this.addInfoLine("Description", this.description));
        details.appendChild(this.addInfoLine("Things to Do", this.thingsToDo));

        return details;
    }

    addInfoLine(label, information) {
        const paragraph = document.createElement("p");
        paragraph.innerHTML = "<strong>" + label + ":</strong> " + information;

        return paragraph;
    }
}

const vacations = [
    new Vacation(
        "Brevard",
        "Mountain",
        "A quiet mountain town near waterfalls, trails, and local restaurants.",
        "Visit Looking Glass Falls, hike in Pisgah National Forest, and explore downtown.",
        "brevard.jpg",
        "https://www.google.com/maps?q=Brevard+NC&output=embed"
    ),

    new Vacation(
        "Highlands",
        "Mountain",
        "A scenic North Carolina mountain town with overlooks and cool weather.",
        "Drive the Waterfall Byway, visit Dry Falls, and shop downtown.",
        "highlands.jpg",
        "https://www.google.com/maps?q=Highlands+NC&output=embed"
    ),

    new Vacation(
        "Bryson City",
        "Mountain",
        "A relaxing mountain destination near the Great Smoky Mountains.",
        "Ride the Great Smoky Mountains Railroad, hike, and visit Deep Creek.",
        "bryson-city.jpg",
        "https://www.google.com/maps?q=Bryson+City+NC&output=embed"
    ),

    new Vacation(
        "Kiawah Island",
        "Beach",
        "A peaceful South Carolina beach destination with wide beaches and bike paths.",
        "Relax on the beach, bike around the island, and watch the sunset.",
        "kiawah.jpg",
        "https://www.google.com/maps?q=Kiawah+Island+SC&output=embed"
    ),

    new Vacation(
        "Isle of Palms",
        "Beach",
        "A beach town near Charleston with restaurants, shops, and ocean views.",
        "Spend time at the beach, visit local restaurants, and explore Charleston.",
        "isle-palms.jpg",
        "https://www.google.com/maps?q=Isle+of+Palms+SC&output=embed"
    ),

    new Vacation(
        "Wrightsville Beach",
        "Beach",
        "A lively North Carolina beach town with clear water and outdoor activities.",
        "Go kayaking, walk the beach, and visit nearby Wilmington.",
        "wrightsville.jpg",
        "https://www.google.com/maps?q=Wrightsville+Beach+NC&output=embed"
    )
];

const vacationList = document.getElementById("vacation-list");
const modal = document.getElementById("vacation-modal");
const modalInfo = document.getElementById("modal-info");
const closeModalButton = document.getElementById("close-modal");

const showModal = (vacation) => {
    modalInfo.innerHTML = "";

    const map = document.createElement("iframe");
    map.src = vacation.map;
    map.title = "Map of " + vacation.title;

    modalInfo.appendChild(map);
    modalInfo.appendChild(vacation.getDetails());

    modal.classList.remove("hidden");
};

const closeModal = () => {
    modal.classList.add("hidden");
    modalInfo.innerHTML = "";
};

closeModalButton.onclick = closeModal;

for (let i = 0; i < vacations.length; i++) {
    vacationList.appendChild(vacations[i].getCard());
}