const db = require("../models");
const Country = db.country

async function CountrySeeder() {
    await Country.create({
        countyName:"India",
  });
}
module.exports = CountrySeeder;  