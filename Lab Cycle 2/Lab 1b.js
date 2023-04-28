// Largest Among Three Numbers:

function Largest(a, b, c) 
{
  	let max = a;

	if(b > max)
		max = b;
	if(c > max)
		max = c;

	return max;
}

let a = window.prompt("Enter First Number:");
let b = window.prompt("Enter Second Number:");
let c = window.prompt("Enter Third Number:");

document.writeln("<h1>Largest Number Among ",a,", ",b,", ",c," is ",Largest(a,b,c),"</h1>");