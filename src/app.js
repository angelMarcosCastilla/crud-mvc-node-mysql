const express = require("express");
const app = express();
const morgan = require("morgan");
require("./database/db.connection");
const PORT = process.env.PORT || 3000;
const VIEW = `${__dirname}/views`;
const PUBLIC_DIR = express.static(`${__dirname}/public`);
const ROUTER = require("./routers");
//setting
app
	.set("port", PORT)
	.set("view engine", "pug")
	.set("views", VIEW)

	//middlewares
	.use(morgan("dev"))
	.use(express.json())
	.use(express.urlencoded({ extended: false }))
	//static
	.use(PUBLIC_DIR)
	//routers
	.use(ROUTER);

//server
app.listen(app.get("port"), () => {
	console.log(`server on port ${app.get("port")}`);
});
