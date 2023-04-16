// Lab 1 a:

function isLeapYear(year) 
{
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) 
	{
        return true;
    } 
	else 
	{
        return false;
    }
}

let year = prompt("Enter a year: ");

if(isLeapYear(year))
{
	console.log(year,"is a Leap Year");
}
else
{
	console.log(year,"is not a Leap Year");
}