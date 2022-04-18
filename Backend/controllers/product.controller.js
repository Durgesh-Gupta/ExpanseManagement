const ProductsModel = require("../model/products.model");
const ErrorHandler = require("../utils/ErrorHandler")
const catchAsyncError = require("../middlewares/catchAsyncError")

// To Get All Products List
async function getproducts(req, res) {
  let products = await ProductsModel.find({is_deleted:false});
  res.status(200).json({
    success: true,
    message: "This Route will show all Products",
    count: products.length,
    products: products,
  });
}

// To Add New Products

async function newProduct(req, res) {
  try{

    let product = await ProductsModel.create(req.body);
  }
  catch(e){
    console.log(error);
    product=error.message
  }
  res.status(201).json({
    success: true,
    message: product,
  });
}
// To Add New Products

async function getproduct(req, res, next) {
  let product = await ProductsModel.findById(req.params.id);
  if (!product) {
   return next(new ErrorHandler("Product not found", 404))
  }
  res.status(201).json({
    success: true,
    message: product,
  });
}
// To Update Products

async function updateProduct(req, res, next) {
  let product = await ProductsModel.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404))

  }
  product = await ProductsModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    product: product,
  });
}
// To Delete Products

async function deleteProduct(req, res, next) {
  let product = await ProductsModel.find({
    _id: req.params.id,
    is_deleted: false,
  });
  if (!product) {
    res.status(404).json({
      success: false,
      message: "Product Not Exists!",
    });
  }
  product = await ProductsModel.findByIdAndUpdate(
    req.params.id,
    { is_deleted: true },
    { new: true, runValidators: true, useFindAndModify: false }
  );
  res.status(200).json({
    success: true,
    message: "product deleted Successfully",
  });
}

module.exports = {
  getproducts,
  newProduct,
  getproduct,
  updateProduct,
  deleteProduct,
};
