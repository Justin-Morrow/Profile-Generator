const Employee = require("../Library/employee");

test("create an employee object", () => {
    const employee = new Employee
    expect(typeof(employee)).toBe("object");
});

test("Can set name by constructor", () => {
    const name = "Bob";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("Can set id by constructor", () => {
    const testVal = 95;
    const employee = new Employee("Bob", testVal);
    expect(employee.id).toBe(testVal);
});

test("Can set email by constructor", () => {
    const testVal = "doe@doe.com";
    const employee = new Employee("Bob", 1, testVal);
    expect(employee.email).toBe(testVal);
});

test("Can get name via getName()", () => {
    const testVal = "Bob";
    const employee = new Employee(testVal);
    expect(employee.getName()).toBe(testVal);
});

test("Can get id via getId()", () => {
    const testVal = 95;
    const employee = new Employee("Bob", testVal);
    expect(employee.getId()).toBe(testVal);
});

test("Can get email via getEmail()", () => {
    const testVal = "doe@doe.com";
    const employee = new Employee("Bob", 1, testVal);
    expect(employee.getEmail()).toBe(testVal);
});

test("getRole() should return \"Employee\"", () => {
    const testVal = "Employee";
    const employee = new Employee("Bob", 1, "doe@doe.com");
    expect(employee.getRole()).toBe(testVal);
});

