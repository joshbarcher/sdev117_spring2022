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

//generate a random location for a rectangle
drawMultipleBoxes(100);

for (let i = 1; i <= 10; i++)
{
    let x = generateRandom(0, 250);
    let y = generateRandom(0, 250);

    context.fillStyle = `rgb(0, 0, 0)`;
    context.fillRect(x, y, 20, 20);
}

//functions down below here...

function drawMultipleBoxes(numBoxes)
{
    for (let i = 1; i <= numBoxes; i++)
    {
        drawRandomBox();
    }
}

function drawRandomBox()
{
    let x = generateRandom(0, 250);
    let y = generateRandom(0, 250);

    //random color components
    let r = generateRandom(0, 255);
    let g = generateRandom(0, 255);
    let b = generateRandom(0, 255);

    context.fillStyle = `rgb(${r}, ${g}, ${b})`;
    //context.fillStyle = "rgb(" + r + ", " + g + ", " + b + ")";
    context.fillRect(x, y, 20, 20);
}

//this function will *return* an integer in the range [low, high]
function generateRandom(low, high)
{
    //generate a random 'number' in the range [0, 1)
    let num = Math.random();

    //increase our random number from a percentage to a larger number
    //less than high
    num *= (high - low + 1);

    //round down to the nearest integer
    num = Math.floor(num);

    //add the low value to adjust the range of random numbers
    num += low;

    //return the number to the code segment that "called" the function
    return num;
}

//this will draw your entire scene
scene();

function scene()
{
    drawBackground();
    drawWater();
    drawGround();
}

function drawBackground()
{
    console.log("background");
}

function drawWater()
{
    console.log("water");
}

function drawGround()
{
    console.log("ground");
}



