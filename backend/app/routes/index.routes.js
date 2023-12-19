const UserRoutes = require("./User.Routes");          
const CountryRoute = require("./Country.Routes");
const CityRoutes = require("./City.Routes");
module.exports = function(app) {
    app.use(function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });
    app.use("/api/user", UserRoutes);
    app.use("/api/country", CountryRoute);
    app.use("/api/city", CityRoutes);
};