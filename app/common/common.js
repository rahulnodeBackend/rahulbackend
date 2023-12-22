
const { Op } = require("sequelize");
const stringQueryResponse = async (body,columnName) => {
    
    let query = ``;
    const Data = await getSplitStr(body);     
    
    if (Data[0] === "isequal") {
      query = {        
            [Op.like]: Data[1]        
      }
    }
    if (Data[0] === "isnotequal") {
        query = {            
                [Op.notLike]: Data[1]              
          }
    }
    if (Data[0] === "contains") {
        query = {            
                [Op.substring]: Data[1]              
             }
    }
    if (Data[0] === "startswith") {
        query = {            
                [Op.startsWith]: Data[1]              
          }
    }    
    return query;
  };

  const NumericQueryResponse = async(body,columnName="") => {
    
    let  colname =  columnName;
    let query = ``;
    const Data = await getSplitStr(body);    
    if (Data[0] === "isequal") {
      query = 
          {
            [Op.eq]: Data[1]
          }      
    }
    if (Data[0] === "isnotequal") {
        query = {            
                [Op.ne]: Data[1]              
          }
    }
    if (Data[0] === "contains") {
        query = {            
                [Op.like]: Data[1]              
          }
    }
    if (Data[0] === "startswith") {
        query = {
            
                [Op.startsWith]: Data[1]              
          }
    }

    return query;
  };

  async function getSplitStr (string){
    
    return string.split(':');  
}

  module.exports = {
    stringQueryResponse,
    NumericQueryResponse,
    getSplitStr
  }