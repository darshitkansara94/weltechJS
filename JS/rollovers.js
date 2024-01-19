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

// classname :
// Assign class on particular event.
//syntax:
// document.getElementById('controlname').className = 'css classname';
// Remove :
//document.getElementById('controlname').className = '';

// ClassList :
// Assign class on particular event.
// We can assign multiple class at single time.

// Syntax :
// document.getElementById('controlname').classList.add('list of class')
// document.getElementById('controlname').classList.add('class1','class2'..,'n no of class');
// document.getElementById('controlname').classList.remove('class1');

function buttonHover() {
    document.getElementById('btnSave').className = 'buttonHover';
}

function buttonclasslist() {
    document.getElementById('btnClear').classList.add('buttonHover', 'btnClear');
    document.getElementById('btnClear').classList.remove('buttonhtml');
}

function onFocus() {
    // document.getElementById('txtFocus').style.backgroundColor = 'yellow';
    // document.getElementById('txtFocus').style.color = 'green';
    document.getElementById('txtFocus').className = 'btn';
}

function onBlur() {
    document.getElementById('txtFocus').style.color = 'red';
}

// onblur()
// onkeydown()
// onkeyup()
// onkeypress()
// onfocus()