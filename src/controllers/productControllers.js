const Product = require("../models/Product");

const getProducts = async (req, res) => {
  const products = await Product.find().select(
    "_id name price stock category.name",
  );
  res.status(200).json(products);
};

const getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id).select(
    "_id name price stock category.name",
  );
  if (!product) {
    return res.status(404).json({ message: "Producto no encontrado." });
  }
  res.status(200).json(product);
};

const createProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
};

const replaceCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado." });
    }
    product.category = req.body;
    await product.save();
    res.status(200).json({ message: "Categoría editada con exito!!!" });
  } catch (error) {
    res.status(500).json({ message: "Error al editar la categoría" });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado." });
    }
    product.category = undefined;
    await product.save();
    res.status(200).json({ message: "Categoría fue eliminada con exito!!!" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la categoría" });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  replaceCategory,
  deleteCategory,
};
