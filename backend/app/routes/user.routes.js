var express                     = require('express');
var router                      = express.Router();
const { AuthJwt,VerifySignUp }  = require("../middleware");
const UserController            = require("../controllers/User.Controller");
const { UserValidation }        = require("../Validations");

//router.get("", [AuthJwt.verifyToken], UserController.findAll);
router.get("",UserController.getAll);
//router.post("", [AuthJwt.verifyToken, userValidation.createUser, verifySignUp.checkDuplicateUsernameOrEmail], UserController.create);
router.post("", [UserValidation.create, VerifySignUp.checkEmailMobileNumber], UserController.create);
router.get("/:id", UserController.get);
router.put("/:id", [UserValidation.update], UserController.update);
router.delete("/:id", UserController.destroy);

router.post("/update-profile", [AuthJwt.verifyToken, UserValidation.update], UserController.updateProfile);
router.post("/activate-user", [AuthJwt.verifyToken], UserController.activateUser);
router.post("/change-password",[AuthJwt.verifyToken], UserController.changePassword);




module.exports = router;