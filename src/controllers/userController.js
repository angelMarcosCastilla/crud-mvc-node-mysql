const userModel = require("../models/usersModel")
const userController = {}

userController.index = (req , res) => {
  userModel.getAllUser((err , result) => {
    if (!err) res.render("index",{rows:result})
  })
}

userController.addUser = (req, res) => {
    userModel.addUser(req.body, (err,result) => {
   
      if(!err) res.redirect("/")
    })
}
userController.editUser = (req, res) => {
    userModel.editUser(req.params, (err,result) => {
   
      if(!err) res.redirect("/")
    })
}
userController.deleteUser = (req, res) => {
    userModel.deleteUser(req.params.id, (err,result) => {
   
      if(!err) res.redirect("/")
    })
}

module.exports = userController