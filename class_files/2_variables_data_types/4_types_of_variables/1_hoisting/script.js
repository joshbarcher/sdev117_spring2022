var isCloudy = true;

if (isCloudy) {
    message = "Better stay indoors";
} else {
    message = "Time to take a walk!";
}

//select a <p> element and show the message
let paragraph = document.querySelector("p");
paragraph.innerHTML = message;