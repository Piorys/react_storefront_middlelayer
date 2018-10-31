const Product = require("../model/product.model");

exports.test = function(req, res) {
  res.send("Greetings from the Test controller!");
};

exports.product_create = (req, res) => {
  let product = new Product({
    name: req.body.name,
    price: req.body.price,
    currency: req.body.currency,
    image: req.body.imgUrl,
    description: req.body.description
  });

  product.save(err => {
    if (err) {
      return next(err);
    }
    res.send("Product Created successfully");
  });
};

exports.product_details = (req, res) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) return next(err);
    res.send(product);
  });
};

exports.product_update = (req, res) => {
  Product.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    (err, product) => {
      if (err) return next(err);
      res.send("Product updated");
    }
  );
};

exports.product_delete = (req, res) => {
  Product.findByIdAndRemove(req.params.id, (err, product) => {
    if (err) return next(err);
    res.send("Product deleted");
  });
};
