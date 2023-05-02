// Greatest Common Divisor:
function GCD(a, b) 
{
    if (b === 0) 
        return a;
    else
        return GCD(b, a % b);
}

// Reverse a Number:
function Reverse(number)
{
    let rev = 0;
    let rem = 0;
    let flag = 0;

    if(number%10 == 0) flag = 1;

    while(number>0)
    {
        rem = number%10;
        rev = rev*10 + rem;
        number = Math.floor(number/10);
    }
    
    if(flag)
        return '0' + rev;
    else
        return rev;
}

// Generate Random Numbers:
function RandomNumber(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let n1 = parseInt(window.prompt("Enter first number to find GCD:"));
let n2 = parseInt(window.prompt("Enter second number to find GCD:"));
document.writeln("<h1>GCD of ",n1," and ",n2," = ",GCD(n1, n2),"</h1>");

let n3 = parseInt(window.prompt("Enter a number to reverse:"));
document.writeln("<h1>The Reverse of Number: ",n3," = ",Reverse(n3),"</h1>")

let n4 = parseInt(window.prompt("Enter the range to generate random number (n1):"));
let n5 = parseInt(window.prompt("Enter the range to generate random number (n2):"));
document.writeln("<h1>A Random Number in the range ",n4," and ",n5," is ",RandomNumber(n4, n5),"</h1>");