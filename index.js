// TODO: Include packages needed for this application
const fs = require ("fs")
const inquirer = require ("inquirer")
//let template;

// TODO: Create an array of questions for user input
function userPrompt() {
    return inquirer.prompt(
        [
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
                name: "usage",
                message: "Please describe usage of the application."
            },
            {
                type: "list",
                name: "license",
                message: "Choose which license the application is covered under.",
                choices: ["MIT", "ISC", "Apache", "DNU"]
            },
            {
                type: "input",
                name: "contribution",
                message: "Please enter contribution guidelines.",
            },
            {
                type: "input",
                name: "testing",
                message: "Please enter test instrctions.",
            },
            {
                type: "input",
                name: "github",
                message: "Please enter your GitHub username.",
            },
            {
                type: "input",
                name: "email",
                message: "Please enter your email address.",
            },
        ]).then(({
            title,
            description,
            installation,
            usage,
            license,
            contribution,
            testing,
            github,
            email
        })=>{
        writeToFile("generatedREADME.md",
        generateTemplate(title,
            description,
            installation,
            usage,
            license,
            contribution,
            testing,
            github,
            email)
        )
        
        }
        );
}


// TODO: Create a function to write README file
function writeToFile(fileName, template) {
    
    //template = userPrompt()
    fs.writeFileSync(`./${fileName}`,template)
}
function generateTemplate(title,
    description,
    installation,
    usage,
    license,
    contribution,
    testing,
    github,
    email) {
    return template = `# ${title}
![badge](https://img.shields.io/badge/License-${license}-red)
Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Testing](#testing)
# Description
${description}
## Installation
${installation}
## Usage
${usage}
## License
${license}
## Contribution
${contribution}
## Testing
${testing}

# Questions
* GitHub :${github}
* Email :${email}`;
}
// TODO: Create a function to initialize app
function init() {
    //writeToFile("generatedREADME.md", template)
    userPrompt()
}

// Function call to initialize app
init();
