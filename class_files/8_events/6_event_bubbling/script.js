

window.onload = function() {
    let elements = document.querySelectorAll(
        "div, section, p");
    for (let i = 0; i < elements.length; i++)
    {
        let element = elements[i];
        element.onclick = function(event) {
            element.style.backgroundColor = "beige";
        }
    }
}

