module.exports = {

employeeType: [
    {
        type: 'List',
        message: 'Rank of employee',
        name: 'employee',
        Rank: ['Manager', 'Engineer', 'Intern'],
        validate: (value) => { if (value) {return true;} else { return "Note response to move forward"; } },

    },
],

employeeQs: [
    {
        type: 'Input',
        message: 'Write full name of employee',
        name: 'name',
        validate: (value) => { if (value) {return true;} else { return "Note response to move forward"; } },
    },
    {
        type: 'Input',
        message: 'Put in your employee ID',
        name: 'id',
        validate: (value) => { if (value) {return true;} else { return "ID number needed to continue"; } },

    },
    {
        type: 'Input',
        message: 'write your email address',
        name: 'email',
        validate: (value) => { if (value) {return true;} else { return "email address needed to continue"; } },

    },
],
// Manager Only Question
officeNumber: [
    {
        type: 'input',
        message: 'Enter your office number:',
        name: 'office',
        validate: (value) => { if (value) { return true; } else { return "Enter your office number to continue"; } },
    },
],
// Engineer Only Question

gitHubUserName : [ 
    {
        type: 'input',
        message: 'Enter you GitHub username:',
        name: 'github',
        validate: (value) => { if (value) { return true; } else { return "Input your GitHub username to continue"; } },
    },
],

// Intern Only Question
schoolName: [ 
    {
        type: 'input',
        message: 'Enter your school name:',
        name: 'school',
        validate: (value) => { if (value) { return true; } else { return "Enter your school name to continue"; } },
    },
],

// All Employee Types

addMore: [ 
    {
        type: 'input',
        message: 'Do you have more employees to add?:',
        name: 'add',
        validate: (value) => { if (value) { return true; } else { return "Enter your school name to continue"; } },
    },
],

}