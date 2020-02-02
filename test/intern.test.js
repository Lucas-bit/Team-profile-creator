const Intern = require("../lib/Intern")

describe("Creates intern info", () => {
    const Joe = new Intern("Joe", 24, "joe@yahoo.com", "OU") 

    test("test intern generator", () => {
        expect(Joe.getRole()).toEqual
        ["\"\"Intern\"\""]
        
    })
})