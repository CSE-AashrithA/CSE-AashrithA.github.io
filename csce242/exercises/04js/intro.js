//Shows a message when the button is clicked
document.getElementById("btn-show-message") .onCLick = () => {
    document. getElementById("p-message").innerHTML = "Hello World";
    e.target.innerHTML = "done";
};

//Styles the link when its clicked
document.getElementById("link").onClick = (e) => {
    e.preventDefault(); //dont go to links destination
    e.target.classList.add("cool-link");
}