var millis = new Date().getTime();
seconds = millis / 1000;
minutes = seconds / 60;
hours = minutes / 60;
days = hours / 24;
years = days / 365; //fudge a bit here...

//round our numbers
millis = Math.round(millis);
seconds = Math.round(seconds);
minutes = Math.round(minutes);
hours = Math.round(hours);
days = Math.round(days);
years = Math.round(years);

//display them
var millisElement = document.querySelector("div#millis span");
millisElement.innerHTML = millis;
var secondsElement = document.querySelector("div#seconds span");
secondsElement.innerHTML = seconds;
var minutesElement = document.querySelector("div#minutes span");
minutesElement.innerHTML = minutes;
var hoursElement = document.querySelector("div#hours span");
hoursElement.innerHTML = hours;
var daysElement = document.querySelector("div#days span");
daysElement.innerHTML = days;
var yearsElement = document.querySelector("div#years span");
yearsElement.innerHTML = years;