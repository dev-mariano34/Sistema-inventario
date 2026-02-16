let products = [
  { id: 1, name: "Laptop", price: 1200, stock: 10 },
  { id: 2, name: "Mouse", price: 25, stock: 50 }
];

exports.getAllProducts = (req, res) => {
  res.json(products);
};

exports.createProduct = (req, res) => {
  const { name, price, stock } = req.body;

  if (!name || !price) {
    return res.status(400).json({ message: "Name and price are required" });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
    stock: stock || 0
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
};

exports.updateStock = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  product.stock = req.body.stock;
  res.json(product);
};
