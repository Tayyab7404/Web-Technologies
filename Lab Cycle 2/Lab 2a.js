// Sum of Digits of a Number:

function sumOfDigits(number)
{
    let sum = 0;
    let rem = 0;

    if(number < 0)
    {
        number *= -1;
    }

    while(number>0)
    {
        rem = number % 10;
        sum += rem;
        number = Math.floor(number/10);
    }

    return sum;
}

function getNum()
{
    let number = parseInt(document.getElementById("num").value);
    let answer = '';
    
    if(Number.isInteger(number))
        answer = "Sum of Digits of " + number + " = " + sumOfDigits(number);
    else 
        answer = "Invalid Number!"

    document.getElementById("output").innerHTML = answer;
}