// And (&&) :
// All the conditions should be true.
// We can declare n number of conditions.



// if(a && b){
//     alert("All conditions are true");
// }
// else {
//     alert("Some conditions are false");
// }

// or (||):
    // We can declare or condition with the the pipe '||'.
    // One of the condition must be true.

const c = "abc";
const a = c;
const b = "cde";

if ((a == c && b == b) || (a == b && b == a)) { //(true) && (false)
    // alert("All conditions are true");
    console.log("All conditions are true");
}
else if (a == c && b == c) { // (true && false) Not execute
    // alert("else if conditions are executed");
    console.log("else if conditions are executed");
}
else {
    console.log("Some conditions are false");
    //alert("Some conditions are false");
}