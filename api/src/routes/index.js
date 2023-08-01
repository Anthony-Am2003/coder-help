//POST ROUTES

const createNewUser = require("../routes/handlers/post/createUser")

// GET ROUTES

//DELETE ROUTES

//PUT ROUTES

const {Router} = require("express")

const router = Router();

router.post("/user", createNewUser)

module.exports = router;