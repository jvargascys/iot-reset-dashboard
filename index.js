const express = require('express');
const port = 4000;

const mongoose = require("mongoose") // new
const routes = require("./routes.js");
// Connect to MongoDB database
mongoose.connect("mongodb://localhost:27017/acmedb", { useNewUrlParser: true })
	.then(() => {
        console.log("connectado")
        const app = express();
        app.use('/', express.static(__dirname + '/public'));
        app.use(express.json()) 
        app.use("/api", routes);
        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`)
        })
	});

