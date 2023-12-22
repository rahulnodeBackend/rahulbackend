var express = require('express');
var router  = express.Router();
const CityController  = require("../controllers/city.controller");
const { CityValidation } = require("../validations");

// Create a new city
router.post("/createCity",CityValidation.create, CityController.create);

// Get a All city
router.get("/getAllCity", CityController.findAll);


router.get("/cities", CityController.cities);


// Retrieve a single city with id
router.get("/:id", CityController.findOne);

// Update a city with id
router.post("/updateCity", CityController.update);


// Delete a city with id
router.delete("/deleteCity/:id", CityController.delete);


module.exports = router;