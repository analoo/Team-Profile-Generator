// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name,id,email,github) {
        const role = "Engineer";

        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.role = "Engineer";


    }
}

module.exports = Engineer;


var marc = new Engineer("Ana",1,"email","analoo")
console.log(marc)