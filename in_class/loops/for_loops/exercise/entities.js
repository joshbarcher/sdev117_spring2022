//select the area for entities
let paragraph = document.querySelector(".content");

//let's print out the first 300 html entities
for (let i = 1; i <= 300; i++)
{
    //HTML entities have the form: &#100; &#101; &#102;
    let entity = "&#" + i + "; ";
    paragraph.innerHTML += entity;
}