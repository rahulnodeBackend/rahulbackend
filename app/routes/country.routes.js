var express = require('express');
var router  = express.Router();
const CountryController  = require("../controllers/country.controller");
const { CountryValidation } = require("../validations");

// Create a new country

router.get("", CountryController.getAll);
router.post("",  CountryController.create);
router.get("/:id",  CountryController.get);
router.put("/:id", CountryController.update);
router.delete("/:id", CountryController.delete);

module.exports = router;