// What is rollovers :
// Rollover creates an animation on HTMl controls.
// When we need to add animation or color change effect on 
// any control then we need to use rollover

function printFirstNameText() {
    document.getElementById('txtName').value = 'First Name';
}

function mouseOut() {
    document.getElementById('txtName').value = '';
}

function mouseLeave() {
    document.getElementById('txtLastName').value = 'WelTech';
}

function mouseOver() {
    document.getElementById('txtLastName').value = 'Last Name';
}

// onblur()
// onkeydown()
// onkeyup()
// onkeypress()
// onfocus()