// TODO: Include packages needed for this application
const fs = require ("fs")
const inquirer = require ("inquirer")

// TODO: Create an array of questions for user input
inquirer.prompt(
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your application?",
    },
    {
        type: "input",
        name: "description",
        message: "Please give a description of your application.",
    },
    {
        type: "input",
        name: "installation",
        message: "Please give installation instructions for your application."
    },
    {
        type: "input",
        name: "usage info",
        message: "Please describe usage of the application."
    },
    {
        type: "input",
        name: "license",
        message: "Explain which license the application is covered under.",
    },
    {
        type: "input",
        name: "contributing",
        message: "Please enter contribution guidelines.",
    },
    {
        type: "input",
        name: "testing",
        message: "Please enter test instrctions.",
    },
    {
        type: "input",
        name: "github username",
        message: "Please enter your GitHub username.",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address.",
    },
    
];
)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
