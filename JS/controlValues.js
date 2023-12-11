function btnClick() {
    // document.getElementById :
        // Returns the property of the given control.
        // We can access input control value using the "value" property.
        // It will  find element with the same id in HTML page.
        //Syntax:
            //document.getElementById('controlID')
    let FirstName = document.getElementById('FirstName').value;

    // innerText :
        // innerText will return text only from the controls / element.
    document.getElementById('lblFirstName').innerText = FirstName;
}

function divClick(){
    // innerHTML
        // innerText will return text and child HTML tag.
    const dvValue = document.getElementById('dv').innerHTML;
    const dvValueText = document.getElementById('dv').innerText;

    alert(dvValue);
    alert(dvValueText);

    let spam1 = document.getElementById('spam1').innerText;

    document.getElementById('lblSpam1').innerText = spam1;
}