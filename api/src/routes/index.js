//POST ROUTES
const createNewUser = require("../routes/handlers/post/createUser");
const userLogin = require("../routes/handlers/post/loginUser");

// GET ROUTES

//DELETE ROUTES

//PUT ROUTES

const {Router} = require("express")

const router = Router();

router.post("/user/login", userLogin);
router.post("/user/register", createNewUser);

module.exports = router;