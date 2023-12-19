module.exports = (sequelize, Sequelize) => {
    const City = sequelize.define("cities", {
        id:{
            type: Sequelize.INTEGER(20),
            autoIncrement: true,
            primaryKey: true
        },
        cityName: {
            type: Sequelize.STRING,
            comment: 'For Name',
        },
        countryId: {
            type: Sequelize.INTEGER(20),
            comment: 'Foreign key for Table country',
        },
    });
    return City;
};