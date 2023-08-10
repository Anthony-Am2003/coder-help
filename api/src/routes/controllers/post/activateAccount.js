const {getUserByEmail} = require("../../../utils/validations")

module.exports = async (email, code) => {
    const user = await getUserByEmail(email);
    if(user){
        if(user.code === code){
            user.isActive = true;
            try {
                await user.save();
                return {detail:"User activation sucesfull"};
            } catch (error) {
                throw new Error("Error saving user: " + error.message)
            }
        }
    } else {
        throw new Error("invalid Code");
    }
    throw new Error("this User not exist");
}