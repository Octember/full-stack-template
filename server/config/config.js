require("dotenv").config();

module.exports = {
  development: {
    username: "postgres",
    password: "postgres",
    database: "postgres",
    host: process.env.DB_HOST,
    dialect: "postgres",
  },
};
