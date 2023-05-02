// Reverse of a number:

let number = parseInt(window.prompt("Enter a number: "));
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
    document.writeln("<h1>The Reverse of Number: ",number," = ",('0' + rev),"</h1>")
else
    document.writeln("<h1>The Reverse of Number: ",number," = ",rev,"</h1>")