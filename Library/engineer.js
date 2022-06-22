const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const employee = require("./lib/employee");

class Engineer extends employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHubUserName;
    }

    getgitHub() {
        return this.getgitHub;
    };

    getRole() {
        return "Engineer";
    };

}

module.exports = Engineer;