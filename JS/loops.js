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

    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Firday", "Saturday"];

    for (let x = 0; x < day.length; x++) { // day.length = 7
        console.log(day[x]);
    }
}

// Decrement (--) operator
// Days print in reverse order.
// Ex o/p :
// Reverse weekdays

// day.length = 7 - 1 = 6;

// "Sunday"=0,
// "Monday" =1, "Tuesday" = 2,
// "Wednesday" = 3, 
// "Thursday" = 4, 
// "Firday" = 5, 
// "Saturday" = 6

// day[7] = undefined
// day[6] = Saturday,

function forloopwithdecrement() {
    try {
        let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Firday", "Saturday"];

        for (let x = day.length - 1; x >= 0; x--) { // x=7; 7>=0; x--
            console.log(day[x]);
        }
    }
    catch {
        console.log("Some error occur");
    }
    finally {
        console.log("Finally block execute");
    }
}


// for loop                                    do..while
// Code execute when condition is true     Code execute one time then check condition
// Use when condition is true only         Use when first condition should be execute.

// do..while :

// Syntax:
// do{
//     // Code block;
// }
// while(condition)

//////////////////////////////////////////////////

// While :
//     Synatx :
//         while(condition)
//         {
//             // Code block
//         }

// Example :

function createlabel(x, calculatedValue) {
    var label = document.createElement('label');

    label.innerText = calculatedValue + '\n';

    label.id = "lbl" + x;

    document.body.appendChild(label);
}

function doWhileloop() {
    // createlabel();
    var x = 0;
    do {
        var mul = 5 * x;
        // console.log("5 * " + x + " = " + mul);
        var calculatedValue = "5 * " + x + " = " + mul;
        createlabel(x, calculatedValue);

        x++;
    }
    while (x <= 10)

    // While loop
    x = 0;
    while (x <= 5) {
        var mul = 5 * x;
        console.log("5 * " + x + " = " + mul);

        x++;
    }

    // for loop
    // x = 0;
    // for (x = 0; x <= 5; x++) {
    //     console.log("For loop : " + x);
    // }
}

// foreach
// for in
// for of

// Array :
//Key // Value
//  0 : 'abc',
//  1 : 'cde',
//  2 : 'efg',
//  3 : 'ghi'

// for in:
// Syntax :
//     for(variable in array)
//     {
//         //Code block;
//     }

// for in :

function forin() {
    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Firday", "Saturday"];

    let obj = { firstname: 'XYZ', lastname: 'abc' };

    for (let x in day) {
        console.log(x);
        console.log(day[x]);
    }

    for (let y in obj) {
        console.log(y);
        console.log(obj[y]);
    }
}

// for of :
// Syntax :
//     for(variable of array)
//     {
//         // Code
//     }

function createlabelof(calculatedValue) {
    var label = document.createElement('label'); //<label></label>

    label.innerText = calculatedValue + '\n'; // <label>abc</label>

    // label.id = "lbl" + x;

    document.body.appendChild(label);
}

function forof() {
    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Firday", "Saturday"];

    for (let x of day) {
        console.log(x);
    }

    let str = 'WelTechT';

    for (let y of str) {
        createlabelof(y);
        console.log(y);
    }
}

function multi(varsha,Alisha) {
    console.log();
}

function abc() //Default function
{
    let str = 'Vadodara';
    let str2 = 'Vadodara';

    multi(str,str2); //multi('Vadodara');
}

function cde() //Default function
{
    let str1 = 'Mumbai';

    multi(str1); //multi('Mumbai');
}