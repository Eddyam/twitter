const User = require("../../app/models/User")
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

    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "Eddyam", "Edder")
        const user2 = UserService.create(2, "Macar", "Maria")
        const user3 = UserService.create(3, "AlexJur", "Alejandro")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("Eddyam")
        expect(usernames).toContain("MaCar")
        expect(usernames).toContain("AlexJur")



    })
})