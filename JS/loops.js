// What is loop:
//     Iteration which is execute until the condition is false

// Types of loop:
//     1. for
//     2. foreach
//     3. do while
//     4. for in

// Initialization:


// break

// const a = 'abc';
// const b = 'abc';

// switch (a) {
//     case 'cde':
//         alert('cde');
//         break;
//     case 'abc':
//         alert('abc');
//         break;
//     case 'ddf':
//         alert('ddf');
//         break;
//     default:
//         alert('default');
//         break;
// }

//return operator :
function printvalue() {
    let firstName = '';
    let lastName = 'kansara';

    let concatenatedString = concatestring(firstName, lastName);

    document.getElementById('str').innerText = concatenatedString;
}

function concatestring(firstName, lastName) {

    if (firstName == '' || firstName == null) {
        return "Enter First Name";
    }

    if (lastName == '' || firstName == null) {
        return "Enter Last Name";
    }

    let fullstring = firstName + ' ' + lastName;

    return fullstring;
}


// Incremental Operator:
// Increment the value of variable.

// Two types of Incremental Operator:
// 1. Prefix
//     Increment value first and return the value.
// 2. Postfix
//     Return the value first and then increment the value.

// How to define incremental operator:
//  Define using two plus signs(++).

function prefixOperator() {
    let y = 1;

    let z = ++y;

    console.log("Y value : " + y);
    console.log("z value : " + z);
}

function postOperator() {
    let y = 1;

    let z = y++;

    console.log("Y value : " + y);
    console.log("z value : " + z);
}

// for loop:
// synatx:
//     for(variable; condition; Incremental / Decremental Operator)
//     {
//         // Iteration code
//     }


function forloopexample() {
    let y = 5;

    document.getElementById('readonly').value = y;

    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Firday", "Saturday"]; 

    for (let x = 0; x < day.length; x++) { // day.length = 7
        console.log(day[x]);
    }
}
