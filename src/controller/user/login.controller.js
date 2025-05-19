import { loginAdminService, loginUserService } from "../../services/login.services.js"
import { IncorretUserPasswordError, UndefinedData } from "../../middleware/errorHandler.middleware.js"
export const loginController = async (req, res) => {
    try {
        res.set("Content-Type", "application/json")
        const {email, password} = req.body

        if(email === 'admin@gmail.com') {
            const token = await loginAdminService({email, password})
            res.cookie('token', token)
            return res.status(200).json(token)
        }
        const token = await loginUserService({email, password})
        res.cookie('token', token)
        return res.status(200).json(token)
    } catch (error) {
        if (error instanceof IncorretUserPasswordError) {
            res.status(400).json({message: error.message})
        } if(error instanceof UndefinedData) {
            res.status(400).json({message: error.message})
        } else {
            return res.status(500).json({message: `error interno del servidor ${error.message}`})
        }
    }
}