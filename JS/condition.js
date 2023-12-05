// If else condition
// Condition compare
// Value compare

// Where to use :
// Compare single value

const a = "10";
const b = 10;

// "==" : Compare only value.
// "===" : Compare value with datatype.
// if (a === b) {
//     alert("If part ecxecuted");
// }
// else {
//     alert("Else part ecxecuted");
// }

// if (a === b) {
//     alert("If part ecxecuted");
// }
// else if (a == b) {
//     alert("else If part ecxecuted");
// }
// else {
//     alert("else part ecxecuted");
// }


// Not equal to    

// const ab = 5;
// const ba = 6;

// if ((ab + ba) != 12) {  //11 not equal to 12
//     alert("If part is executed");
// }
// else if ((ab + ba) == 11) {
//     alert("Else if part is executed");
// }
// else {
//     alert("Else part is excuted");
// }

// Greater than /  Greater than and equal to.

// Greater than :
    // Compare with the right part of the condition.
    // If Left part of the condition is greater than 
        //right part of the condition then condition is true.
// Less than equal to:
    // Compare with the left part of the condition.
    // If Left part of the condition is condition is greater than or equal to the 
        //right part of the condition then condition is true.
const ab = 5;
const ba = 6;

if ((ab + ba) > 12) { // 11 > 12 = false
    alert("If part is executed");
}
else if ((ab + ba) >= 11) { // 11 >= 12 =false 
    alert("Else if part is executed");
}
else {
    alert("Else part is excuted");
}

// Less than / Less than equal to.
// Less than :
    // Compare with the right part of the condition.
    // If Left part of the condition is less than 
        //right part of the condition then condition is true.
// Less than equal to:
    // Compare with the right part of the condition.
    // If Left part of the condition is less than or equal to the 
        //right part of the condition then condition is true.    


const ab1 = 6;
const ba1 = 6;

if ((ab + ba) < 12) { // 12 < 12 = false
    alert("If part is executed");
}
else if ((ab + ba) <= 11) { // 12 <= 12 = true 
    alert("Else if part is executed");
}
else {
    alert("Else part is excuted");
}


