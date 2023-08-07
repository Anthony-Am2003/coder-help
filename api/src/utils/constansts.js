const ROLE_DEFAULT = "user";
const SALT_ROUNDS = 10;
const generateCode = ()=>{
    const decimalNumber = Math.random();
    const enterNumber = decimalNumber*100000;
    const code = String(enterNumber).padStart(6, '0');
    return code;
}

module.exports = {
    ROLE_DEFAULT,
    SALT_ROUNDS,
    generateCode
}