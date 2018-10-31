const Product = require("../model/product.model");

exports.test = function(req, res) {
  res.send("Greetings from the Test controller!");
};

exports.product_create = (req, res) => {
  let product = new Product({
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
    currency: req.body.currency,
    image: req.body.imgUrl,
    description: req.body.description
  });

  product.save(err => {
    if (err) {
      return console.error(err);
    }
    res.send("Product Created successfully");
  });
};
