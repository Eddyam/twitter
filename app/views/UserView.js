const UserService = require("../services/UserService") //Importa clase UserService

class UserView {
    static createUser(payload) {
        if(payload === null) { //Revisa si payload tiene valor null
            console.log("Es null")
            return {error: "El payload no existe."} //Devuelve error indicado que el payload no existe
        }
    }
}

module.exports = UserView