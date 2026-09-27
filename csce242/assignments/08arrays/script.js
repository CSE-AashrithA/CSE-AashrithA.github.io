const courts = {
    "Strom Thurmond Wellness and Fitness Center":
        "https://www.google.com/maps?q=Strom+Thurmond+Wellness+and+Fitness+Center&output=embed",

    "Seven Oaks Park":
        "https://www.google.com/maps?q=Seven+Oaks+Park+Columbia+SC&output=embed",

    "Saluda Shoals Park":
        "https://www.google.com/maps?q=Saluda+Shoals+Park+Columbia+SC&output=embed",

    "Caughman Road Park":
        "https://www.google.com/maps?q=Caughman+Road+Park+Columbia+SC&output=embed"
};

const stores = {
    "DICK'S Sporting Goods":
        "https://www.google.com/maps?q=DICKS+Sporting+Goods+Columbia+SC&output=embed",

    "Academy Sports + Outdoors":
        "https://www.google.com/maps?q=Academy+Sports+Columbia+SC&output=embed",

    "Play It Again Sports":
        "https://www.google.com/maps?q=Play+It+Again+Sports+Columbia+SC&output=embed",

    "Walmart Supercenter":
        "https://www.google.com/maps?q=Walmart+Supercenter+Columbia+SC&output=embed"
};

const destinationType = document.getElementById("destination-type");
const destinationList = document.getElementById("destination-list");
const map = document.getElementById("map");

// Shows the Google map for the place that was clicked
function showMap(mapLink) {
    map.innerHTML = "";

    const iframe = document.createElement("iframe");
    iframe.src = mapLink;
    iframe.title = "Google Map";

    map.appendChild(iframe);
}

// Shows either the courts or sporting-goods stores
function showDestinations() {
    destinationList.innerHTML = "";
    map.innerHTML = "";

    let places;

    if (destinationType.value === "courts") {
        places = courts;
    } else if (destinationType.value === "stores") {
        places = stores;
    } else {
        return;
    }

    for (let place in places) {
        const link = document.createElement("a");

        link.href = "#";
        link.textContent = place;

        link.onclick = function(event) {
            event.preventDefault();
            showMap(places[place]);
        };

        destinationList.appendChild(link);
    }
}

destinationType.onchange = showDestinations;