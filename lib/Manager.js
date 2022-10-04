// Intern constructor extends employee constructor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
    // calling employee constructor
    super (name, id, email);
    this.officeNumber = officeNumber;
    }

    // override to return Manager
    getRole() {
        return 'Manager';
    }
};