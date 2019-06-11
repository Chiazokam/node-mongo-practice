import Product from '../models/products.models';

const test = (req, res) => {
    res.send('Greetings from the Test controller!');
};

const createProduct = (req, res) => {
  const { name, price } = req.body;
  const productInput = {
    name,
    price
  }
  const product = new Product(productInput);
  product.save((err, product) => {
      if (err) return res.status(400).json({message: err.message});
      res.status(201).json({
        status: '201',
        product
      })
  })
}

const getProducts = (req, res) => {
  Product
  .find()
  .exec((err, products) => {
      if (err) return res.status(400).json({message: err.message});
      res.status(200).json({
        status: '200',
        products
      })
  })
}

const updateProduct = async (req, res) => {
  const { name, price } = req.body;
  const { id } = req.params;
  const findProduct = await Product.checkExistence({ _id: id });
  if (findProduct) {
    Product
    .findByIdAndUpdate(id, {$set: {name, price}}, {new: true})
    .exec((err, product) => {
        if (err) return res.status(404).json({ message: err.message})
        return res.status(201).json({
          status: '201',
          message: 'Product Updated',
          product
        })
    })
  } else {
      return res.status(404).json({
        status: '404',
        message: 'Product does not exist'
      })
    }
}

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const findProduct = await Product.checkExistence({ _id: id });
  if (findProduct) {
    Product
    .deleteOne({ _id: id })
    .exec((err, product) => {
        if (err) return res.status(404).json({ message: err.message})
        return res.status(201).json({
          status: '201',
          message: `${product.deletedCount} Product Deleted`
        })
    })
  } else {
      return res.status(404).json({
        status: '404',
        message: 'Product does not exist'
      })
    }
}

export { test, createProduct, getProducts, updateProduct, deleteProduct };
