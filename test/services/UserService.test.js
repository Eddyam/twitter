const UserService = require("../../app/services/UserService")

describe("Tests for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "Eddyam", "Edder")
        expect(user.username).toBe("Eddyam")
        expect(user.name).toBe("Edder")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
})