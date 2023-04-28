// Leap Year Calculator:

function isLeapYear(year) 
{
  	if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) 
    		return true;
	else 
    		return false;
}

let year = window.prompt("Enter a year:");

if(isLeapYear(year))
	document.writeln("<h1>",year," is a Leap Year</h1>");
else
	document.writeln("<h1>",year," is not a Leap Year</h1>");