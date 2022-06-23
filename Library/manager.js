const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const employee = require("./employee");

class Manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    };

    getRole() {
        return "Manager";
    };

}

module.exports = Manager;