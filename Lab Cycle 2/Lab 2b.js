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
	
	let answer = reverseNum(number);
	
    if(answer === "")
		document.getElementById("output").innerHTML = "Invalid Number!";
	else
		document.getElementById("output").innerHTML = "Reverse of " + number + " = " + answer;
}