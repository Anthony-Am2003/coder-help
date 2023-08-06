const sendToken = require("../../controllers/get/sendTokenRecovery");

module.exports = async(req, res) => {
    try {
        const {email} = req.query;
        const sendTokenStatus = await sendToken(email);
        res.status(200).json(sendToken);
    } catch (error) {
        res.status(404).send(error.message);
    }
}