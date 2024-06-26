// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

//placeholder array populated via user inputy
let employeesArray = [];

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let addAnotherEmployee = true;
  while (addAnotherEmployee) {
  let firstName = window.prompt("Enter employee's first name"); if (!firstName){
    return;
  }
  let lastName = window.prompt("Enter employee's last name"); if (!lastName) {
    return;
  }
  let salary = window.prompt("Enter salary"); if (!salary) {
    return;
  }
  //Employee variables are inputed above
  let employee = {
    firstName: firstName,
    lastName: lastName,
    salary: salary
}
employeesArray.push(employee);

  addAnotherEmployee = window.confirm("Do you want to add another employee?");
}
//returns data to the array placeholder
  return employeesArray;
}


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  const example = employeesArray.reduce((acc, emp) => acc + emp.salary, 0);
  const example2 = example / employeesArray.length;
  console.log(`average salary is: ${example2}`);

  //const averageSalary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
    
  // Check if there are employees in the array
    if (employeesArray.length === 0) {
        console.log("No employees available.");
        return;
    }

    // Generate a random index within the range of the array length
    const randomIndex = Math.floor(Math.random() * employeesArray.length);

    // Get the random employee at the generated index
    const randomEmployee = employeesArray[randomIndex];

    // Output the details of the random employee
  randomSelection = console.log('Random Employee:', randomEmployee.firstName, randomEmployee.lastName);
}
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
