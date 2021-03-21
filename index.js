// Write your solution in this file!
const employee = {
    name: "",
    streetAddress: ""
}
//return employee;
function updateEmployeeWithKeyAndValue(obj, key, value){
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.streetAddress = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}