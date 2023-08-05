//Dependencies
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Requires
const {User} = require("../../../db");

//Functions to validate data
const {getUserByEmail} = require("../../../utils/validations");

module.exports = async(email, password) => {

    if(!email || !password) throw new Error("information is missing");

    const user = await getUserByEmail(email.toLowerCase());
    if(user){
        const passwordCorrect = await bcrypt.compare(password, user.password);
        if(!passwordCorrect) throw new Error("Invalid email or password");
    

    const userInfoForToken = {
        userId : user.id,
        userName:user.firstName,
        role: user.role,
    };

    const accesToken = jwt.sign(userInfoForToken, process.env.SECRET_KEY, {
        expiresIn: 60 * 60 * 24 * 7
    });
    return {
        userData:{
            userId : user.id,
            userName : user.firstName,
            accesToken,
        },
        message:"logged in user"
    };
} else {
    throw new Error("Invalid userName or password");
};
};