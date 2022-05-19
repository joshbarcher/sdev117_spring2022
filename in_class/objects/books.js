//this is my book object
let dune = {
    title: "Dune",
    author: "Frank Herbert",
    pages: 412,
    genres: ["political", "thriller", "science fiction"],
    published: 1965,
    hardcover: true,
    printBook: function() {
        console.log("********************************");
        console.log(this.title + " by " + this.author);
        console.log("Number of genres - " + this.genres.length);
        console.log("Published - " + this.published);
        console.log("Hardcover? " + this.hardcover);
        console.log("********************************");
    },
    alternativePrint: print
}

dune.printBook();
dune.alternativePrint();

function print()
{
    console.log("********************************");
    console.log(this.title + " by " + this.author);
    console.log("Number of genres - " + this.genres.length);
    console.log("Published - " + this.published);
    console.log("Hardcover? " + this.hardcover);
    console.log("********************************");
}