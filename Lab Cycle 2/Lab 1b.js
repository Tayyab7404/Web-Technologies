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

function getNum()
{
	let n1 = document.getElementById("num1").value;
	let n2 = document.getElementById("num2").value;
	let n3 = document.getElementById("num3").value;

	document.getElementById("output display").innerHTML = "Largest Number Among "+n1+", "+n2+", "+n3+" is "+Largest(n1,n2,n3);
}