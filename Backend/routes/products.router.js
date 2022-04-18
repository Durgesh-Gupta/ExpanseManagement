const express = require("express");
const router = express.Router();

const controller = require("../controllers/product.controller");
const catchAsyncError = require("../middlewares/catchAsyncError");

router.get("/products", controller.getproducts);
router.post("/admin/products/add", controller.newProduct);

router.route("/products/:id").post(controller.getproduct);
router.route("/admin/products/:id").put(controller.updateProduct);
router.route("/admin/products/:id").delete(controller.deleteProduct);

module.exports = router;
