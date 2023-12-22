const db = require("../models");
const Country = db.Country

async function CountrySeeder() {  
    await Country.create({       
        code:"+91",
        sortName:"IND",
        name:"India",
        currency: "INR"
        
  });
}
module.exports = CountrySeeder;  
