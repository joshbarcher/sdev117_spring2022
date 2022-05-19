let favBook = {
    title: "The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    pages: 423,
    genres: ["fantasy", "adventure",
        "horror"],
    synopsis: "A hobbit carries a ring " +
        "to Mordor!",
    format: "Softcover"
};

console.log(favBook.title + " by " + favBook.author);
console.log("*************************************");
console.log("Pages: " + favBook.pages);
console.log("Format: " + favBook.format);
console.log("Genres: " + favBook.genres.length);
console.log("*************************************");
