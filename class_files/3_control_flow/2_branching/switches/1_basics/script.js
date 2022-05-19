let color = "blue";

switch (color)
{
    case "yellow":
        console.log("You like yellow!");
        break;
    case "brown":
        console.log("You like brown!");
        break;
    case "blue":
        console.log("You like blue!");
        break;
    default:
        console.log("I'm not sure!");
        break;
}

let recipe = "fettuccine alfredo";

//which recipes contain noodles?
switch (recipe)
{
    case "baked rigatoni":
    case "fettuccine alfredo":
    case "spaghetti":
        console.log(recipe + " has noodles");
        break;
    case "shrimp salad":
    case "mushroom risotto":
        console.log(recipe + " does not");
        break;
}

