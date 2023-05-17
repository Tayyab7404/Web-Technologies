// Largest Among Three Numbers:

function largestAmongThree(a, b, c) 
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
	let n1 = parseFloat(document.getElementById("num1").value);
	let n2 = parseFloat(document.getElementById("num2").value);
	let n3 = parseFloat(document.getElementById("num3").value);

	let answer = '';

	if(Math.floor(n1%1) <= 0 && Math.floor(n2%1) <= 0 && Math.floor(n3%1) <= 0)
		answer = "Largest Number Among "+n1+", "+n2+", "+n3+" = "+largestAmongThree(n1,n2,n3);
	else
		answer = "Invalid Number!";
	
	document.getElementById("output").innerHTML = answer;
}