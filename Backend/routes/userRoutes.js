const Router=require("express");
const { signup, logout, login } = require("../controllers/userController");
const router=Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").post(logout)

module.exports=router;
