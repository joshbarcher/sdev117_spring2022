window.onload = function() {
    let button = document.getElementById("submit");
    button.onclick = validateForm;
}

function validateForm(event)
{
    //prevent the form from submitting
    event.preventDefault();

    //validate the form...
}

