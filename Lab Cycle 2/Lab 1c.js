// Lab 1 c:

function calculate(num1, num2, operator) 
{
    switch (operator) 
	{
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}

let n1 = prompt("Enter first operand: ");
let oper = prompt("Enter the operator: ");
let n2 = prompt("Enter second operand: ");

console.log(n1,oper,n2,"=",calculate(n1,n2,oper));