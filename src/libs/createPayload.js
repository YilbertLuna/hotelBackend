export function createPayload(payload) {
    const data = {
        nombre: payload.user,
        email: payload.email
    }
    return data
}