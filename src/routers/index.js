const express = require("express")
const userController = require("../controllers/userController")
const router = express.Router()
router.get("/", userController.index)
router.post("/addUser", userController.addUser)
router.post("/updateUser",userController.updateUser)
router.get("/deleteUser/:id", userController.deleteUser)
router.get("/editUser/:id", userController.editUser)

module.exports = router