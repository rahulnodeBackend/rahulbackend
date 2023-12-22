module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        id: {
            type: Sequelize.INTEGER(20),
            autoIncrement: true,
            primaryKey: true
        },
        roleId: {
            type: Sequelize.ENUM('1','2','3','4','5'),
            comment: '1=Super Admin, 2=Admin, 3=User, 4=Agent, 5=Company',
            defaultValue: '3'
        },
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        mobileNumber: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        countryId: {
            type: Sequelize.INTEGER(20),
            comment: 'Foreign key for table country',
        },
        stateId: {
            type: Sequelize.INTEGER(20),
            comment: 'Foreign key for table state',
        },
        cityId: {
            type: Sequelize.INTEGER(20),
            comment: 'Foreign key for table city',
        },
        companyName:{
            type: Sequelize.STRING
        },
        panNumber:{
            type: Sequelize.STRING
        },
        businessType:{
            type: Sequelize.STRING
        },
        gstNumber:{
            type: Sequelize.STRING
        },
        website:{
            type: Sequelize.STRING
        }      
    });
    return User;
  };