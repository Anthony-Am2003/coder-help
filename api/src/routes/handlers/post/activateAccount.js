const activateAccount = require("../../conrollers/post/activateAccount");

module.exports = async(req, res) => {
    try {
        const {email, code} = req.query;
        const activateOperation = await activateAccount(email, code);
        res.status(200).json(activateOperation);
        } catch (error) {
        res.status(404).send(error.message);
    }
}