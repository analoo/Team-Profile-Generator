// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name,id,email,github) {
        const title = "Engineer";

        super(name, id, email, title);
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;


    }
}


var marc = new Engineer("Ana",1,"email","analoo")
console.log(marc)