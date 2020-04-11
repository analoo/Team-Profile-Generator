// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name,id,email,office) {

        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.office =office;
        this.role = "Manager";



    }
}

var marc = new Manager("Ana",1,"email",100)
console.log(marc)

module.exports = Manager;
