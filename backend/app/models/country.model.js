module.exports = (sequelize, Sequelize) => {
    const Country = sequelize.define("countries", {
        id: {
            type: Sequelize.INTEGER(20),
            autoIncrement: true,
            primaryKey: true
        },
        countryName: {
            type: Sequelize.STRING,
            comment: 'For Country Names',
        },
    });
    return Country;
};