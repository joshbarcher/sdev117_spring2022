//ask the user for their color
let color = prompt("Enter your favorite color");

//comment on their choice
switch (color)
{
    case "blue":
        alert("My favorite color!");
        break;
    case "red":
        alert("This is an angry color!");
        break;
    case "black":
        alert("The color of the sky at night!");
        break;
    case "green":
        alert("A verdant color!");
        break;
    case "pink":
        alert("The color of my shirt!");
        break;
    default:
        alert(`${color} is a cool color!`);
        break;
}

