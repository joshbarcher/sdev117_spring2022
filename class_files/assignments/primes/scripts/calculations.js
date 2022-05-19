//register button clicks when the page loads
window.onload = function() {
    let analyze = document.getElementById("analyze");
    let generate = document.getElementById("generate");
    analyze.onclick = analyzeNumberOnClick;
    generate.onclick = generatePrimesOnClick;
}

function analyzeNumberOnClick(event)
{
    //prevent the form from submitting
    event.preventDefault();

    //your code here...
}

function generatePrimesOnClick(event)
{
    //prevent the form from submitting
    event.preventDefault();

    //your code here...
}