import {
    UndefinedData,
    IncorretUserPasswordError,
    PersonIsExist
} from "./errorHandler.middleware.js";


//implementada
export function validateData (data) {
    if(!data) {
        throw new UndefinedData()
    }
}

export function comparePassword(inputPassword, storedPassword) {
    if (inputPassword !== storedPassword) {
        throw new IncorretUserPasswordError()
    }
}

export function validatePersonIsExist (person) {
    if(person) {
        throw new PersonIsExist()
    }
}
