//wait for the page to load, then add
//our event handler to the button
window.onload = function() {
    //we should select the form button, then stop the form
    //from submitting
    let formButton = document.querySelector("button");
    formButton.onclick = function(event) {
        //stop the default behavior (the form submitting,
        //since the button is in the form)
        event.preventDefault();

        console.log("Handling form submit!");
        validateForm();
    };
};

function validateForm()
{
    //make sure the user has selected a security question & answer
    let secDropDown = document.getElementById("user-sec-question");
    let secTextbox = document.getElementById("user-sec-answer");

    //get the value from the dropdown and textbox
    let question = secDropDown.value;
    let answer = secTextbox.value;

    console.log(question + " - " + answer);

    if (answer.length <= 5)
    {
        alert("Security answer must be more than 5 characters");
    }
    else
    {
        //submit the form
        document.forms["account-form"].submit();
    }
}












