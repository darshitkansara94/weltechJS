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


try {
    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Firday", "Saturday"];

    let dayArray = day[9];
}
catch (errorMessage) {
    alert(errorMessage);
}