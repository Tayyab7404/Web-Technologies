// Bubble Sort:

let arr = new Array(3,2,1,5,4,6,8,9,7);

function bubbleSort(arr)
{ 
    for(var i=0; i<arr.length; i++)
    {  
        let flag = false;

        for(var j=0; j<arr.length-i-1; j++)
        {  
            if(arr[j]>arr[j+1])
            {  
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                
                flag = true;
            }  
        }  

        if(flag === false)
            break;
    }

    document.getElementById("SortedArrayOutput").innerHTML = "Elements After Sorting:<br>["+arr+"]<br>";
}

function getArray()
{
    document.getElementById("UnsortedArrayOutput").innerHTML = "Elements Before Sorting:<br>["+arr+"]<br>";
}