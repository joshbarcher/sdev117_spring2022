//fun way to predict a person in WA state
let hasUmbrella = confirm("Are you walking with an umbrella?");
let isRaining = confirm("Is it raining?");
let name = prompt("Enter your name");

//declare message here, but assign the variable in our if-statement
let message;

if (hasUmbrella && isRaining)
{
    message = "You might not be a resident in WA state";
}
else if (hasUmbrella != true && isRaining == true)
{
    message = "You are definitely from WA";
}
else if (hasUmbrella && !isRaining)
{
    message = "You live in WA (probably)";
}

//thank the user
console.log(`Thanks, ${name}!`);

//print out the message from the if-statement
if (message == undefined)
{
    console.log("You never assigned the message variable");
}
else
{
    console.log(message);
}



