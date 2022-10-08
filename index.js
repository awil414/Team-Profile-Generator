// Node packages needed for this program
const fs = require('fs');
const inquirer = require('inquirer');
// Link to generated HTML page
const generateHTML = require('./src/generateHTML.js');
//const jest = require('jest');

// Team profiles
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
// Stores team member objects
const teamArr = [];

// Array of questions for manager
const init = () => addManager();

addManager = () => 
    inquirer.prompt ([
        {
            type: 'input',
            message: "Please enter team manager's name.",
            name: 'name'
        },
        {
            type: 'input',
            message: "Please enter the manager's ID.",
            name: 'id'
        },
        {
            type: 'input',
            message: "Please enter the manager's email.",
            name: 'email'
        },
        {
            type: 'input',
            message: "Please enter manager's office number.",
            name: 'officeNumber'
        },
    ]) 
    .then(manager => {
        manager = new Manager(manager.name, id, email, officeNumber)
        teamArr.push(manager); 
        console.log(manager);
        addEmployee();
    });


addEmployee = () => 
    console.log('Add team employee.');
    inquirer.prompt([
        {
            type: 'list',
            message: 'What type of team member would you like to add?',
            name: 'role',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            message: "Please enter the employee's name.",
            name: 'name'
        },
        {
            type: 'input',
            message: "Please enter the employee's ID.",
            name: 'id'
        },
        {   type: 'input',
            message: "Please enter the employee's email.",
            name: 'email'
        },
        {
            type: 'input',
            message: "Please enter the employee's github username.",
            name: 'github',
            when: (input) => input.role === 'Engineer'
        },
        {
            type: 'input',
            message: "Please enter the intern's school.",
            name: 'school',
            when: (input) => input.role === 'Intern'
        },
        {
            type: 'confirm',
            message: "Would you like to add more team members?",
            name: 'addMore',
            default: false
        }
    ])
    .then(employee => {
        let employee;
        if (role === 'Engineer') {
            employee = new Engineer(employee.name, id, email, github);
            console.log(employee);
        } else if (role === 'Intern') {
            employee = new Intern(employee.name, id, email, school);
            console.log(employee);
        }
        teamArr.push(employee); 
        if (addMore) {
            return addEmployee(teamArr);
        }
        teamArr;
    });

    

// addEmployee = () => {
    inquirer.prompt ([{
        type: 'list',
        message: 'What type of team member would you like to add?',
        name: 'employeeType',
        choices: [
            {name: 'Engineer', value: 'addEngineer'},
            {name: 'Intern', value: 'addIntern'},
            {name: 'DONE', value: 'done'}
        ]   
    }])
    .then

    
// Function to generate HTML 
const writeToFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Success! Your team profile has been generated in index.html')
    });
}

// Function call to initialize app
init()
    .then(addEmployee)
    .then(teamArr => {
        console.log('Generating Team Profile...');
        writeToFile('./dist/index.html', generateHTML(teamArr));
    });
    
