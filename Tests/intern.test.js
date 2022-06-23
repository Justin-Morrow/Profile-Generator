const Intern = require("../Library/intern");

test("Can set school via constructor", () => {
    const testVal = "Seattle U";
    const employee = new Intern ("Bob", 1, "doe@doe.com", testVal);
    expect(employee.school).toBe(testVal);
});

test("getRole() should align to \"Intern\"", () => {
    const testVal = "Intern";
    const employee = new Intern ("Bob", 1, "doe@doe.com", testVal);
    expect(employee.getRole()).toBe(testVal);
});

test("Set School should align to getSchool()", () => {
    const testVal = "Seattle U";
    const employee = new Intern ("Bob", 1, "doe@doe.com", testVal);
    expect(employee.getSchool()).toBe(testVal);
});