const dbConfig = require("../config/db.config.js");
// const Sequelize = require("sequelize");
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  logging: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Model Configuration By Ganesh Dhamande 
db.User                      = require("../models/user.model.js")(sequelize, Sequelize);
db.Country                   = require("../models/country.model.js")(sequelize, Sequelize);
db.States                   = require("../models/states.model.js")(sequelize, Sequelize);
db.City                      = require("../models/city.model.js")(sequelize, Sequelize);


module.exports = db;