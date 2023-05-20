// Reverse of a number:

function reverseNum(number) 
{
    let rev = '';
    let rem = 0;
	
	if(number < 0)
		number *= -1;

    while(number>0)
    {
        rem = number%10;
        rev += rem;
        number = Math.floor(number/10);
    }
	
    return rev;
}

function getNum()
{
    let number = parseInt(document.getElementById("num").value);
	let answer = '';
	
    if(Number.isInteger(number))
        answer = "Reverse of " + number + " = " + reverseNum(number);
	else
        answer = "Invalid Number!";

	document.getElementById("output").innerHTML = answer;
}