const Engineer = require("./lib/engineer");

test("Can set GitHub by constructor arguments", () => {
    const testVal = "GitHubUser";
    const employee = new Engineer ("Bob", 1, "doe@doe.com", testVal);
    expect(employee.gitHub).toBe(testVal);
});

test("getRole() should return \"Engineer\"", () => {
    const testVal = "Engineer";
    const employee = new Engineer ("Bob", 1, "doe@doe.com", testVal);
    expect(employee.getRole()).toBe(testVal);
});

test("Can return GitHub user name via getgitHub()", () => {
    const testVal = "GitHubUser";
    const employee = new Engineer ("Bob", "doe@doe.com", testVal);
    expect (employee.getgitHub()).toBe(testVal);
});
