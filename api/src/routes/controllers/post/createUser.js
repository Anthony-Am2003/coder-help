const {User} = require("../../../db");
const {conn} = require("../../../db");
const {validateEmail, validateName} = require("../../../utils/validations")
const {ROLE_DEFAULT} = require("../../../utils/constansts")

module.exports = async(firstName, lastName, email, password) => {
    if(!firstName || !lastName || !email || !password){throw new Error("information is missing")};
    const validationEmail =  await validateEmail(email)
    console.log(validationEmail);
    if(validationEmail === false){
        throw new Error("This user already exists or the email is not valid");
    };
    const role = ROLE_DEFAULT;
    const firstNameValidate = validateName(firstName);
    const LastNameValidate = validateName(lastName);
    console.log(LastNameValidate);

    const newUser = await User.create({
        firstName:firstNameValidate,
        lastName:LastNameValidate,
        email:email,
        password: password,
        role: role,
        
    });
    return newUser;

}