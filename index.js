const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

const employee = [];

//create an array of questions for user input (Manager)
const askManager = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the team manager's name?",
                name: 'name',
            },
            {
                type: 'input',
                message: "What is the team manager's id?",
                name: 'id',
            },
            {
                type: 'input',
                message: "What is the team manager's email?",
                name: 'email',
            },
            {
                type: 'input',
                message: "What is the team manager's office number?",
                name: 'number',
            },
        ])
        .then(answers => {
            const newMng = new Manager(answers.name, answers.id, answers.email, answers.number);
            employee.push(newMng);
            newRole();
        })
}

//create newRole fn, same as askManager but diff questions
const newRole = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                message: "What is your role?",
                choices: ['Engineer', 'Intern', 'Finish and exit'],
                name: 'role',
            }
        ])
        .then(answers => {
            if (answers.role === 'Engineer') {
                newEngineer();
            } else if
                (answers.role === 'Intern') {
                newIntern();
            } else {
                fs.writeFileSync('./dist.team.html', render(employee), 'UTF');
            }
        })

}

//create an array of questions for user input (Engineer)
const newEngineer = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your gitHub username?',
                name: 'github',
            },
            {
                type: 'input',
                message: 'What is your gitHub username?',
                name: 'github',
            },

        ])
        .then(answers => {
            const newEng = new Engineer(answers.github);
            employee.push(newEng);
            newRole();
        })
}

//create an array of questions for user input (Intern)



// start prompt function
askManager();




