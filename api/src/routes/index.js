//POST ROUTES
const createNewUser = require("../routes/handlers/post/createUser");
const userLogin = require("../routes/handlers/post/loginUser");
const recoveryPassword = require("../routes/handlers/post/recoveryPassword")
// GET ROUTES

//DELETE ROUTES

//PUT ROUTES

const {Router} = require("express")

const router = Router();

router.post("/user/login", userLogin);
router.post("/user/register", createNewUser);
router.post("/user/recovery-password", recoveryPassword);

module.exports = router;