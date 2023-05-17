// Greatest Common Divisor:
function GCD(a, b) 
{
    if (b === 0) 
        return Math.abs(a);
    else
        return Math.abs(GCD(b, a%b));
}

// Reverse a Number:
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

// Generate Random Numbers:
function genRandNum(min ,max)
{
    return Math.floor(Math.random()*(max - min) + min);
}

function getGcdNum()
{
    let num1 = parseInt(document.getElementById("gcdNum1").value);
    let num2 = parseInt(document.getElementById("gcdNum2").value);
    let answer = '';

    if(Number.isInteger(num1) && Number.isInteger(num2))
        answer = "GCD of " + num1 + " and " + num2 + " = " + GCD(num1, num2);
    else
        answer = "Invalid Number!";

    document.getElementById("GcdOutput").innerHTML = answer;
}

function getRevNum()
{
    let number = parseInt(document.getElementById("revNum").value);
	
	let answer = '';
	
    if(Number.isInteger(number))
        answer = "Reverse of " + number + " = " + reverseNum(number);
	else
        answer = "Invalid Number!";

	document.getElementById("ReverseOutput").innerHTML = answer;
}

function getRandRange()
{
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);
    let answer = '';

    if(Number.isInteger(min) && Number.isInteger(min))
    {
        if(min < max-1)
            answer = "A Random Number in the range (" + min + ", " + max + "): " + genRandNum(min, max);
        else
            answer = "min should be less than max!"
    }
    else
        answer = "Invalid Number!";

    document.getElementById("RandomOutput").innerHTML = answer;
}