//read in two values (as strings)
let num1 = prompt("Enter a number");
let num2 = prompt("Enter a number");

//convert a string to a number using parseInt() or parseFloat()
num1 = parseInt(num1); //convert the value in num1 to a number
num2 = parseInt(num2); //convert the value in num2 to a number

//is either of our inputs bad (Not a Number)
if (Number.isNaN(num1) || Number.isNaN(num2))
{
    console.log("Please enter valid numbers");
}
else
{
    //add them together
    let resultAdd = num1 + num2;
    let resultSubtract = num1 - num2;
    let resultMultiply = num1 * num2;
    let resultDivide = num1 / num2;

    //show the result (using string interpolation)
    console.log(`The result of ${num1} + ${num2} = ${resultAdd}`);
    console.log(`The result of ${num1} - ${num2} = ${resultSubtract}`);
    console.log(`The result of ${num1} * ${num2} = ${resultMultiply}`);
    console.log(`The result of ${num1} / ${num2} = ${resultDivide}`);
}
