const db = require("../models");
const ApiHelper = require("../helpers/apiHelper");
const Country = db.Country;
const Op = db.Sequelize.Op;

//Here get all countries
async function getAll(req, res) {
    const { page, size, search, sortOrder,sortBy } = req.query;
    const { limit, offset } = ApiHelper.getPagination(page, size);
    var searchValue = search ? search : '';
    const Countries = await Country.findAndCountAll({
        where: {
            [Op.or]: [
                { code: { [Op.like]: `%${searchValue}%` } },
                { name: { [Op.like]: `%${searchValue}%` } },
                { sortName: { [Op.like]: `%${searchValue}%` } },
            ],
        },
        order: [
            [sortBy ? sortBy : 'id', sortOrder ? sortOrder : 'ASC'],
        ],
        limit,
        offset
    });
    const response = ApiHelper.getPagingData(Countries, page, limit);
    return response;
}

async function createUpdate(req, res) {
    const checkCountry = await Country.findOne({
        where: {
            name  : req.body.name,
        },
    });
    if (checkCountry) {
        return 1;
    } else {
        const countryObj = {
            name  :  req.body.name,
            sortName    :  req.body.sortName,
            code        :  req.body.code,
        };
        if(req.params && req.params.id){
            const id = req.params.id;
            updatData = await Country.update(countryObj, {
                where: { id: id }
            })
            return updatData;
        }else{
            const createData = Country.create(countryObj)
            return createData;
        }
    }
}

//Here get country using id
async function get(req, res) {
    const id = req.params.id;
    countryData = await Country.findByPk(id);
    if (countryData) {
        return countryData;
    }
}

//Here delete country using id
async function destroy(req, res) {
    const id = req.params.id;
    result = await Country.delete({
        where: { id : id }
    })
    return result;
}

CountryProvider = {
    getAll           : getAll,
    createUpdate     : createUpdate,
    get              : get,
    destroy          : destroy,
}
module.exports = CountryProvider;