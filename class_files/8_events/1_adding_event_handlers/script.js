let button = document.querySelector("button");

//you can only register a single event handler
//with on* properties
button.onclick = function(event) {
    console.log("clicked in function #1");
};

button.onclick = function(event) {
    console.log("clicked in function #2");
};

//you can register more than one event handler
//with addEventListener()
button.addEventListener("click", function(event) {
    console.log("clicked in function #1");
});

button.addEventListener("click", function(event) {
    console.log("clicked in function #2");
});