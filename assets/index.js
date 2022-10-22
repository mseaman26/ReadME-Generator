//importing file saving functionality as well as inquirer functionality
const fs = require('fs');
const inquirer = require('inquirer');

//these are the questions the user will be asked by inquirer
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
    {
      type: "input",
      name: "installation",
      message: "What command should be run to install dependancies?"
    },
    {
      type: "input",
      name: "usage",
      message: "How should one use this repository?"
    },
    {
      type: "input",
      name: "contributing",
      message: "How can one contribute to this repository?"
    },
    {
      type: "input",
      name: "tests",
      message: "What command should be executed to run tests?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?"
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?"
    }

  ])
  //file gets written by calling te generateReadme function
  .then((data) => {
    console.log(data)
    fs.writeFile("GENERATED_README.MD",generateReadme(data), (err) =>{
      err ? console.log(err): console.log("readme generated!")
    }) 
  });
 

  //this function contains the template literal that will fill the content of the readme
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

  ## Usage

    ${data.usage}
    
  ## How to Contribute to This Repository:

    ${data.contributing}
    
  ## To run tests, run the following command:

    ${data.tests}
    
  ## Questions
  If you have any questions about this project, feel free to reach out to me at:
  <a href=\"${data.email}\">${data.email}</a>.  
  To see more of my work, please visit:
  <a href=\"https://github.com/${data.github}\">My Github Page</a>`

  }

  //this is a helper function for selecting the license badge with a switch statement
function generateLicenseBadge (data) {

    switch(data.license){
      case "Apache License 2.0":
        return`[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      case "GNU General Public License v3.0":
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      case "MIT License":
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      case `BSD 2-Clause "Simplified" License`:
        return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
      case `BSD 3-Clause "New" or "Revised" License`:
        return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
      case `Boost Software License 1.0`:
        return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
      case `Creative Commons Zero v1.0 Universal`:
        return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`
      case `Eclipse Public License 1.0`:
        return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
      case `GNU Affero General Public License v3.0`:
        return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
      case `GNU General Public License v2.0`:
        return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
      case `GNU Lesser General Public License v3.0`:
        return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
      case `Mozilla Public License 2.0`:
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
      case `The Unlicense`:
        return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    }

    //The Unlicense
  }