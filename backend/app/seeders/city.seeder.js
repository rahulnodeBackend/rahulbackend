const db = require("../models");
const City = db.city

async function CitySeader() {
    await City.create({
        cityName:"Madhya Pradesh",
  });
}
module.exports = CitySeader;  