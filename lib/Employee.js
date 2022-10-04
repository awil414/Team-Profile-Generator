// Employee constructor
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

// Function to return name from input
    getName() {
    return this.name;
    }

// Function to return ID from input
    getId() {
    return this.id;
    }

    getEmail() {
    return this.email;
    }

    getRole() {
    return 'Employee';
    }
};

// to be exported
module.exports = Employee;