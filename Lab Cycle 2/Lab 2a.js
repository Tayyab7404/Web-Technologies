// Sum of Digits of a Number:

function SumOfDigits(number)
{
    let sum = 0;
    let rem = 0;

    while(number>0)
    {
        rem = number % 10;
        sum += rem;
        number = Math.floor(number/10);
    }

    return sum;
}

number = parseInt(window.prompt("Enter a number:"));

document.writeln("<h1>Sum of Digits of ",number," = ",SumOfDigits(number),"</h1>");