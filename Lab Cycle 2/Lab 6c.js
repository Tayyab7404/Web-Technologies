// Event Bubbling:

let parent = document.getElementById('parent')
let child = document.getElementById('child')

let output1 = document.getElementById('output1')
let output2 = document.getElementById('output2')

parent.addEventListener('click',function(){output1.innerHTML = "Parent is Invoked.";})
child.addEventListener('click',function(){output2.innerHTML = "Child is Invoked.";})