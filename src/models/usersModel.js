const sql = require("../database/db.connection");
const userModels = {}

userModels.getAllUser = (result) => {  
  sql.query(`SELECT * FROM users` , (err, res) => {
    if(err) return result(err, null)
    return result(null,res)
  })
}

userModels.addUser = (data, result) => {
  sql.query("INSERT INTO users set ?", [data], (err,res) => {
    if(err) return result(err,null)
    return result(null,res)  
  })
}
userModels.editUser = (data, result) => {
  sql.query("INSERT INTO users set ?", [data], (err,res) => {
    if(err) return result(err,null)
    return result(null,res)  
  })
}
userModels.deleteUser = (id, result) => {
  sql.query("DELETE from users WHERE id = ?",[id], (err,res) => {
    if(err) return result(err,null)
    return result(null,res)  
  })
}
module.exports = userModels