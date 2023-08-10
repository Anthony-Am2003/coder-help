const activateAccount = require("../../controllers/post/activateAccount");

module.exports = async(req, res) => {
    try {
        const {email, code} = req.body;
        console.log(email);
        const activateOperation = await activateAccount(email, code);
        res.status(200).json(activateOperation);
        } catch (error) {
        res.status(404).send(error.message);
    }
};