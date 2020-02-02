const Employee = require("../lib/Employee")


describe("Get Employee Info", () => {
    const James = new Employee ("James", 3, "hi@there.com")

    test("Employee Name Test", () => {
        expect(James.getName()).toEqual(
            "James"
        )
    })

    test("Employee ID test", () => {
        expect(James.getId()).toEqual(
            3
        )
    })

    test("Employee Email", () => {
        expect(James.getEmail()).toEqual(
            "hi@there.com"
        )
    })
})
