const Manager = require("../lib/Manager")

    describe("Manager Info", () => {
        const Consti = new Manager("Consti", 18, "consti@thegreat.com", 24);

        test("Manager Role", () => {
            expect(Consti.getRole()).toEqual(
                "Manager"
            )
        })

        test("Manager Office Number", () => {
            expect(Consti.getOfficeNumber()).toEqual(
                24
            )
        })
    })