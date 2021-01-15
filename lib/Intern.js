// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
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
        message: "What school do you attend?",
        name: "school"
}
)
.getName()
.getId()
.getEmail()
.getSchool()
.getRole() //overridden to return intern