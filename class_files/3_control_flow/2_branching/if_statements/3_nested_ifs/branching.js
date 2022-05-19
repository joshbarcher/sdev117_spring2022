let tookPart = confirm("Did you take part in the recent census?");

if (tookPart)
{
    let county = prompt("What county are you from?");
    if (county === "king" || county === "pierce")
    {
        console.log("Watch your mail for a check!");
    }
    else
    {
        console.log("Great job!")
    }
}
else
{
    console.log("You should participate next time!");
}

