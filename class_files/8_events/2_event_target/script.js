//register event handler
let buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++)
{
    buttons[i].onclick = handleClick;
}

function handleClick(event)
{
    //get the button
    let button = event.target;

    console.log(button.innerHTML);
}

