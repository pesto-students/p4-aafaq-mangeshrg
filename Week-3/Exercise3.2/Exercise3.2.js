var employee = {
    firstName: 'John',
    lastName: 'Doe',
    getEmpDetails : function(dept, location) {
        return this.firstName + ' ' + this.lastName + ' works in ' + dept + ' department at ' + location;
    }
 }

 empDetails = employee.getEmpDetails.bind(employee, 'Research', 'Mumbai');

 console.log(empDetails());