import Product from "../models/Products.js";

export const createProduct = async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const saveProduct = await newProduct.save();
    res.status(200).json(saveProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};
export const findAllProduct = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(err);
  }
};
export const findProduct = async (req, res) => {
  try {
    const product = await Product.find({ _id: req.params.id });
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};
export const deleteProduct = async (req, res) => {
  try {
    await Product.deleteOne({ _id: req.params.id });
    res.status(200).json("Product deleted");
  } catch (error) {
    console.log(error);
  }
};
export const deleteAll = async (req, res) => {
  try {
    await Product.deleteMany({ _id: { $exists: true } });
    res.status(200).json("Products deleted");
  } catch (error) {
    console.log(error);
  }
};
