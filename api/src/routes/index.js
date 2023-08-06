//POST ROUTES
const createNewUser = require("../routes/handlers/post/createUser");
const userLogin = require("../routes/handlers/post/loginUser");
const recoveryPassword = require("../routes/handlers/post/recoveryPassword");
const activateAccount = require("../routes/handlers/post/activateAccount");
// GET ROUTES
const sendTokenRecovery = require("../routes/handlers/get/resetPassword");
//DELETE ROUTES

//PUT ROUTES

const {Router} = require("express")

const router = Router();

router.post("/user/login", userLogin);
router.post("/user/register", createNewUser);
router.post("/user/recovery-password", recoveryPassword);
router.post("/user/activate-account", activateAccount);

router.get("/user/reset-password", sendTokenRecovery);

module.exports = router;