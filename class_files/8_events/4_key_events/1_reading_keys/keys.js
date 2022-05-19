window.onload = function() {
    let textbox = document.getElementById("textbox");
    textbox.onkeypress = record;
}

function record(event)
{
    let key = event.key;
    let code = event.code;

    console.log(key + " - " + code);
}

