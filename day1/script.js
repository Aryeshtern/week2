
// const express = require('express');

// const app = express();

// app.use(express.json());

// let products = [];

// // Get all products

// app.get('/products', (req, res) => {
//   res.json(products);
//   console.log('GET request received at /products'); 

// });

// // Get a single product by ID

// app.get('/products/:id', (req, res) => {
//   const product = products.find(p => p.id === parseInt(req.params.id));

//   if (!product) {
//     return res.status(404).json({ message: 'Product not found' });
//   }

//   res.json(product);
//   console.log(`GET request received at /products/${req.params.id}`);
// });

// // Add a new product

// app.post('/products', (req, res) => {
//   const product = {
//     id: products.length + 1,
//     name: req.body.name,
//     price: req.body.price,
//     quantity: req.body.quantity
//   };

//   products.push(product);

//   res.status(201).json(product);
//   console.log('POST request received at /products');
// });

// // Update an existing product

// app.put('/products/:id', (req, res) => {
//   const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));

//   if (productIndex === -1) {
//     return res.status(404).json({ message: 'Product not found' });
//   }

//   const updatedProduct = {
//     id: parseInt(req.params.id),
//     name: req.body.name,
//     price: req.body.price,
//     quantity: req.body.quantity
//   };

//   products[productIndex] = updatedProduct;

//   res.json(updatedProduct);
//   console.log(`PUT request received at /products/${req.params.id}`);
// });

// // Delete a product

// app.delete('/products/:id', (req, res) => {
//   const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));

//   if (productIndex === -1) {
//     return res.status(404).json({ message: 'Product not found' });
//   }

//   products.splice(productIndex, 1);

//   res.json({ message: 'Product deleted successfully' });
//   console.log(`DELETE request received at /products/${req.params.id}`);
// });

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });



