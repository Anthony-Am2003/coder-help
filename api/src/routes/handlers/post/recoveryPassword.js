const recoveryPassword = require("../../controllers/post/recoveryPassword");

module.exports = async (req, res) => {
    try {
        const {email, code} = req.body;
        const recoveryPassword = await recoveryPassword(email, code);
        res.status(200).json(recoveryPassword);
    } catch (error) {
        res.status(404).send(error.message);
    }
}