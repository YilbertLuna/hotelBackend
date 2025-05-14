import { loginUserService } from "../../services/login.services.js"
import { IncorretUserPasswordError, PersonIsExist, UndefinedData } from "../../middleware/errorHandler.middleware.js"

export const loginController = async (req, res) => {
    try {
        const {email, password} = req.body
        const data = await loginUserService({email, password})
        // res.cookie('token', token)
        return res.status(200).json(data)
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