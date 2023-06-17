// Form Events:

function NameChange()
{
    // Changed = Alerts the user that Name is changed
    window.alert("Name is changed.")
}
function NameFocus() 
{
    // Focus = Changes the background color of input to yellow
    document.getElementById("Name").style.background= "yellow";
}
function NameBlur() 
{
    // No focus = Changes the background color of input to orange
    document.getElementById("Name").style.background= "orange";
}

function RegdnoFocus()
{
    document.getElementById("Regdno").style.background= "yellow";
}
function RegdnoBlur()
{
    document.getElementById("Regdno").style.background= "orange";
}
function SectionFocus()
{
    document.getElementById("Section").style.background= "yellow";
}
function SectionBlur()
{
    document.getElementById("Section").style.background= "orange";
}