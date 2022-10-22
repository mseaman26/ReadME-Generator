# Readme-Generator

## Description

    This is a command-line program written using JavaScript and Node.JS. It generates a professional-level ReadME file once the user responds to all of the questions asked by the program.  The newly generated ReadMe is written into the same directory as index.js, which is the file that the user runs to begin the program

## Video Demo of the Project is at the following link:
https://watch.screencastify.com/v/5neVixWza4twA7f4af6A

## Technologies used
- JavaScript
- Node.JS
- Inquirer npm

## Notable features
- Interactive command line program that accepts input from the user
- Automatic formatting of the readme
- Inquirer prompts, utilizing both the 'input' type and the 'list' type

## Notable Methods

- Used the 'require' method to access inquirer functionality
- Initiated inquirer prompts, followed by a .then method to begin file-writing functionality
- Used template literal string format to fill in the content of the README and include the input from the user by adding in function calls and retrieving data from the response object from inquirer
- Used a switch statement to select the license badge in accordance with the user's selection

## Code Snippets

Here are some of the prompts that get displayed in the command line by inquirer
```javascript
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of your project"
    },
    {

      type: "list",
      name: "license",
      message: "What license would you like to use for this project?",
      choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause \"Simplified\" License", `BSD 3-Clause "New" or "Revised" License`, `Boost Software License 1.0`, `Creative Commons Zero v1.0 Universal`, `Eclipse Public License 1.0`, `GNU Affero General Public License v3.0`, `GNU General Public License v2.0`, `GNU Lesser General Public License v3.0`, `Mozilla Public License 2.0`, `The Unlicense` ]

    },
```

Here is a portion of the template literal that equates to the README content:
```javascript
  function generateReadme(data){

    return `# ${data.title}
  ## Description

    ${data.description}\n
  ${generateLicenseBadge(data)}

  ## Table of Contents

  * [Installation](#installation)<br />
  * [Usage](#usage)<br />
  * [Contributing to This Repository](#how-to-contribute-to-this-repository)<br />
  * [Tests](#to-run-tests-run-the-following-command)<br />
  * [Questions](#questions)<br />

  ## Installation

    To install the necessary dependancies, run the following command:

      ${data.installation}
```

## Learning points from this project
- An understanding of Node.JS and writing a program for the command line interface
- How to use template literals to conveniently concatenate data into a string
- Usage of npm commands and creating package.jason files
- An understanding of modularization of code

## -By Michael Seaman
