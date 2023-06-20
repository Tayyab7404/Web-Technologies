// Form Events:

function NameChange()
{
    // Changed = Alerts the user that Name is changed
    window.alert("Name is changed.")
}
function NameFocus() 
{
    // Focus = Changes the background color of input to yellow
    Name.style.background = "yellow";
}
function NameBlur() 
{
    // No focus = Changes the background color of input to orange
    Name.style.background = "orange";
}
function RegdnoFocus() 
{ Regdno.style.background = "yellow"; }
function RegdnoBlur() 
{ Regdno.style.background = "orange"; }
function SectionFocus() 
{ Section.style.background = "yellow"; }
function SectionBlur() 
{ Section.style.background = "orange"; }

Name = document.getElementById("Name");
Regdno = document.getElementById("Regdno");
Section = document.getElementById("Section");

Name.addEventListener('change', NameChange);
Name.addEventListener('focus', NameFocus);
Name.addEventListener('blur', NameBlur);

Regdno.addEventListener('focus', RegdnoFocus);
Regdno.addEventListener('blur', RegdnoBlur);

Section.addEventListener('focus', SectionFocus);
Section.addEventListener('blur', SectionBlur);