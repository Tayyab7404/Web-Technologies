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

	let answer = '';

	if(Math.floor(n1%1) <= 0 && Math.floor(n2%1) <= 0)
	{
		answer = calculate(n1, oper, n2);
		
		if(answer != "Invalid Operator!")
			answer = "The Expression: " + n1 + " " + oper + " " + n2 + " = " + answer;
	}
	else
		answer = "Invalid Number!";
	
	document.getElementById("output").innerHTML = answer;
}