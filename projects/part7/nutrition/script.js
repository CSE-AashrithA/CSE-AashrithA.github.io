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
const guidesUrl =
    "https://cse-aashritha.github.io/projects/part7/nutrition/json/nutrition-guides.json";

const getGuides = async () => {
    const response = await fetch(guidesUrl);
    return response.json();
};

const createGuideCard = (guide) => {
    const article = document.createElement("article");
    article.classList.add("guide-card");

    const img = document.createElement("img");
    img.src = `images/${guide.img_name}`;
    img.alt = guide.title;

    const title = document.createElement("h3");
    title.textContent = guide.title;

    const category = document.createElement("p");
    category.textContent = guide.category;

    const description = document.createElement("p");
    description.textContent = guide.description;

    const bestTime = document.createElement("p");
    bestTime.textContent = `Best time: ${guide.best_time}`;

    const benefit = document.createElement("p");
    benefit.textContent = `Benefit: ${guide.benefit}`;

    article.append(img);
    article.append(title);
    article.append(category);
    article.append(description);
    article.append(bestTime);
    article.append(benefit);

    return article;
};

const showGuides = async () => {
    const guides = await getGuides();
    const guideList = document.querySelector("#guide-list");

    guides.forEach((guide) => {
        guideList.append(createGuideCard(guide));
    });
};

showGuides();