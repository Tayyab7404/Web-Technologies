function Click()
{
    let Output = document.getElementById("OnClickText");
    
    Output.innerHTML = "You Clicked the Button!"
}

function MouseDown()
{
    let text = document.getElementById("OnMouseDownText")

    text.style.color = 'red';
}

function MouseUp()
{
    let text = document.getElementById("OnMouseDownText")

    text.style.color = 'black';
}

function MouseEnter(x)
{
    x.style.width = '80px';
    x.style.height = '64px';
}

function MouseLeave(x)
{
    x.style.width = '40px';
    x.style.height = '32px';
}

function MouseOver()
{
    let text = document.getElementById("MouseOverText");
    text.style.color = 'red';
}

function MouseOut()
{
    let text = document.getElementById("MouseOverText");
    text.style.color = 'black';
}