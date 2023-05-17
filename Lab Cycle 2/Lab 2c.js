// First 10 Natural Numbers:

function printNums()
{
    for(let num=1; num<=10; num++)
    {
        if(num === 5)
            continue;
        document.getElementById("output").innerHTML += " " + num;
    }
}