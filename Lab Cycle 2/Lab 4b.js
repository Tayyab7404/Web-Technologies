// Binary Search:

let arr = new Array(1,2,3,4,5,6,7,8,9);

function binarySearch(arr, ele)
{
    let low = 0;
    let high = arr.length - 1;
    let mid;

    while(low <= high)
    {
        mid = Math.floor((low+high)/2);

        if(ele === arr[mid])
            return true;

        else if(ele < arr[mid])
            high = mid - 1;
        
        else
            low = mid + 1;
    }
    
    return false;
}

function getArray()
{
    document.getElementById("ArrayOutput").innerHTML = "The Sorted Elements are:<br>["+arr+"]<br>";
}

function getElement()
{
    let ele = parseInt(document.getElementById("element").value);
    
    if(binarySearch(arr, ele))
        document.getElementById("ElementOutput").innerHTML = "Element Found!";
    
    else
    document.getElementById("ElementOutput").innerHTML = "Element Not Found!";
}