const Manager = require('../lib/Manager');

describe('creates new manager',() => {

    describe('checks all methods for manager class',() => {
    
        describe('all manager methods', () => {
            it('returns all engineer methods objects when called with the "new" keyword ',() => {
                const manager = new Manager('Clark Griswold', 777, 'cwg@vaction.com', '201');
                expect(manager.getName()).toBe(manager.name);
                expect(manager.getId()).toBe(manager.id);
                expect(manager.getEmail()).toBe(manager.email);
                expect(manager.getRole()).toBe('Manager');
                expect(manager.getSchool()).toBe(manager.officeNumber);
            })
        })
    })
});