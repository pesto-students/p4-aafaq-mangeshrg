var employee = {
    firstName: 'John',
    lastName: 'Doe',
}

var employee2 = {
    firstName: 'Carl',
    lastName: 'Smith',
}

var employee3 = {
    firstName: 'Eric',
    lastName: 'Kogi',
}

let getEmpDetails = function(dept, location) {
    return this.firstName + ' ' + this.lastName + ' works in ' + dept + ' department at ' + location;
}

 empDetails = getEmpDetails.bind(employee, 'Research', 'Mumbai');

 console.log(empDetails());
 console.log(getEmpDetails.call(employee2, "Finance", "Kampala"));
 console.log(getEmpDetails.apply(employee3, ["Technology", "Nairobi"]));
 