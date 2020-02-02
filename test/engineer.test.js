const Engineer = require("../lib/Engineer")

describe("Engineer info", () => {
    const Alec = new Engineer("Alec", 12, "dont@me.com", "IssaGitHub")

    test("Engineer Role", () =>{
        expect(Alec.getRole()).toEqual(
            "Engineer"
        )
    })

    test("Engineer Github", () => {
        expect(Alec.getGithub()).toEqual(
            "IssaGitHub"
        )
    })
})