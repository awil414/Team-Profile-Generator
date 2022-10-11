// Node packages needed for this program
const fs = require('fs');
const inquirer = require('inquirer');
// Link to generated HTML page
const generateHTML = require('./src/generateHTML.js');


// Team profiles

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
// Stores team member objects
const teamArr = [];

// Array of questions for manager
const init = () => addManager();

const addManager = () => {
 return inquirer.prompt ([
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
        manager = new Manager(manager.name, manager.id, manager.email, manager.officeNumber)
        teamArr.push(manager); 
        console.log(manager);
    });
}


const addEmployee = () => {
    console.log('Add team employee.');
    return inquirer.prompt([
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
    .then(answers => {
        let employee;
        if (answers.role === 'Engineer') {
            employee = new Engineer(answers.name, answers.id, answers.email, answers.github);
            console.log(employee);
        } else if (answers.role === 'Intern') {
            employee = new Intern(answers.name, answers.id, answers.email, answers.school);
            console.log(employee);
        }
        teamArr.push(employee); 
        if (answers.addMore) {
            return addEmployee(teamArr);
        } else {
            return teamArr;
        }
        
    });
}

    

// addEmployee = () => {
    // inquirer.prompt ([{
    //     type: 'list',
    //     message: 'What type of team member would you like to add?',
    //     name: 'employeeType',
    //     choices: [
    //         {name: 'Engineer', value: 'addEngineer'},
    //         {name: 'Intern', value: 'addIntern'},
    //         {name: 'DONE', value: 'done'}
    //     ]   
    // }])
    // .then

    
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
    .then(() => {
        console.log('Generating Team Profile...');
        writeToFile(generateHTML(teamArr));
    });
    
