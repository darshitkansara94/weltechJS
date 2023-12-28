//Create a link using javascript.
    // 1. Create HTML Element.
    // 2. Value of the control.
    // 3. appendchild - 
    // 4. Display Text
    // 5. Assign link
    // 6. Display control on HTML page.

function createLink()
{
    // Create anchor tag
    var a = document.createElement('a'); // Create anchor tag (HTML element)

    var link = document.createTextNode('This is link 1'); // Assign value/ test to the control

    a.appendChild(link); // Value/ Text assign to anchor tag.

    a.title = "Click on a tag for link"; // Display when mouse hover on element control.

    a.href = "https://www.google.com/"; // Assign link to the anchor tag.

    document.body.appendChild(a); // Display element to the body section of HTML page.


    // Create Button
    var button = document.createElement('button');

    var buttonTextNode = document.createTextNode("This is button");

    button.appendChild(buttonTextNode);

    button.value = "This is button";

    document.body.appendChild(button);
}