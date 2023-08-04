const createUser = require("../../controllers/post/createUser");

module.exports = async(req, res) => {
    try {
        const {firstName, lastName, email, password,} = req.body;
        const createNewUser = await createUser(firstName, lastName, email, password); 
        res.status(200).json("new user created successfully");
    } catch (error) {
        res.status(404).send(error.message);
    }

}