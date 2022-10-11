// Intern constructor extends employee constructor
const Employee = require ('./Employee.js')
class Intern extends Employee {
    constructor (name, id, email, school) {
    // calling employee constructor
    super (name, id, email);
    this.school = school;
    }

    // return school from input
    getSchool() {
        return this.school;
    }

    // override to return Intern
    getRole() {
        return 'Intern';
    }
};

// to be exported
module.exports = Intern;