//require inquirer for prompt questions
const inquirer = require('inquirer');
// fs is a Node standard library package for reading and writing files
const fs = require('fs');

const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

const team = [];

//create askManager fn to create an array of questions for user input (Manager)
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
            team.push(newMng);
            askRole();
        })
}

//create askRole fn to 
const askRole = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                message: "Which type of team member would you like to add? (use arrow key)",
                choices: ["Engineer", "Intern", "I don't want to add anymore team member."],
                name: 'role',
            }
        ])
        .then(answers => {
            if (answers.role === 'Engineer') {
                askEngineer();
            } else if
                (answers.role === 'Intern') {
                askIntern();
            } else {
                buildTeam();
            }
        })

}

//create askEngineer fn to create an array of questions for user input (Engineer)
const askEngineer = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: "What is your engineer's name?",
                name: 'name',
            },
            {
                type: 'input',
                message: "What is your engineer's id?",
                name: 'id',
            },
            {
                type: 'input',
                message: "What is your engineer's email?",
                name: 'email',
            },
            {
                type: 'input',
                message: "What is your engineer's GitHub username?",
                name: 'github',
            },
        ])
        .then(answers => {
            const newEng = new Engineer(answers.name, answers.id, answers.email, answers.github);
            team.push(newEng);
            askRole();
        })
}

//create askIntern fn to create an array of questions for user input (Engineer)
const askIntern = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: "What is your intern's name?",
                name: 'name',
            },
            {
                type: 'input',
                message: "What is your intern's id?",
                name: 'id',
            },
            {
                type: 'input',
                message: "What is your intern's email?",
                name: 'email',
            },
            {
                type: 'input',
                message: "What is your intern's school?",
                name: 'school',
            },
        ])
        .then(answers => {
            const newInt = new Intern(answers.name, answers.id, answers.email, answers.school);
            team.push(newInt);
            askRole();
        })
}




//fn buildteam to write file to display

// start prompt function
askManager();




