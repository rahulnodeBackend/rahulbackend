const db = require("../models");
var bcrypt = require("bcryptjs");
const User = db.User;

async function UserSeeder() {
    await User.create({
      firstName:"Admin",
      lastName:"Super",
      email:"admin@mailinator.com",
      mobileNumber:"1234567890",
      password:bcrypt.hashSync("admin$123"),
      roleId:'1'
  });
}
module.exports = UserSeeder;
