const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const employee =("../lib/employee);

class Engineer {
    constructor(name, id, email, gitHub) {
        this.name = name
        this.id = id
        this.email = email
    }
    
    getName() {
        return this.name;
    };
    
    getID() {
        return this.id;
    };
    
    getEmail() {
        return this.email;
    };
    getGitHub() {
        return this.gitHub;
    }
}

module.exports = Engineer;