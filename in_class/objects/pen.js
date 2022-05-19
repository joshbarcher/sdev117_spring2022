//declare the pen as an empty object
let pen = {};

//then add properties & methods afterwards
pen.material = "metal";
pen.hasInk = true;
pen.brand = "Pen Inc.";
pen.color = "blue";

console.log("The color of the pen is " + pen.color);

pen.write = function(message) {
    console.log(`You wrote ${message}`);
};

pen.addInk = function() {
    //use this to access the hasInk property
    this.hasInk = true;
}

pen.write("Hello, world!");

//print out the material of the pen using
//square-bracket notation
console.log("The pen is " + pen["material"]);

pen["is broken"] = true;
console.log(pen["is broken"]);










