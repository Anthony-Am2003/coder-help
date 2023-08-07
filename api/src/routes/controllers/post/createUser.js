//Requires
const {User} = require("../../../db");

//Functions to validate data
const {validateEmail, validateName, hashPassword, getUserByEmail, generateCode} = require("../../../utils/validations")

//Constants
const {ROLE_DEFAULT} = require("../../../utils/constansts")

module.exports = async(firstName, lastName, email, password) => {
    if(!firstName || !lastName || !email || !password) throw new Error("information is missing");

    //Verify that the email has the correct format
    const validationEmail =  await validateEmail(email);
    if(validationEmail === false) throw new Error("This email is not valid");

    //Verify that the user does not exist
    const user = await getUserByEmail(email);
    if(user !== null) throw new Error("This user already exist");

    //Data validation and password hashing
    const role = ROLE_DEFAULT;
    const firstNameValidate = validateName(firstName);
    const LastNameValidate = validateName(lastName);
    password = await hashPassword(password);
    email = email.toLowerCase();
    const code = generateCode();

    //Creation of the new user
    const newUser = await User.create({
        firstName:firstNameValidate,
        lastName:LastNameValidate,
        email:email,
        password: password,
        role: role,
        code: code
        
    });
    return newUser;

}