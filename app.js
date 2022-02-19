const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const {writeFile,copyFile} = require('./index.js');
const promptUser = () => {
return inquirer.prompt([
    {
    type: 'input',
    name: 'Project name',
    message: 'What is the title of your project? (Required)',
    validate: nameInput => {
        if (nameInput) {
        return true;
        } else {
        console.log('Please enter your name!');
        return false;
        }
    }
}])
};