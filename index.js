// Write your solution in this file!

let employee = {name: "Jeffrey", streetAddress: "123 Wonderhouse Blvd"}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { [key]: value})
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
   employee[key] = value
   return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newObj = Object.assign({}, employee)
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}