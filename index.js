const inquirer = require ('inquirer');
const fs = require('fs');
const util = require ('util');
const Employee = require("./Library/employee");
const Engineer = require("./Library/engineer");
const Intern = require("./Library/intern");
const Manager = require("./Library/manager");
const questions = require("./utils/questions");
const generateHtml = require("./utils/generateHtml.js");
const { schoolName } = require('./utils/questions');
const employeeList = [];

//Function to initiate the collection of employee data

const init = async () => {
    const empType = await inquirer.prompt(questions.employeeType);
    collect(empType)
}

//Collect Employee Data Function

// Manager
const collect = async (empType) => {
    console.log(empType)
    const employeeQuestions = await inquirer.prompt (questions.employeeQs);
    if (empType.employee === "Manager") {
        const officeNumber = await inquirer.prompt(questions.officeNumber);
        const managerEmp = new Manager (employeeQuestions.name, employeeQuestions.id, employeeQuestions.email, officeNumber.office);
        employeeList.push(managerEmp);
    }// Engineer
    else if (empType.employee === "Engineer") {
        const git = await inquirer.prompt (questions.gitHubUserName);
        const engineerEmp = new Engineer (employeeQuestions.name, employeeQuestions.id, employeeQuestions.email, git.github);
        employeeList.push(engineerEmp);
    }
    else {
        const school = await inquirer.prompt(questions.schoolName);
        const internEmp = new Intern (employeeQuestions.name, employeeQuestions.id, employeeQuestions.email, school.school);
        employeeList.push(internEmp);
    }
    createMoreEmployees()
}

const createMoreEmployees = async () => {
    const goForward = await inquirer.prompt (questions.addMore);
    if (goForward.add) {
        init ()
    } else {
        console.log("employee list  ",employeeList);
        fs.writeFileSync("index.html", generateHtml(employeeList), "utf-8")
    }

}

init ();