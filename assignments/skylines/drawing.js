//select our canvas and get the "context" of the canvas
let canvas = document.getElementById("my-canvas");
let context = canvas.getContext("2d");

context.fillStyle = "rgb(56,117,56)";

//fillRect() parameters - x, y, width, height
context.strokeRect(10, 10, 50, 50);

//pink box on the right
context.fillStyle = "rgb(230,47,182)";
context.fillRect(240, 120, 50, 40);

//big yellow box on the bottom left
context.fillStyle = "rgb(255,234,49)";
context.fillRect(20, 200, 90, 80);