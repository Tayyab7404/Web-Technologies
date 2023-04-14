function isLeap(year) 
{
	if (year % 4 === 0) 
	{
		if (year % 100 === 0)
		{
			if (year % 400 == 0)
			{
				return 1;
			} 
			else 
			{
				return 0;
			}
		} 	
		else 
		{
			return 1;
		}
	} 
	else
	{
		return 0;
	}
}

let year = prompt("Enter a year: ");

if(isLeap(year))
{
	console.log(year,"is a Leap Year");
}
else
{
	console.log(year,"is not a Leap Year");
}
