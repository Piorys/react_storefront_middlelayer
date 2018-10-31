const express = require("express");
const bodyParser = require("body-parser");

const product = require("./routes/product.routes");
const app = express();

app.use("/products", product);
let port = 2137;

app.listen(port, () => {
  console.log("Server is up and running on port " + port);
});
