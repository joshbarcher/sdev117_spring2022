
let rainy = true;
let message = (rainy === true) ? "Wear a coat!" : "Glad to hear it's nice out!";

/*if (rainy === true)
{
    message = "Wear a coat!";
}
else
{
    message = "Glad to hear it's nice out!";
}*/

console.log(message);

let num = -20;
let positive = (num > 0) ? true : false;
console.log(`Is it positive? ${positive}`);

//call (or "invoke") our functions up here!

/*let numRockets = prompt("Enter number of rockets");
numRockets = parseInt(numRockets);*/

//count down a rocket, 2 times!
//launchRockets(2);
//console.log("Let's take a lunch break!");

//count down a rocket, 5 times
//launchRockets(5);

for (let i = 1; i <= 100; i++)
{
    printRandomNumber();
}

//functions are going to be defined below this comment

//this function should print numbers in the range [1, 100]
function printRandomNumber()
{
    let randomNum = Math.random();
    randomNum *= 100;
    console.log("Random: " + randomNum);
}

function launchRockets(numberOfRockets)
{
    for (let i = 1; i <= numberOfRockets; i++)
    {
        blastOff();
    }
}

function blastOff()
{
    for (let i = 5; i >= 1; i--)
    {
        console.log(i);
    }
    console.log("Blast off!");
}

