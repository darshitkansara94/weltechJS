// Declare two variable for addition.

// const a = 0;
// const b = 0;

function Addition(a, b) {
    // console.log('test');

    if(a == '' || a == null)
    {
        return;
    }

    if(b == '' || b == null)
    {
        return;
    }

    return a + b;
    console.log('test');
}

// Syntax of switch case :
//     switch(condition)
//     {
//         case 1:
//             // code 
//             break;
//         case 2:
//             // code
//             break;
//         default:
//             // code
//             break;
//     }

// choice = Addition / Multiplication
// a = First value
// b = Second value
function calculation(choice) {
    const a = Number(document.getElementById('value1').value);
    const b = Number(document.getElementById('value2').value);



    switch (choice) {
        case 'Addition':
            const add = Addition(a, b);
            document.getElementById('lblAnswer').innerText = add;
            // console.log(a + b);
            break;
        case 'Multiplication':
            document.getElementById('lblAnswer').innerText = a * b;
            //console.log(a * b);
            break;
        default:
            console.log("Invalid choice");
            break;
    }
}