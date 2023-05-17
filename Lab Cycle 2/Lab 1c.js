// Simple Calculator:

function calculate(n1, oper, n2)
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
		case '//':
			return Math.floor(n1/n2);
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
	let n1 = parseFloat(document.getElementById("num1").value);
	let oper = document.getElementById("oper").value;
	let n2 = parseFloat(document.getElementById("num2").value);

	output = calculate(n1, oper, n2);

	if(output != "Invalid Operator!")
		output = "The Expression: " + n1+ " " + oper + " " + n2 + " = " + output;
	
	document.getElementById("output").innerHTML = output;
}