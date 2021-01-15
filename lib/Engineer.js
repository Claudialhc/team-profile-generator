// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
;const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

inquirer
.prompt({
    type: "input",
        message: "What is your name?",
        name: "name"
},
{
    type: "input",
        message: "What is your ID?",
        name: "id"
},
{
    type: "input",
        message: "What is your Email?",
        name: "email"
},
{
    type: "input",
        message: "What is your GitHub Username?",
        name: "github"
}
)
.getName()
.getId()
.getEmail()
.getGithub()
.getRole() //overridden to return 'engineer'
