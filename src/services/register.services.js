import userModel from "../db/models/user.model.js";
import { createPayload } from "../libs/createPayload.js";
import { AccessToken } from "../libs/jwt.js";
import { validatePersonIsExist } from "../middleware/validateErrorHanlder.middleware.js";

export async function registerUserServices({user, email, password}) {
    const existingUser = await userModel.findOne({ email: email});
    validatePersonIsExist(existingUser)
    
    // Crear nuevo usuario
    const newUser = new userModel({
        name: user,
        email: email,
        password: password
    });
    
    await newUser.save();
    
    const payload = createPayload(newUser)
    const token = new AccessToken().created(payload)
    return token
}