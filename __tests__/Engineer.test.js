const Engineer = require('../lib/Engineer');

describe('creates new Engineer',() => {

    describe('checks all methods for Engineer class',() => {
    
        describe('all engineer methods', () => {
            it('returns all engineer methods objects when called with the "new" keyword ',() => {
                const engineer = new Employee('Clark Griswold', 777, 'cwg@vaction.com', 'clark-griswold');
                expect(engineer.getName()).toBe(engineer.name);
                expect(engineer.getId()).toBe(engineer.id);
                expect(engineer.getEmail()).toBe(engineer.email);
                expect(engineer.getRole()).toBe('Engineer');
                expect(engineer.getGithub()).toBe(engineer.github);
            })
        })
    })
});