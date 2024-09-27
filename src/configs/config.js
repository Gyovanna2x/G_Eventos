const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("G_Eventos", "root", "root", {
    host: "localhost",
    dialect: "mysql",
});

module.exports = sequelize;