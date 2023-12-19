const dbConfig = require("../config/Db.Config.js");
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
db.User                      = require("../models/User.Model.js")(sequelize, Sequelize);
db.Country                   = require("../models/Country.Model.js")(sequelize, Sequelize);
db.City                      = require("../models/City.Model.js")(sequelize, Sequelize);


module.exports = db;