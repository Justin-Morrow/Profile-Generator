const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const employee = require("./employee");

class Engineer extends employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email)
        this.gitHub = gitHub
    }

    getGitHub() {
        return this.gitHub;
    };

    getRole() {
        return "Engineer";
    };

}

module.exports = Engineer;