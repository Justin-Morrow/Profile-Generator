const Manager = require("../Library/manager");
const Employee = require("../Library/employee");

test("Can set the office number with construct arguement", () => {
    const testVal = 95;
    const employee = new Manager("Bob", 1, "doe@doe.com", testVal);
    expect(employee.officeNumber).toBe(testVal);
});

test('getRole() should return "Manager"', () => {
    const testVal = "Manager";
    const employee = new Manager("Bob", 1, "doe@doe.com", 95);
    expect(employee.getRole()).toBe(testVal);
});

test("Can get office number via getOffice()", () => {
    const testVal = 95;
    const employee = new Manager("Bob", 1, "doe@doe.com", testVal);
    expect(employee.getOfficeNumber()).toBe(testVal);
});