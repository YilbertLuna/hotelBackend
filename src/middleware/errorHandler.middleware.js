export class IncorretUserPasswordError extends Error {
    constructor() {
        super("contraseña incorrecta")
        this.name = "compareUserPasswordError"
    }
}

export class UndefinedData extends Error {
    constructor() {
        super("usuario no existente")
        this.name = "UndefinedData"
    }
}

export class PersonIsExist extends Error {
    constructor() {
        super("este usuario ya se encuentra registrado")
        this.name = "PersonIsExist"
    }
}