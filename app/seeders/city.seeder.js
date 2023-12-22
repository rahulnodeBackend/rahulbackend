const db = require("../models");
const City = db.City

async function CitySeader() {
    await City.create({
      code:"BPL"  ,
      name:"Bhopal",
      state_code: "23",
  });
}
module.exports = CitySeader;  
