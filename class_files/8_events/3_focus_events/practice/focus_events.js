//wait for the page to load using the onload event
//with the window object
window.onload = function() {
    //select the drop-down list and add an element
    let list = document.getElementById("city");
    list.innerHTML += "<option>Portland</option>";

    //register events when the page loads
    addFocusEvents();
    addDoubleClickEvents();
};

function addFocusEvents()
{
    //select all input buttons
    let formElements = document.querySelectorAll("input, select");

    for (let i = 0; i < formElements.length; i++)
    {
        let element = formElements[i];
        element.onfocus = function() { //the box gained focus
            element.style.backgroundColor = "lightblue";
        };
        element.onblur = function() { //the box lost focus
            element.style.backgroundColor = "";
        };
    }
}

//create a new function that (after the page loads)
//will add a double click event handler to textboxes
//when the box is double-clicked it will remove all
//text in the box

function addDoubleClickEvents()
{
    let textboxes = document.querySelectorAll("input[type='text']");

    for (let i = 0; i < textboxes.length; i++)
    {
        let box = textboxes[i];
        box.ondblclick = clearsTextbox;
    }
}

function clearsTextbox(event)
{
    //element is the form control that was double clicked
    let element = event.target;

    console.log("Double clicked");

    //clear out textbox contents here...
    element.value = "";
}




