export function createPayload(payload) {
    const data = {
        nombre: payload.name,
        email: payload.email
    }
    return data
}