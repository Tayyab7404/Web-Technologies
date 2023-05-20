function start()
{
    let colors = new Array( "cyan", "magenta","yellow", "black" );
    let integers1 = [ 2, 4, 6, 8 ]; 
    let integers2 = [ 2, , , 8 ];
    outputArray( "Array colors contains", colors, document.getElementById( "output1" ) );
    outputArray( "Array integers1 contains", integers1, document.getElementById( "output2" ));
    outputArray( "Array integers2 contains", integers2, document.getElementById( "output3" ));
} 
function outputArray(heading, theArray, output)
{
    let content = "<h2>" + heading + "</h2><table>" + "<thead><th>Index</th><th>Value</th></thead><tbody>";
    let length = theArray.length;
    for(let i=0; i<length; i++) 
    {
        content += "<tr><td>" + i + "</td><td>" + theArray[i] +  "</td></tr>";
    }
    content += "</tbody></table>";
    output.innerHTML = content;
}
window.addEventListener( "load", start, false );