function groupEmpByDep(employees) {
    
    let departmentGroups = {};

   
    for (let i = 0; i < employees.length; i++) {
        let employee = employees[i];
        let department = employee.department;
        let name = employee.name;

      
        if (departmentGroups[department]) {
           
            departmentGroups[department].push(name);
        } else {
          
            departmentGroups[department] = [name];
        }
    }

   
    let result = {};

    
    for (let dept in departmentGroups) {
        if (departmentGroups[dept].length > 1) {
            result[dept] = departmentGroups[dept];
        }
    }

    return result;
}

// Example usage:
let employees = [
    { name: "Alice", department: "Engineering" },
    { name: "Bob", department: "HR" },
    { name: "Charlie", department: "Engineering" },
    { name: "Dave", department: "HR" },
    { name: "Eve", department: "Marketing" }
];

console.log(groupEmpByDep(employees));
// Output: { Engineering: [ 'Alice', 'Charlie' ], HR: [ 'Bob', 'Dave' ] }