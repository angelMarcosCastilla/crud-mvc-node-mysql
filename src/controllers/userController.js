const userModel = require("../models/usersModel")
const userController = {}

userController.index = (req , res) => {
  userModel.getAllUser((err , result) => {
    if (!err) res.render("index",{rows:result})
  })
}

userController.addUser = (req, res) => {
    userModel.addUser(req.body, (err,res) => {
      if(!err) console.log(res)
    })
    res.send("add")
}

module.exports = userController