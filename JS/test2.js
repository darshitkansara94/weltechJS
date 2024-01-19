// Steps :
//     1. Create textbox - complete
//     2. Take value from textbox - complete
//     3. Identify operation (push / pop)
//     4. Create function for push and pop
//     5. Button create and execute function on button click

let array1 = [];

// MUltiple if condition
// Common function
// Function reuse

function push(arrayValue) {    
    array1.push(arrayValue);
    createLabel('-------- Clicked time : ' + array1.length);
    displayArray();
}

function pop() {
    if (array1.length == 0) {
        return false;
    }

    array1.pop();

    if (array1.length >= 0) {
        displayArray();
    }
}

function createLabel(arrayValue) {
    let label = document.createElement('label');
    label.innerText = arrayValue + '\n';
    document.body.appendChild(label);
}

function displayArray() {
    // for (let x of array1) {
    //     let label = document.createElement('label');
    //     label.innerText = x + '\n';
    //     document.body.appendChild(label);
    // }

    for (let x = 0; x < array1.length; x++) {
        createLabel(array1[x]);
    }
}

function arrayOperations(operation) {
    const textboxvalue = document.getElementById('txtValue').value;

    if (operation == 'Push') {
        push(textboxvalue);
    }
    else if (operation == 'Pop') {
        pop();
    }
    else {
        console.log('Invalid choice');
    }

    // switch (operation) {
    //     case 'Push':
    //         push(textboxvalue);
    //         //displayArray();
    //         break;
    //     case 'Pop':
    //         pop();
    //         //displayArray();
    //         break;
    //     default:
    //         console.log('Invalid choice');
    //         break;
    // }
}