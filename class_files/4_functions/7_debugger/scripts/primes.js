function isPrime(n)
{
    if (n <= 1)
    {
        return false;
    }

    let maxFactor = parseInt(Math.sqrt(n));
    for (let i = maxFactor; i >= 2; i--)
    {
        if (n % i == 0)
        {
            return false;
        }
    }
    return true;
}