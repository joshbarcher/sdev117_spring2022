
//select a single element
let articleOne = document.getElementById("article-one");
let articleTwo = document.querySelector("#article-two"); //<--------

//change the text of elements (innerText, innerHTML, textContent)
//articleOne.textContent += "Hello, world!";
//articleOne.innerText += "<em>Hello, again!</em>";
//articleOne.innerHTML += "<strong>Hello</strong>";

//change the styles of elements
articleTwo.style.fontFamily = "Impact, Arial, sans-serif"; //font-family in css
articleTwo.style.fontWeight = "bold"; //font-weight in css
articleTwo.style.color = "blue";
articleTwo.style.backgroundColor = "beige"; //background-color in css

//select multiple elements
let paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

//loop over the paragraphs and change them
for (let i = 0; i < paragraphs.length; i++)
{
    let para = paragraphs[i];
    para.style.backgroundColor = "lightblue";
    para.style.fontSize = "0.7em";

    para.innerHTML += " - Author: Josh";
}

//let's practice - loop over all h2's and underline them!
//let headers = document.querySelectorAll("h2");
let headers = document.getElementsByTagName("h2");
console.log(headers);

for (let i = 0; i < headers.length; i++)
{
    let header = headers[i];
    header.style.textDecoration = "underline";
}

//let highlights = document.getElementsByClassName("highlight");
let highlights = document.querySelectorAll(".highlight");
console.log(highlights);

for (let i = 0; i < highlights.length; i++)
{
    highlights[i].style.border = "1px solid black";
}



