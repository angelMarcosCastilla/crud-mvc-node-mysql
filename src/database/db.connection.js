const mysql = require("mysql")
const mysqlConfig = require("./bdConfig")

const connect = mysql.createConnection(mysqlConfig)

connect.connect(() => {
  console.log("funciona")
})

module.exports = connect