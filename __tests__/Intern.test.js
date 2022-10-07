const Intern = require('../lib/Intern');

describe('creates new Intern',() => {

    describe('checks all methods for Intern class',() => {
    
        describe('all intern methods', () => {
            it('returns all engineer methods objects when called with the "new" keyword ',() => {
                const intern = new Employee('Clark Griswold', 777, 'cwg@vaction.com', 'BSU');
                expect(intern.getName()).toBe(intern.name);
                expect(intern.getId()).toBe(intern.id);
                expect(intern.getEmail()).toBe(intern.email);
                expect(intern.getRole()).toBe('Intern');
                expect(intern.getSchool()).toBe(intern.school);
            })
        })
    })
});