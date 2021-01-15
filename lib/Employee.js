// TODO: Write code to define and export the Employee class
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const { restoreDefaultPrompts } = require("inquirer");

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
})
.getName()
.getId()
.getEmail()
.getRole() //returns employee