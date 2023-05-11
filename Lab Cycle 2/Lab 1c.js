// Simple Calculator:

function Calculate(n1, oper, n2)
{
	switch(oper)
	{
		case '+':
			return n1 + n2;
		case '-':
			return n1 - n2;
		case '*':
			return n1 * n2;
		case '/':
			return n1 / n2;
		case '%':
			return n1 % n2;
		case '**':
			return n1 ** n2;
		default:
			return "Invalid Operator!";
	}	
}

function getData()
{
	let n1 = document.getElementById("num1").value;
	let oper = document.getElementById("oper").value;
	let n2 = document.getElementById("num2").value;

	output = Calculate(n1, oper, n2);

	if(output != "Invalid Operator!")
		document.getElementById("output display").innerHTML = "The Expression: "+n1+" "+oper+" "+n2+" = "+Calculate(n1, oper, n2);
	else
	document.getElementById("output display").innerHTML = output;
}