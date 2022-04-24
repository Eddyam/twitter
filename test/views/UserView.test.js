const User = require("../../app/models/User")
const UserView = require("../../app/views/UserView")

describe("Test for UserView", () => {
    test("Return an error object when try to create a new user with an null payload", () => {
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    })

    test("Return an error object when try to create a new user with a payload with invalid properties", () => {
        const payload = {username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor valido/)
    })

    test("Return an error object when try to create a new user with a payload with missing properties", () => {
        const payload = {username: "Username"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor valido/)
    })

    test("Create a user by a given valid payload", () => {
        const payload = {username: "Eddyam", id: 1, name: "Edder"}
        const result = UserView.createUser(payload)
        expect(result.name).toBe("Edder")
        expect(result.username).toBe("Eddyam")
        expect(result.id).toBe(1)
    })
})