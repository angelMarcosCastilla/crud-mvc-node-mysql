const userModels = require("../models/usersModel");
const userModel = require("../models/usersModel");
const userController = {};

userController.index = (req, res) => {
	userModel.getAllUser((err, result) => {
		if (!err) res.render("index", { rows: result });
	});
};

userController.addUser = (req, res) => {
	userModel.addUser(req.body, (err, result) => {
		if (!err) res.redirect("/");
	});
};
userController.editUser = (req, res) => {
	userModel.editUser(req.params.id, (err, result) => {
		if (!err) res.render("./editUser", { user: result[0] });
	});
};

userController.updateUser = (req, res) => {
	const {id,nombre,apellido,edad} = req.body
	userModel.updateUser({nombre,apellido,edad}, id, (err, result) => {
		if (!err) res.redirect("/")
	})
};
userController.deleteUser = (req, res) => {
	userModel.deleteUser(req.params.id, (err, result) => {
		if (!err) res.redirect("/");
	});
};

module.exports = userController;
