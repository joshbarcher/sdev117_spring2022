//wait for the page to load using the onload event
//with the window object
window.onload = function() {
    //select the drop-down list and add an element
    let list = document.getElementById("city");
    list.innerHTML += "<option>Portland</option>";

    //register focus events when the page loads
    addFocusEvents();
};

function addFocusEvents()
{
    //select all input buttons
    let tBoxes = document.querySelectorAll("input, select");

    for (let i = 0; i < tBoxes.length; i++)
    {
        let tBox = tBoxes[i];
        tBox.onfocus = function() { //the box gained focus
            tBox.style.backgroundColor = "lightblue";
        };
        tBox.onblur = function() { //the box lost focus
            tBox.style.backgroundColor = "";
        };
    }
}

//create a new function that (after the page loads)
//will add a double click event handler to textboxes
//when the box is double-clicked it will remove all
//text in the box








