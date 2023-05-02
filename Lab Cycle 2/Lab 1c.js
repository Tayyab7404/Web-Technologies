// Simple Calculator:

function Calculate(n1, oper, n2)
{
	switch(oper)
	{
		case '+':
			return n1 + n2;
			break;
		case '-':
			return n1 - n2;
			break;
		case '*':
			return n1 * n2;
			break;
		case '/':
			return n1 / n2;
			break;
		case '%':
			return n1 % n2;
			break;
		case '**':
			return n1 ** n2;
			break;
		default:
			document.writeln("<h1>Invalid Operand!</h1>")
	}	
}

let n1 = parseInt(window.prompt("Enter first operand:"));
let oper = window.prompt("Enter the operator:");
let n2 = parseInt(window.prompt("Enter Second operand:"));

document.writeln("<h1>The Expression: ",n1," ",oper," ",n2," = ",Calculate(n1, oper, n2),"</h1>");