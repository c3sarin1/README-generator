const inquirer = require('inquirer');
const fs = require('fs');
const readMe = require('./utils')

const question = [
    {
        name: 'name',
        type: 'input',
        message: 'What would you like to title your project?',
    },
    {
        name: 'description',
        type: 'input',
        message: 'Give a description of your project?',
    },
    {
        name: 'install',
        type: 'input',
        message: 'What would you like to install to run this project?',
    },
    {
        name: 'usage',
        type: 'input',
        message: 'What are your usage instructions?',
    },
    {
        name: 'contributors',
        type: 'input',
        message: 'Who are your contributors?',
    },
    {
        name: 'testing',
        type: 'input',
        message: 'Please enter tests here:',
    },
    {
        name: 'license',
        type: 'list',
        message: 'Select the license you would like to use for this project.',
        choices: ['MIT', 'GNU', 'APACHE2.0'],
    },
    {
        name: 'user',
        type: 'input',
        message: 'Enter your github username',
    },
    {
        name: 'email',
        type: 'input',
        message: 'Enter your email address',
    },
],

init = function() {
    inquirer
    .prompt(question)
    .then((answer) =>{
        fs.writeFile('./README-play/README.md', readMe(answer), (err)=>
        err ? console.log(err) : console.log('Complete!'))
    })
}

init();