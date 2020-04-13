const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// will hold all of the employee type objects that were created
const employees = []
// Asks manager questions about themselves before diving into the rest of the questions

createManager()


// async function allows us to use await to get the response of what the manager wants to do next, before diving into the if, then statements
async function managerPrompt() {
    try {
        var selection = await nextStep();
        if (selection.add === "Add an employee") {
            createEngineer()

        }
        else if (selection.add === "Add an intern") {
            createIntern();
           
        }
        // when the person selects that they are done, we will write to file
        else if (selection.add === "Nothing. I'm done") {
            fs.writeFile(outputPath,render(employees),function(err){
                if(err){
                  console.log("failed")
                  return
                }
                else{
                  console.log("Success!!")
                }
            })
              
        }
    }

    catch (err){
        console.log(err)
    }
}

// create engineer function that asks multiple questions that are used to create an Engineer object
function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is this employee's name?"
    
        },
        {
            type: "input",
            name: "id",
            message: "What is this employee's work ID?"
    
        },
        {
            type: "input",
            name: "email",
            message: "What is this employee's work email?"
    
        },
    
        {
            type: "input",
            name: "github",
            message: "What is this employee's GitHub name?"
    
        },
    
    ])
        .then(function (res) {
            employees.push(new Engineer(res.name, res.id, res.email, res.github))
            managerPrompt()
        });

};

// create engineer function that asks multiple questions that are used to create a Manager object
function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
    
        },
        {
            type: "input",
            name: "id",
            message: "What is your work id?"
    
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
    
        },
        {
            type: "input",
            name: "office",
            message: "What is your office number?"
    
        },
    
    ])
        .then(function (res) {
            employees.push(new Manager(res.name, res.id, res.email, res.office))
            managerPrompt()
        });
};

// create engineer function that asks multiple questions that are used to create an intern object
function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is this intern's name?"
    
        },
        {
            type: "input",
            name: "id",
            message: "What is this intern's work ID?"
    
        },
        {
            type: "input",
            name: "email",
            message: "What is this intern's email?"
    
        },
    
        {
            type: "input",
            name: "school",
            message: "What school does this intern go to?"
    
        },
    
    ])
        .then(function (res){
            employees.push(new Intern(res.name, res.id, res.email, res.school));
        managerPrompt()
        });

};

// primpts user for what they want to do next and returns the variable name and response as an object
function nextStep() {
    return inquirer.prompt(
        {
            type: "list",
            name: "add",
            message: "What would you like to do?",
            choices: ["Add an employee", "Add an intern", "Nothing. I'm done"]

        })
}



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
