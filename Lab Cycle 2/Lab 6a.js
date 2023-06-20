// Form Events:

function NameChange()
{
    // Changed = Alerts the user that Name is changed
    window.alert("Name is changed.")
}
function OnFocus() 
{
    // Focus = Changes the background color of input to yellow
    document.getElementById("Name").style.background= "yellow";
}
function OnBlur() 
{
    // No focus = Changes the background color of input to orange
    document.getElementById("Name").style.background= "orange";
}

Name = document.getElementById("Name");
Regdno = document.getElementById("Regdno");
Section = document.getElementById("Section");

Name.addEventListener('onchange', NameChange);
Name.addEventListener('onfocus', OnFocus);
Name.addEventListener('onblur', OnBlur);

Regdno.addEventListener('onfocus', OnFocus);
Regdno.addEventListener('onblur', OnBlur);

Section.addEventListener('onfocus', OnFocus);
Section.addEventListener('onblur', OnBlur);