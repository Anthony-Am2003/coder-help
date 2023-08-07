const {User} = require("../../../db");
const {getUserByEmail} = require("../../../utils/validations")

module.exports = async (email, code) => {
    const user = await getUserByEmail(email);
    if(user){
        if(user.code === code){
            user.isActive = true;
            return {detail:"User activation sucesfull"}
        }
    } else {
        throw new Error("invalid Code");
    }
    throw new Error("this User not exist");
}