const {User} = require("../../../db");
const {conn} = require("../../../db");
const {validateEmail, validateName} = require("../../../utils/validations")
const {ROLE_DEFAULT} = require("../../../utils/constansts")

module.exports = async(firstName, LastName, email, password) => {
    if(!firstName || !LastName || !email || !password){throw new Error("information is missing")};
    if(validateEmail(email) === false){throw new Error("email Invalid")};
    const role = ROLE_DEFAULT;
    const firstNameValidate = validateName(firstName);
    const LastNameValidate = validateName(LastName);
    console.log(LastNameValidate);

    const newUser = await User.create({
        LastName:LastNameValidate,
        firstName:firstNameValidate,
        email:email,
        password: password,
        role: role,
        
    });
    return newUser;

}