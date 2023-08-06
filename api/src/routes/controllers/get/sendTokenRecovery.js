const {User} = require("../../../db");
const {getUserByEmail} = require("../../../utils/validations");

module.exports = async(email) => {
const user = await getUserByEmail(email);
if(user){
    
} 
}