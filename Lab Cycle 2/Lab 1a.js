// Leap Year Calculator:

function isLeapYear(year) 
{
  	if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) 
    		return true;
	else 
    		return false;
}

function getYear()
{
	let year = document.getElementById("year").value;

	if(isLeapYear(year))
		document.getElementById("output display").innerHTML = year + " is a Leap Year";
	else
		document.getElementById("output display").innerHTML = year + " is not a Leap Year";
}