const envConfig = require("./Env.Config");
module.exports = {
    secret: envConfig.JwtSecretKey
};