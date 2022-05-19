function addAll()
{
    if (arguments.length == 0)
    {
        return undefined;
    }

    let sum = 0;

    //loop over range [0, length - 1]
    for (let i = 0; i < arguments.length; i++)
    {
        sum += arguments[i];
    }
    return sum;
}

//call addAll() with different number of parameters
