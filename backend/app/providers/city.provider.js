const db = require("../models");
const ApiHelper = require("../helpers/ApiHelper");
const City = db.City;
const User = db.User;
const Op = db.Sequelize.Op;


//=================== create City ============================

async function createCity(req, res) {
    const DublicateData = await City.findOne({
        where: {
            Country_Id     : req.body.Country_Id,
            City_Name_Eng  : req.body.City_Name_Eng,
        },
    });
    if (DublicateData) {
        return 1;
    } else {
        Data = await City.create(req.body)
        return Data;
    }
}


//=================== get All City ============================

async function getAllCity(req, res) {
    // var Country_Id                         =  req.query.Country_Id;
    // userId                                 = req.countryId;
    // const { page, size, allowanceName }    = req.query;
    // const { limit, offset }                = ApiHelper.getPagination(page, size);
    // var condition                          = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
    const result = await City.findAndCountAll(
        // {
        // where: { Country_Id : Country_Id }
        // where: condition,
        // limit,
        // offset
        // }
    );
    // const response = ApiHelper.getPagingData(AllowanceTypes, page, limit);
    return result;
}



async function getCities(req, res) {
    var Country_Id = req.query.Country_Id;
    // var Country_Id                         =  req.query.Country_Id;
    // userId                                 = req.countryId;
    // const { page, size, allowanceName }    = req.query;
    // const { limit, offset }                = ApiHelper.getPagination(page, size);
    // var condition                          = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
    const result = await City.findAndCountAll(
        {
            where: { Country_Id : Country_Id }
        }
        // {
        // where: { Country_Id : Country_Id }
        // where: condition,
        // limit,
        // offset
        // }
    );
    // const response = ApiHelper.getPagingData(AllowanceTypes, page, limit);
    return result;
}

//=================== show City ============================

async function showCity(req, res) {
    const id = req.params.id;
    cityData = await City.findByPk(id);
    if (cityData) {
        return cityData;
    }
}

//=================== update City ============================

async function updateCity(req, res) {
    const Id = req.params.id;
    // const city = {
    //     City_Name_Eng         :   req.body.City_Name_Eng,
    //     City_Name_Ar          :   req.body.City_Name_Ar,
    //     Country_Id            :   req.body.Country_Id,
    //     Maps_IP               :   req.body.Maps_IP,
    // };
    cityData = await City.update(req.body, {
        where: { City_Id : Id },
    })
    if (cityData) {
        citydata = await City.findOne(
            { where: { City_Id : Id },
        });
        return citydata;
        
    } else {
        return [];
    }
}

//=================== delete City ============================

async function deleteCity(req, res) {
    const Id = req.params.id;
    result = await City.destroy({
        where: { City_Id: Id }
    })
    return result;
}



CityProvider = {
    createCity : createCity,
    showCity   : showCity,
    updateCity : updateCity,
    deleteCity : deleteCity,
    getAllCity : getAllCity,
    getCities  : getCities 
}
module.exports = CityProvider;