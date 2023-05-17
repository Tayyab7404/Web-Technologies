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
	let year = parseInt(document.getElementById("year").value);
	let answer = '';

	if(year>0 && year<=9999)
	{	
		if(isLeapYear(year))
			answer = year + " is a Leap Year";
		else
			answer = year + " is not a Leap Year";
	}
	else
		answer = "Invalid Year!";
	
	document.getElementById("output").innerHTML = answer;
}