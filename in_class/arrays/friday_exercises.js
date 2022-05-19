//problem #1
let coinFlips = [true, false, true, true, true, false, false, true,
                 true, false, true, true, false];
for (let i = 0; i < coinFlips.length; i++)
{
    let flip = coinFlips[i];
    if (flip === true) //heads
    {
        console.log("Coin came up heads");
    }
    else //tails
    {
        console.log("Coin came up tails");
    }
}

//problem #4
let names = ["David N.", "Cooper", "David K.", "Brandon", "Bijan", "Efrain"];
names.sort();

//fencepost technique
let output = names[0];
for (let i = 1; i < names.length; i++)
{
    output += ", " + names[i];
}
console.log(output);

//problem #5
let movies = ["Avengers", "Captain America", "Wonder Woman", "Ant Man",
              "Black Panther", "Thor", "Guardians of the Galaxy", "Iron Man"];

let smallestTitle = movies[0];
let smallest = smallestTitle.length;

for (let i = 1; i < movies.length; i++)
{
    let movie = movies[i];
    if (movie.length < smallest)
    {
        smallest = movie.length;
        smallestTitle = movie;
    }
}

console.log(smallestTitle + " has " + smallest + " characters");

