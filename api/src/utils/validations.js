const {User} = require("../db");
const {SALT_ROUNDS} = require("../utils/constansts")

const bcrypt = require("bcrypt");


const validateEmail = async (email) => {
    const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    const isEmailValid = patron.test(email);
    if (!isEmailValid) {
      return false;
    }
    const user = await User.findOne({ where: { email } });
    if (user) {
      return false;
    }
  
    return true;
  };
 
const validateName = (name) => {
    if(name.length === 0){throw new Error("name cannot be empty")}
    const nameWithoutSpaces = name.trim();
    const firstLetter = nameWithoutSpaces.charAt(0).toUpperCase();
    const restWord = nameWithoutSpaces.slice(1);
    return `${firstLetter}${restWord}`;
}

const hashPassword = async(password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    return hashedPassword;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
}


module.exports = {
    validateEmail,
    validateName,
    hashPassword
}