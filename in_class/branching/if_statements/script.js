//read in some data from the user (boolean, number, string) about
//a movie they recently watched
let title = prompt("Enter a movie title you recently watched.");
let genre = prompt("What genre was this movie?");
let favorite = confirm("Is this your favorite movie?");
let length = prompt("How long was the movie (in minutes)?");

//convert our strings to numbers (where needed)
length = parseInt(length);

//convert all strings to lowercase (to make comparisons easier)
genre = genre.toLowerCase();

if (genre === "science fiction")
{
    console.log("I love distopian scifi movies!");

    //make sure we received a valid movie length
    if (Number.isNaN(length))
    {
        console.log("Please enter a valid movie length");
    }
    else
    {
        //this prints a message about the length of the film
        if (length < 0)
        {
            console.log("Length of movie cannot be negative");
        }
        else if (length === 0)
        {
            console.log("How can a movie have a zero length?");
        }
        else if (length >= 120)
        {
            console.log("Good! Scifi movies should be longer!");
        }
    }
}
else if (genre === "action")
{
    console.log("I love action films");

}
else if (genre === "romance")
{
    console.log("I like romance movies");

}
else
{
    console.log(`I don't watch ${genre} films much...`);


}