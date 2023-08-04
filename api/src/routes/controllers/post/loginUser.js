//Dependencies
const bcrypt = require("bcrypt")

//Requires
const {User} = require("../../../db");

//Functions to validate data
const {getUserByEmail} = require("../../../utils/validations");

module.exports = async(email, password) => {
    if(!email || !password) throw new Error("information is missing");
    const user = getUserByEmail(email);
    if(user){
        const passwordCorrect = bcrypt.compare(password, user.password);
        if(!passwordCorrect) throw new Error("Invalid email or password");
    };


}