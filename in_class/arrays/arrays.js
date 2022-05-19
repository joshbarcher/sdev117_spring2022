//a book list
let books = ["Harry Potter Series", "Brilliance Trilogy", "My Girl",
             "Lord of the Rings", "Holes", "Midnight City", "Eragon",
             "A Song of Ice and Fire", "Twilight", "Dune", "Genesis",
             "Raised by Wolves", "Simirallian"];

console.log(books);

//print out the Eragon series
console.log(books[6]);
console.log("There are " + books.length + " total books");

//an alternative way to print the last book (Eragon)
console.log(books[books.length - 1]);

//store elements from an array
let firstBook = books[0];
console.log("The first book in the array is " + firstBook);

//how to change elements in the array
books[0] = "Hunger Games";
books[1] = "The Giver";
books[books.length - 1] = "Ender's Game";

//loop over the indices in the array like so...
let message = "I read ";
for (let i = 0; i < books.length; i++)
{
    let bookName = books[i];

    if (i === books.length - 1) //last book?
    {
        message += bookName + "!";
    }
    else //not the last book?
    {
        message += bookName + " and ";
    }
}

console.log(message);







