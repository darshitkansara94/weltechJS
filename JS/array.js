//Array :
// Array can be declared in square brackets '[]'.
// Array is collection of data / values.
// We can store multiple values in single variable.
// And array contain mixed values like string or int in single array.

//Array Syntax:
//let a = ['value1','value2','value3'...];    

//Array support :
// 1. push()
//     Insert a new value into existing array.
//     syntax :
//         array.push();
//     Ex:
//         let a = ['a','b','c'];
// 2. pop()
//     Delete value from existing array.
//     syntax:
//         array.pop();
// 3. sort()
//     Sort the value in ascending order
//     syntax:
//         array.sort();
// 4. reverse()
// 5. splice()
// 6. removeat()
// 7. remove()



function array1() {
    let arr = ['a', 'b', 6, 'c', 'd'];

    for (let x = 0; x <= arr.length; x++) {
        console.log(arr[x]); // x = 0 => arr[0] = 'a'
        // x =1 => arr[1] = 'b'
        //  x =2 => arr[2] = 6
        //  x =3 => arr[3] = 'c'
        // x =4 => arr[4] = 'd'
    }
}

function createlabelof(calculatedValue) {
    var label = document.createElement('label'); //<label></label>

    label.innerText = calculatedValue + '\n'; // <label>abc</label>

    // label.id = "lbl" + x;

    document.body.appendChild(label);
}

function array1() {
    let arr = ['a', 'b', 6, 'c', 'd'];

    for (let x of arr) {
        createlabelof(x);

        //console.log(); // x = 0 => arr[0] = 'a'
        // x =1 => arr[1] = 'b'
        //  x =2 => arr[2] = 6
        //  x =3 => arr[3] = 'c'
        // x =4 => arr[4] = 'd'
    }
}


// push:
// Insert a new value into the array.
// Value insert at the last element of the array.

//Synatx:
// array.push('value');
// array.push('value1','value2');

// pop:
// Remove single value from array
// It remove last inserted element. At a time delete only single element.

// Synatx:
// array.pop();

let arrayPushAndPop = ['value1', 'value2', 'value3'];

function arrayPush() {
    // let array1 = ['value1', 'value2', 'value3'];

    arrayPushAndPop.push('value4');

    arrayPushAndPop.push('value5', 'value6');

    for (let x of arrayPushAndPop) {
        createlabelof(x);
    }
}

function arrayPop() {
    arrayPushAndPop.pop();
    arrayPushAndPop.pop();

    for (let y of arrayPushAndPop) {
        createlabelof(y);
    }
}

// sort :
// Display array in asc order.
// Return output in array only.

// Syntax :
// array.sort();

// reverse :
// Display array in reverse order.

//Synatax :
// array.reverse();

let fruits = ['Mrngo', 'Apple', 'Kiwi', '06', 'Sapota', 'Mngo', '15', 'Pineapple'];

// Apple , Kiwi, Mango, Pineapple, Sapota
function sortArray() {
    fruits.sort();

    createlabelof("Sorted order of Fruits");

    for (let x of fruits) {
        createlabelof(x);
    }
}

function reverseArray() {
    fruits.reverse();

    createlabelof("Reverse order of Fruits");

    for (let y of fruits) {
        createlabelof(y);
    }
}

function descendingArray() {
    fruits.sort().reverse();

    createlabelof("Descending order of Fruits");

    for (let y of fruits) {
        createlabelof(y);
    }
}