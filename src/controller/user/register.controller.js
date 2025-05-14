import { PersonIsExist } from "../../middleware/errorHandler.middleware.js"
import { registerUserServices } from "../../services/register.services.js"
export const registerController = async (req, res) => {
    try {
        const {user, email, password} = req.body
        const token = await registerUserServices({user, email, password})
        res.cookie('token', token)
        return res.status(200).json('usuario logueado')
    } catch (error) {
        if(error instanceof PersonIsExist){
            res.status(400).json({message: error.message})
        } else {
            return res.status(500).json({message: `error interno del servidor ${error.message}`})
        }
    }
}