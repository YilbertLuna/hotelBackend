import userModel from "../db/models/user.model.js";
import { comparePassword, validateData } from "../middleware/validateErrorHanlder.middleware.js";

export async function loginUserService({ email, password }) {
    const findUser = await userModel.findOne({ email }).select('+password');
    validateData(findUser)

    comparePassword(password, findUser.password);
    
    const userWithoutPassword = findUser.toObject();
    return userWithoutPassword;
}