import userModel from "../db/models/user.model.js";
import { Admin } from "../db/conection/conection.db.js";
import { comparePassword, validateData } from "../middleware/validateErrorHanlder.middleware.js";
import { createPayload } from "../libs/createPayload.js";
import { AccessToken } from "../libs/jwt.js";

export async function loginUserService({ email, password }) {
    const findUser = await userModel.findOne({ email }).select('+password');
    validateData(findUser)

    comparePassword(password, findUser.password);
    
    const payload = createPayload(findUser)
    const token = new AccessToken().created(payload)
    return token
}

export async function loginAdminService({email, password}) {
     const findAdmin = await Admin.findOne({ email }).select('+password');
    validateData(findAdmin)

    comparePassword(password, findAdmin.password);
    
    const payload = createPayload(findAdmin)
    const token = new AccessToken().created(payload)
    return token
}