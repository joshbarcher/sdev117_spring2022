
//get access to our buttons
let previous = document.getElementById("previous");
let next = document.getElementById("next");

//the index of the current object shown
//on the web page
let index = 0;

//responds to clicks of the "previous" button
previous.onclick = function(event) {
    index--;

    //make sure that index is never less than zero...

    display();
}

//responds to clicks of the "next" button
next.onclick = function(event) {
    index++;

    //make sure that index is never greater than
    //array.length - 1

    display();
}

//shows the current record in the array of records
//at the position within the index variable
function display()
{
    //you should be interacting with your array here...
    let datasetRow = covidDS[index];
    console.log(datasetRow);

    //put the properties on the row of data into variables
    let population = datasetRow.Data.Population;
    let country = datasetRow.Location.Country;

    //then display the properties on the page...
}

