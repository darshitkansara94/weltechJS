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

    if(firstName == '' || firstName == null)
    {
        return "Enter First Name";
    }

    if(lastName == '' || firstName == null)
    {
        return "Enter Last Name";
    }

    let fullstring = firstName + ' ' + lastName;

    return fullstring;
}