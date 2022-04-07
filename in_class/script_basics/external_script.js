//declaring a few variables for later use...
let color1 = "darkblue";
let color2 = "lightgray";

//select the h1 element above
let heading = document.querySelector("h1");

//then change the text on the h1 element
heading.innerHTML = "Welcome to my page, earthling!";
heading.style.backgroundColor = color2;
heading.style.color = color1;

