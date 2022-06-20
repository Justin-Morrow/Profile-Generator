const Employee = require("../employee");

test("create an employee object", () => {
    const employee = new Employee
    expect(typeof(e)).toBe("object");
});

test("Can set name by constructor arguments", () => {
    const name = "Alice";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("Can set id by constructor argument", () => {
    const testVal = 95;
    const employee = new Employee("Bob", testVal);
    expect(employee.id).toBe(testVal);
});

test("Can set email by constructor argument", () => {
    const testValue = "doe@doe.com";
    const employee = new Employee("Bob", 1, testValue);
    expect(employee.email).toBe(testVal);
});

test("Can get name via getName()", () => {
    const testValue = "Alice";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    const testValue = 95;
    const employee = new Employee("Bob", testValue);
    expect(employee.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "doe@doe.com";
    const employee = new Employee("Bob", 1, testValue);
    expect(employee.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const employee = new Employee("Alice", 1, "test@test.com");
    expect(employee.getRole()).toBe(testValue);
});