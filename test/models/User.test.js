const User = require("../../app/models/User")

describe("Unit Tests for User Class", () => {
    test('Create an User object', () => {
        const user = new User(1, "Eddyam", "Edder", "Bio", "dateCreated", "lastUpdated")

        expect(user.id).toBe(1)
        expect(user.username).toBe("Eddyam")
        expect(user.name).toBe("Edder")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdated).toBe("lastUpdated")

    })
})
