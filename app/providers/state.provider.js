const db = require("../models");
const { stringQueryResponse, NumericQueryResponse } = require("../common/common");
const State = db.States;
//=================== create State ============================
async function createState(req, res) {    
    const DublicateData = await State.findOne({
        where: {
            code     : req.body.code,
            name     : req.body.name,
        },
    });
    if (DublicateData) {
        return 1;
    } else {
        Data = await State.create(req.body)
        return Data;
    }
}

// Here show method call
async function show(req, res) {
    const id = req.params.id;
    countryData = await Country.findByPk(id);
    if (countryData) {
        return countryData;
    }
}
//=================== get All State ============================
async function getAllState (req, res) {   
    let id = req.query.id || "";
    let code = req.query.code || "";
    let name = req.query.name || "";
    let sortName = req.query.sortName || "";
    let country_code = req.query.state_code || "";
    let limit = parseInt(req.query.limit)
    let offset =  parseInt(req.query.offset)
    let condition;          
    if(id){
        id =  await NumericQueryResponse(id, columnName="id")
        condition = {where :{id},limit:limit,offset:offset}
    }
    else if(code){
        code =  await stringQueryResponse(code,columnName="code")
        condition = {where :{code},limit:limit,offset:offset}
    }             
    else if(sortName){
        sortName =  await stringQueryResponse(sortName,columnName="sortName")
        condition = {where :{sortName},limit:limit,offset:offset}
    }else if(name){        
        name = await stringQueryResponse(name,columnName="name")
        condition = {where :{name},limit:limit,offset:offset}
    } else if(country_code){
        country_code = await NumericQueryResponse(country_code,columnName="country_code")
        condition = {where :{country_code},limit:limit,offset:offset}
    }                                                                 
    const result = await State.findAndCountAll(condition);        
    return result;
}

async function updateState(req, res) {
    console.log(req.query)
    console.log(req.body)
    const id = req.query.id;       
    StateData = await State.update(req.body, {
        where: { id : id },
    })
    if (StateData) {
        Statedata = await State.findOne(
            { where: { id : id },
        });
        return Statedata;
        
    } else {
        return [];
    }
}

//=================== delete State ============================

async function deleteState(req, res) {
    const id = req.query.id;
    result = await State.destroy({
        where: { id: id }
    })
    return result;
}


StateProvider = {
    createState : createState,
    show : show,   
    updateState : updateState,
    deleteState : deleteState,
    getAllState : getAllState,      
}
module.exports = StateProvider;