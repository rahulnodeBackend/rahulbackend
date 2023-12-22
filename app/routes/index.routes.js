const UserRoutes = require("./user.routes");          
const CountryRoute = require("./country.routes");
const CityRoutes = require("./city.routes");
const StateRoutes = require("./state.router");
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
    app.use("/api/state", StateRoutes);
};