// Error Handling:
// Handling a code break / Error on runtime.

// try :
// Code to execute.
// catch :
// Handle the error from try block.
// finally :
// Always ecxecute code no matter is errored out or not.
// throw :
// Display custom error messge to user.

// Synatx:
// try {
//     // Code to be executed
// }
// catch {
//     //Error to be display / Error coming from try block. 
// }
// finally {
//     // Process to be done if code is errored or not.
// }

console.log("Error Handling JS");

// All the logic of your code will be add in try block.
// If any error occur in try block then pointer move to the catch part and display error message if we declare a variable.
try {
    const abc = "test";

    if(abc == ""){
        // It throw error and debug move to the catch block and display message if given.
        // We can use throw in all the three block.
        throw new Error("abc can not be blank");
    }
    // function
    function erroredfunction(){}
    erroredfunction();
}
// catch block execute when any error found in try block /  section.
catch (ten) { // ten = Variable name
    alert(ten);
}
// Finally block is execute in all the case if code is error out or not.
finally{
    alert("Execute in all situation");
}