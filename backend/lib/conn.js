const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: "8889",
    user: "admin",
    password: "superadmin24!",
    database: "notes"
})

module.exports = connection;