const { body, validationResult } = require('express-validator');
const ApiHelper                  = require("../helpers/apiHelper")


cityCheck =  [
    body('cityName')
        .exists().withMessage('City name is required')
        .isAlphanumeric().withMessage('City name should be alpanumeric')
        .isLength({min: 1}).withMessage('City name should not be empty')
        .trim(),
    body('countryId')
        .exists().withMessage('Country id is required')
        .isAlphanumeric().withMessage('Country id should be numeric')
        .isLength({min: 1}).withMessage('Country id should not be empty')
        .trim(),
    body('stateId')
        .exists().withMessage('State id is required')
        .isAlphanumeric().withMessage('State id should be numeric')
        .isLength({min: 1}).withMessage('State id should not be empty')
        .trim(),


    function(req,res,next) {
        var errorValidation = validationResult(req);
        if ( errorValidation.errors[0] ) {
            return ApiHelper.successError(res,203,errorValidation.errors[0].msg,[]);
        }
        next()
    }
];

createCity =  [
    body('code')
        .exists().withMessage('City code is required')
        .isAlphanumeric().withMessage('City code should be alpanumeric')
        .isLength({min: 1}).withMessage('City code should not be empty')
        .trim(),
    body('name')
        .exists().withMessage('City name is required')
        .isAlphanumeric().withMessage('City name should be numeric')
        .isLength({min: 1}).withMessage('City name should not be empty')
        .trim(),
    body('state_code')
        .exists().withMessage('State code is required')
        .isNumeric().withMessage('State code should be numeric')
        .isLength({min: 1}).withMessage('State code should not be empty')
        .trim(),


    function(req,res,next) {
        var errorValidation = validationResult(req);
        if ( errorValidation.errors[0] ) {
            return ApiHelper.successError(res,203,errorValidation.errors[0].msg,[]);
        }        
        next()
    }
];

const validation = {
    cityCheck: cityCheck,
    create: createCity,
};
  module.exports = validation;