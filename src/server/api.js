const express = require("express");
const app = express();
const greeting = require("../logic/greeting");


app.get("/greeting/:name", (req, res) => {
	res.status(200);
	res.send({greeting: greeting(req.params.name)});	
});



module.exports = app;

//const router = express.Router;
//router.get("/greeting/:name", ??? );

//const api = require('api.js');
//app.use("/api", api);
