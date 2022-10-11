// Engineer constructor extends employee constructor
const Employee = require ('./Employee.js')

class Engineer extends Employee {
    constructor (name, id, email, github) {
    // calling employee constructor
    super (name, id, email);
    this.github = github;
}

    // return github from input
    getGithub() {
        return this.github;
    }

    // override to return 'Engineer'
    getRole() {
        return 'Engineer';
    }
};

// to be exported
module.exports = Engineer;
