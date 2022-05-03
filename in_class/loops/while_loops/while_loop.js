//constants
const MAX_VALUE = 100;

//sum holds the total of all user inputted values
let sum = 0;

//loop continuously until the sum of numbers the
//user entered exceeds the maximum
while (sum <= MAX_VALUE)
{
    //ask the user for a number
    let num = prompt("Enter a number");
    num = parseInt(num);

    //if this is a number and the number is positive
    if (Number.isNaN(num) === false && num > 0)
    {
        //add it to our sum
        sum += num;
        console.log(`You entered ${num}, the sum is currently ${sum}`);
    }
}

console.log(`The total after the loop completes is ${sum}`);
