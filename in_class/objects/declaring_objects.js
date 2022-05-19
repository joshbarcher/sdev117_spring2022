//we are declaring a new dog object here
//(an object literal)
let myDog = {
    name: {
        first: "Aspen",
        last: "Onishchenko",
        nick: "Pips"
    },
    breed: ["golden retriever", "poodle", "pug"],
    gender: "female",
    height: 25,                  //in inches
    weight: 125,                  //in pounds
    furType: "long hair",
    age: 3,                      //in human years
    tail: true,
    eatSomething: eat,           //assign functions by reference
    makeNoise: sayHi,
    walk: function() {           //declare a function in the object
        console.log("You took the dog on a walk");
        console.log(this.name.nick + " looks happy!");
    }
}

//try calling the "methods" on our object
myDog.makeNoise();
myDog.eatSomething("kibbles");
myDog.walk();

//we did this together!
console.log(myDog);
console.log("Michael's dog is called " + myDog.name.nick);
console.log("She is " + myDog.height + " inches tall and " +
            myDog.weight + " lbs");

//you do this!
//(print out the breeds, one by one, to the console)
for (let i = 0; i < myDog.breed.length; i++)
{
    let breed = myDog.breed[i];
    console.log(breed);
}

//functions
function eat(dogFood)
{
    console.log("The dog ate " + dogFood);

    //comment on the weight of the dog!
    if (this.weight > 100)
    {
        console.log("The dog is " + this.weight +
                    " lbs! Take it easy...");
    }
    else
    {
        console.log("The dog looks healthy!");
    }
}

function sayHi()
{
    console.log("Woof!");
}










