// Recursive Function for Factorial:
function Factorial(number)
{
    if(number <= 1)
        return 1;
    
    return number * Factorial(number-1);
}

// Recursive Funtion for Fibonacci:
function Fibonacci(number)
{
    if(number === 1)
        return 0;
    if(number === 2 || number === 3)
        return 1;

    return Fibonacci(number-1) + Fibonacci(number-2);
}

// Recursive Funtion for Power:
function Power(base, power)
{
    
    if(power === 0)
        return 1;
    if(power === 1)
        return base;
    if(power < 0)
        return 1/Power(base, -power);
    if(base<0 && power%2 == 0)
        return Power(-base, power);
    if(base<0 && power%2 == 1)
        return -Power(-base, power);
    if(power%1 !== 0)
        return base ** power

    return base * Power(base, power-1)
}

function getFactNum()
{
    let num = parseInt(document.getElementById("FactNum").value);
    let answer = '';

    if(Number.isInteger(num))
    {
        if(num >= 0)
            answer = "Factorial of " + num + " = " + Factorial(num);
        else
            answer = "Factorial of " + num + " = Undefined";
    }
        
    else answer = "Invalid Number!";

    document.getElementById("FactOutput").innerHTML = answer;
}

function getFibCount()
{
    let count = parseInt(document.getElementById("FibCount").value);
    let answer = '';

    if(Number.isInteger(count))
    {
        if(count > 0)
        {
            if(count > 40)
                answer = "Stack Overflow!<br>Cannot print " + count + " Fibonacci Numbers";
            else
            {
                let i;
                answer = "The First " + count + " Fibonacci Numbers are:<br>";

                for(i=1; i<count; i++)
                    answer += Fibonacci(i) + ", ";
                answer += Fibonacci(i);
            }
        }
        else
            answer = "Invalid Count!";
    }
    else
        answer = "Invalid Number!";

    document.getElementById("FibOutput").innerHTML = answer;
}

function getBaseExp()
{
    let base = parseFloat(document.getElementById("BaseNum").value);
    let exp = parseFloat(document.getElementById("ExpNum").value);
    let answer = "The Expression: " + base + " ** " + exp + " = ";

    if(Math.floor(base%1) <= 0 && Math.floor(exp%1) <= 0)
    {
        if(base < 0 && exp%1 !== 0)
            answer += "Complex Number";
        else
            answer +=  Power(base, exp);
    }
    else
        answer = "Invalid Number!";

    document.getElementById("PowerOutput").innerHTML = answer;
}