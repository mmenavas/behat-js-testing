var appContainer = document.getElementById("app");
var nameInput = appContainer.getElementsByClassName("app__user-name")[0];
var submitButton = appContainer.getElementsByClassName("app__submit")[0];
var greetingElement = appContainer.getElementsByClassName("app__greeting")[0];

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    greetingElement.textContent = "Hello " + nameInput.value;
}, false);

