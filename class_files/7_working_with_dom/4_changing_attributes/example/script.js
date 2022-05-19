//change links
let links = document.getElementsByTagName("a");

let first = links[0];
first.textContent = "Adblock Plus";
first.setAttribute("href", "https://addons.mozilla.org/en-US/firefox/addon/adblock-plus/");

let second = links[1];
second.textContent = "Https Everywhere";
second.setAttribute("href", "https://addons.mozilla.org/en-US/firefox/addon/https-everywhere/");

let third = links[2];
