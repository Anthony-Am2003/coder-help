const validateLogin = require("../../controllers/post/loginUser")


module.exports = async(req, res)=>{
    try {
        const {email, password} = req.body;
        const accesToken = await validateLogin(email, password)
        res.status(200).json(accesToken)
    } catch (error) {
        res.status(404).send(error.message)
    }
}