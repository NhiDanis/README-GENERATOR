const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');


// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide your project descripton',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide badge link for you project',
        name: 'badge',
    },
    {
        type: 'input',
        message: 'What step should be run to install your app?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Please write instructions for using your app',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Please choose your project license',
        name: 'license',
        choices: ["GNU License", "Academic License", "Apache License", "MIT License", "N/A"]
    },
    {
        type: 'input',
        message: 'What is your Github usename?',
        name: 'usename',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What command should be run to test your app?',
        name: 'test',
    },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
