const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(firstName, lastName, id, github) {
        super(firstName, lastName, id);
        
        this.github = github;
        this.role = 'Engineer';
        this.icon = 'fas fa-glasses';
    };

    getGithub() {
        return `<span class="has-text-weight-bold">GitHub:</span> <a href="https://github.com/${
            this.github}" target="_blank" class="has-text-primary">${this.github}</a>`
    };
};

module.exports = Engineer;