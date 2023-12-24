var express = require('express');
var router  = express.Router();
const StateController  = require("../controllers/state.controller");
const { StateValidation} = require("../validations");

router.get("", StateController.findAll);
router.post("", StateValidation.createState, StateController.create);
router.get("/:id",  StateController.get);
router.put("/:id", StateController.update);
router.delete("/:id", StateController.delete);

module.exports = router;