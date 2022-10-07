const Employee = require('../lib/Employee');

describe('creates new Employee',() => {

    describe('the Employee',() => {
        it('returns an employee object when called with the "new" keyword ',() => {
            const employee = new Employee('Clark Griswold', 777, 'cwg@vaction.com');
            expect(employee.name).toBe(expect.any(String));
            expect(employee.id).toBe(expect.any(Number));
            expect(employee.email).toBe(expect.any(String));
        })  
    })
})

describe('checks all methods for Employee class',() => {
    
    describe('all employee methods', () => {
        it('returns all employee methods objects when called with the "new" keyword ',() => {
            const employee = new Employee('Clark Griswold', 777, 'cwg@vaction.com');
            expect(employee.getName()).toBe(employee.name);
            expect(employee.getId()).toBe(employee.id);
            expect(employee.getEmail()).toBe(employee.email);
            expect(employee.getRole()).toBe('Employee')
        })
    })
})