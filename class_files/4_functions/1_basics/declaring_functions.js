//pick a random number in [1, 100]
function printRandomNum()
{
    //get a number in [0, 100)
    let num = Math.random() * 100;

    //adjust to [1, 100]
    num++;
    num = Math.round(num);

    //show result
    console.log(num);
}

//countdown to take-off!
function blastOff()
{
    for (let i = 10; i >= 1; i--)
    {
        console.log(i);
    }
    console.log("blast off!");
}