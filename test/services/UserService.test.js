const UserService = require("../../app/services/UserService")

describe("Tests for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "Eddyam", "Edder")
        expect(user.username).toBe("Eddyam")
        expect(user.name).toBe("Edder")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

    test("2. Get all user data in a list", () => {
        const user = UserService.create(1, "Eddyam", "Edder")
        const userInfoList = UserService.getInfo(user)
        expect(userInfoList[0]).toBe(1)
        expect(userInfoList[1]).toBe("Eddyam")
        expect(userInfoList[2]).toBe("Edder")
        expect(userInfoList[3]).toBe("Sin bio")
    })

    test("3. Update username", () => {
        const user = UserService.create(1, "Eddyam", "Edder")
        UserService.updateUserUsername(user, "EddyamJP")
        expect(user.username).toBe("EddyamJP")
    })
})