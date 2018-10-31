const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const product = require("./routes/product.routes");
const app = express();
const conf = require("./config.js");

//DB Connection
let dbUser = conf.database.dbUser;
let dbPass = conf.database.dbPassword;
let dbName = conf.database.dbName;
let dev_db_url =
  "mongodb://" + dbUser + ":" + dbPass + "@ds147213.mlab.com:47213/" + dbName;
let mongoDb = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDb);
mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/products", product);

let port = 2137;

app.listen(port, () => {
  console.log("Server is up and running on port " + port);
});
