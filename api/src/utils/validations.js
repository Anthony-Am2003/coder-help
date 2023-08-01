const {User} = require("../db");


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


module.exports = {
    validateEmail,
    validateName
}