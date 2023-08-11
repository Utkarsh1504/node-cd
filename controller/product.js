import Product from "../model/product.js";

// Create
export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const doc = await product.save();
    console.log(doc);
    res.status(201).json(doc);
  } catch (err) {
    console.error("error", err);
    res.status(400).json(err);
  }
};

// Read
export const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
};

// Read One Item
export const getProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.status(200).json(product);
};

// Update(Replace) Put
export const replaceProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await Product.findOneAndReplace({ _id: id }, req.body, { new: true });
    res.status(200).json({ message: "successfully updated", doc });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

// Update(modify) Patch
export const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true });
    res.status(200).json({ message: "successfully updated", doc });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await Product.findOneAndDelete({ _id: id });
    res.status(200).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
