//define an empty fruit object
var fruit = {};

//add properties or methods to the object
fruit.isTasty = true;
fruit.name = "Mango";
fruit.eat = function() {
    console.log("You ate " + this.name);
};

//loop over each property
for (let property in fruit)
{
    console.log(property + " is a property");
}

