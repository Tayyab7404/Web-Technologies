function Click()
{
    document.getElementById("OnClickText").innerHTML = "You Clicked the Button!"
}

function MouseDown()
{
    OnMouseDownText.style.color = 'red';
}

function MouseUp()
{
    OnMouseDownText.style.color = 'black';
}

function MouseEnter()
{
    image.style.width = '80px';
    image.style.height = '64px';
}

function MouseLeave()
{
    image.style.width = '40px';
    image.style.height = '32px';
}

function MouseOver()
{
    MouseOverText.style.color = 'red';
}

function MouseOut()
{
    MouseOverText.style.color = 'black';
}

let OnClickButton = document.getElementById('OnClickButton');
OnClickButton.addEventListener('click', Click);

let OnMouseDownText = document.getElementById("OnMouseDownText");
OnMouseDownText.addEventListener('mousedown', MouseDown);
OnMouseDownText.addEventListener('mouseup', MouseUp);

let image = document.getElementById("emoji");
image.addEventListener('mouseenter', MouseEnter);
image.addEventListener('mouseleave', MouseLeave)

let MouseOverText = document.getElementById("MouseOverText");
MouseOverText.addEventListener('mouseover',MouseOver);
MouseOverText.addEventListener('mouseout',MouseOut);