// Switch case
// Use :
//     Check condition.

// Syntax:
// switch(condition){
//     case 1:
//         // block code
//         break;
//     case 2:
//         // block code
//         break;
//     default:
//         break;    
// }

let datetoday = new Date().getDay();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();

console.log(datetoday);
console.log(month);
console.log(year);

datetoday = 7;

switch (datetoday) {
    case 0: // sunday
        alert("Today is sunday");
        break;
    case 1: // monday
        alert("Today is monday");
        break;
    case 2: // tuesday
        alert("Today is Tue");
        break;
    case 3: // wednesday
        alert("Today is Wed");
        break;
    case 4: // thursday
        alert("Today is Thu");
        break;
    case 5: // friday
        alert("Today is Friday");
        break;
    case 6: // Saturday
        alert("Today is Saturday");
        break;
    default:
        alert("Not match");
        break;
}


// new Date()

//Syntax :
// switch(condition)
// {
//     case 1:
//         // code block
//         break;
//     case 2:
//         // code block
//         break;
//     default:
//         //code block
//         break;
// }

// default : It will execute in every condition if cases are matched.

// Array
// Two types of array:
//     1. Single dimension
//     2. Multi dimension array

// declare in []
//[]
//[][]
//Array index always start with 0. 

let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Firday", "Saturday"];
// 0        //1     //2         //3     //4         //5         //6
console.log(day);
let todaysday = new Date().getDay(); //4
let todaydatearray = day[todaysday]; // day[4]
// Thursday
console.log(todaydatearray);

switch (todaydatearray) {
    case "Sunday":
        alert("Today is Sunday");
        break;
    case "Monday":
        alert("Today is Monday");
        break;
    case "Tuesday":
        alert("Today is Tuesday");
        break;
    case "Wednesday":
        alert("Today is Wednesday");
        break;
    case "Thursday":
        alert("Today is Thursday");
        break;
    case "Firday":
        alert("Today is Firday");
        break;
    case "Saturday":
        alert("Today is Saturday");
        break;
    default:
        alert("No day match");
        break;
}