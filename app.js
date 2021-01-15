const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

inquirer
.prompt([{
    type: "input",
        message: "What is your Name?",
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
    type: "list",
    message: "What is your title?",
    name: "role",
    choices: ["Manager", "Engineer", "Intern"]

},
{
    type: "list",
    message: "Which team member would you like to add?",
    name: "team",
    choices: ["Engineer", "Intern", "I don't want any more team members"]
}]
.then(data => {
    fs.writeFile(`team.html`, generateMarkdown(data), err => err ? console.error(err) : console.log('Success!'));
    if (data.role === "Manager") {
        inquirer.prompt([{
                type: "input",
                message: "What is your office number?",
                name: "office"
            },]).then(managerData => { 
                const manager = new Manager(`${this.name}`, `${this.id}`, `${this.email}`, `${this.officeNumber}`);
        })
    }
    if (data.role === "Intern") {
        inquirer.prompt([{
                type: "input",
                message: "What do you attend?",
                name: "school"
            },]).then(internData => { 
                const intern = new Intern(`${this.name}`, `${this.id}`, `${this.email}`, `${this.school}`);
        })
    }
    if (data.role === "Engineer") {
        inquirer.prompt([{
                type: "input",
                message: "What is your GitHub username?",
                name: "github"
            },]).then(engineerData => { 
                const engineer = new Engineer(`${this.name}`, `${this.id}`, `${this.email}`, `${this.github}`);
        })
    }
    if (data.restart === "Yes") {
        application();
    } else (data.restart === "No") {}
}).catch(err => {
    console.log(err);
}));


// below the values are hardcoded
// in actuality, they should come from inquirer
// const manager = new Manager("Lisa", 9, "lisa@gmail.com", "A123");
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
