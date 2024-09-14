const express = require('express');
const app = express();
const port = 5000;
app.use(express.json());

let products = []; // Array untuk menyimpan produk

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/products', (req, res) => {
  const product = req.body;
  products.push(product);
  res.status(201).json(product);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) res.json(product);
  else res.status(404).send('Product not found');
});

app.put('/api/products/:id', (req, res) => {
  let product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    product = { ...product, ...req.body };
    res.json(product);
  } else res.status(404).send('Product not found');
});

app.delete('/api/products/:id', (req, res) => {
  products = products.filter(p => p.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.listen(port, () => console.log(`Server running on port ${port}`));
