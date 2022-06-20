const inquirer = require ('inquirer');
const fs = require('fs');
const util = require ('util');
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const questions = require("./utils/questions");
const html = require("./utils/generateHtml");
const employeeList = [];

//Function to initiate the collection of employee data

const initiate = async () => {
    const empType = await inquirer.prompt(questions.employeeType);
    collect(empType)
}

//Collect Employee Data Function

// Manager
const empType = async (empType) => {
    console.log(empType)
    const employeeQuestions = await inquirer.prompt (questions.employeeQs);
    if (empType.employee === "Manager") {
        const officeNumber = await inquirer.prompt(questions.officeNumber);
        const managerEmp = new Manager (employeeQs.name, employeeQs.id, employeeQs.email, officeNumber.office);
        employeeList.push(managerEmp);
    }// Engineer
    else if (empType.employee === "Engineer") {
        const git = await inquirer.prompt (questions.gitHubUserName);
        const engineerEmp = new Engineer (employeeQs.name, employeeQs.id, employeeQs.email, gitHubUserName.github);
        employeeList.push(engineerEmp);
    }
    else {
        const school = await inquirer.prompt(questions.schoolName);
        const InternEmp = new Intern (employeeQs.name, employeeQs.id, employeeQs.email, schoolName.school);
        employeeList.push(internEmp);
    }
    createAddMore()
}

const createAddMore = async () => {
    const goForward = await inquirer.prompt (questions.addMore);
    if (goForward.goForward) {
        init ()
    } else {
        fs.writeFileSync("index.html", generateHtml(employeeList), "utf-8")
    }

}

init ();