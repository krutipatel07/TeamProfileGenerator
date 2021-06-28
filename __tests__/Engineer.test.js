const Engineer = require('../lib/Engineer');
const { expectToBe, expectStr, expectNum } = require('../utils/expect');

const engineer = new Engineer('John', 'Doe', 1, 'jamescodes');

test('creates an engineer object', () => {
    expectToBe(engineer.firstName, 'John');
    expectToBe(engineer.lastName, 'Doe');
    expectNum(engineer.id);
    expectStr(engineer.email, '@');
    expectToBe(engineer.role, 'Engineer');
    expectToBe(engineer.icon, 'fas fa-glasses');
});

test('gets engineer\'s name', () => {
    expectStr(engineer.getName(), `${engineer.firstName} ${engineer.lastName}`);
});

test('gets engineer\'s ID', () => {
    expectStr(engineer.getId(), `${engineer.id}`);
});

test('gets engineer\'s email', () => {
    expectStr(engineer.getEmail(), engineer.email);
});

test('gets engineer\'s role', () => {
    expectStr(engineer.getRole(), engineer.role);
});

test('gets engineer\'s github', () => {
    expectStr(engineer.getGithub(), engineer.github);
});

test('gets engineer\'s icon', () => {
    expectStr(engineer.getIcon(), engineer.icon);
});