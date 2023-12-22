var express = require('express');
var router  = express.Router();
const CountryController  = require("../controllers/country.controller");
const { CountryValidation } = require("../validations");

// Create a new country
router.post("/createCountry",  CountryController.create);
// router.post("", [CountryValidation.countryCheck],  CountryController.create);


router.get("getCountry", CountryController.findAll);


router.put("/updateCountry", CountryController.update);

// Delete a country with id
router.delete("/deleteCountry", CountryController.delete);


module.exports = router;