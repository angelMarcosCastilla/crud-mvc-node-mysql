const express = require("express")
const userController = require("../controllers/userController")
const router = express.Router()
router.get("/", userController.index)
router.post("/addUser", userController.addUser)
router.get("/deleteUser/:id", userController.deleteUser)


module.exports = router