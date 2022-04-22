const User = require("../../app/models/User")

describe("Unit Tests for User Class", () => {
    test('Create an User object', () => {
        const user = new User(1, "Eddyam", "Edder", "Bio")

        expect(user.id).toBe(1)
        expect(user.username).toBe("Eddyam")
        expect(user.name).toBe("Edder")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })

    test('Add getters', () => {
        const user = new User(1, "Eddyam", "Edder", "Bio")
        expect(user.getUsername).toBe("Eddyam")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })

    test('Add setters', () => {
        const user = new User(1, "Eddyam", "Edder", "Bio")
        user.setUsername = "Yamir"
        expect(user.username).toBe("Yamir")

        user.setBio = "New bio"
        expect(user.bio).toBe("New bio")
    })
})
