import { User } from "../../models/index.js";
import CustomErrorHandler from "../../services/CustomErrorHandler.js";

const userController ={
    async me(req, res, next){
        //logic here
        try {
            const user = await User.findOne({_id: req.user._id}).select('-password -createdAt -updatedAt  -__v');
            if(!user){
                return next(CustomErrorHandler.notFound());
            }
            res.json(user);
        } catch (err) {
            return next(err);
        }
    }
}

export default userController;