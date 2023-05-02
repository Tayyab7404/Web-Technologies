// Recursive Funtion for Factorial:
function Factorial()
{
    let number = parseInt(window.prompt("Enter a number to find Factorial:"));
    
    function myFactorial(number)
    {
        let fact = 1;
        let i = 1;

        for(i=number; i>1; i--)
            fact = fact * i;

        return fact;
    }

    document.writeln("<h1>Factorial of ",number," = ",myFactorial(number),"</h1>");
}

// Recursive Funtion for Fibonacci:
function Fibonacci(number)
{
    let range = parseInt(window.prompt("Enter the range to print Fibonacci Numbers:"));


}

// Recursive Funtion for Power:
function Power(base, power)
{

}