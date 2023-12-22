const db = require("../models");
const States = db.States

async function StateSeeder() {
    
    await States.create({
        code: "23",
        name: "Madhyapradesh",
        sortName: "MP",
        country_code: "+91"
  });
}
module.exports = StateSeeder;  
