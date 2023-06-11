// Greeting Message:

let timeELement = document.getElementById("time");
let greetingElement = document.getElementById("greeting");

let currentDate = new Date();
let currentHours = currentDate.getHours();
let currentMinutes = currentDate.getMinutes();

let greetingMessage = "Good Night!";

if(currentHours < 22)
	greetingMessage = "Good Evening!";
if(currentHours < 16)
	greetingMessage = "Good Afternoon!";
if(currentHours < 12)
	greetingMessage = "Good Morning!";

let formattedHours = currentHours.toString().padStart(2, '0');
let formattedMinutes = currentMinutes.toString().padStart(2, '0');

let timeMessage = "Time: " + formattedHours + ":" + formattedMinutes;

timeELement.innerHTML = timeMessage;
greetingElement.innerHTML = greetingMessage;