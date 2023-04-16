// Lab 1 b:

function findMax(a, b, c) 
{
    let max = a;
	
    if (b > max) 
	{
        max = b;
    }
    if (c > max) 
	{
        max = c;
    }
	
    return max;
}

let a = prompt("Enter first number: ");
let b = prompt("Enter second number: ");
let c = prompt("Enter third number: ");

console.log("Largest number among",a,b,c,"is",findMax(a,b,c));