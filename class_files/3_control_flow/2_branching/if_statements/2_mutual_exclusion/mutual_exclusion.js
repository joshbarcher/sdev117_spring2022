//read some boolean values...
var hungry = confirm("Hungry?");
var rainy = confirm("Rainy?");

//ask some questions...
if (!rainy && hungry)
{
    console.log("Go to Chipotle!");
}
else if (rainy && !hungry)
{
    console.log("Stay at home!");
}
else if (rainy)
{
    console.log("Grumble, I'm hungry...");
}
else
{
    console.log("I'm going out");
}

