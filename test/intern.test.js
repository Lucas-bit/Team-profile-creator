const Intern = require("../lib/Intern")
var expect = require('expect')


describe("Creates intern info", () => {
    const Joe = new Intern("Joe", 24, "joe@yahoo.com", "OU") 

    test("test get role function", () => {
        expect(Joe.getRole()).toEqual(
       "Intern"
        )
    })

    test("get school function", () => {
        expect(Joe.getSchool()).toEqual(
            "OU"
        )
        
    })
})
