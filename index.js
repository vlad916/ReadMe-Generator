const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require ("util");


inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title",
    },
    {
      type: "input",
      name: "description",
      message: "Please write a brief description of your project",
    },
    {
      type: "input",
      name: "installation",
      message: "What command should be run to install the project",
      default: "npm install",
    },
    {
      type: "input",
      name: "usage",
      message: "What does the user need to know about using the project",
    },
    {
      type: "list",
      name: "license",
      choices: ["LGPLv3", "MPL 1.1", "Affero GPLv3", "Apache 2.0"],
    },
    {
      type: "input",
      name: "contributing",
      message: "Please enter the name of the contributor",
    },
    {
      type: "input",
      name: "test",
      default: "npm test",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your GitHub email",
    },
    {
      type: "input",
      name: "user",
      message: "Please enter your GitHub username",
    },
  ])
  .then(function (data) {
    fs.writeFile("goodreadme.md", generateMdFile(data), function (err) {
      if (err) return console.log(err);
      console.log("File Created Successfully");
    });
  })
  .catch(function (err) {
    console.log("Something went wrong in creating the file");
  });

function generateMdFile(data) {
  return `
             
# Project Title 

  ## ${data.title}
   ____
## Description 
    
  ${data.description}

## Table of Contents

  1. [Project Title](https://github.com/vlad916/${data.title}/blob/master/goodreadme.md)
  2. Description
  3. Installation
  4. [Usage](https://github.com/vlad916/GoodReadmeGenerator/blob/${data.usage}/goodreadme.md)
  5. License
  6. [Contributor](https://github.com/vlad916/GoodReadmeGenerator/${data.installation}/master/goodreadme.md)
  7. [Test](https://github.com/${data.test}/GoodReadmeGenerator/blob/master/goodreadme.md)
  8. Email
  9. GitHub Username

## Installation 
  
  ${data.installation} 

## Usage
  
  ${data.usage}

## License
    
  ${data.license}

## GitHub Profile 

  # [![github](https://img.shields.io/badge/Github-Profile-profile.svg)](https://github.com/vlad916) 

## Contributor

  ${data.contributing}

## Tests
  
  ${data.test}

## Email

  ${data.email}

## GitHub Username

  ${data.user}

`;
}



