// Object :
//     object is collection of named value.
//     Object can be declare using "new" keyword.
//     Object has it's own properties.    


//Syntax:
// For single collection:
//const object1 = {};

// For multiple collection:
//const object1 = [{},{},...,{}];    


// Example:
const Employee = {
    Name: 'Darshit Kansara',
    Age: '29',
    Address: 'Vadodara',
    EmployeeID: '1234',
    MobileNo: '79896645656',
    Position: 'Developer',
    Education: 'B.Tech',
    Salary: '5425545'
}

console.log('Name : ' + Employee.Name + 'Age : ' + Employee.Age + 'Address : ' + Employee.Address);

for (let emp in Employee) {
    console.log(emp + ' = ' + Employee[emp]);
}