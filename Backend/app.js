const express = require("express");
const catchAsyncError = require("./middlewares/catchAsyncError");
const app = express();
const errorMiddleware = require("./middlewares/Error")


app.use(express.json())
// All routes
const products = require('./routes/products.router')
const users = require('./routes/user.routes')


app.use("/api/v1",products)
app.use("/api/v1",users)


app.use(catchAsyncError(async(req, res, next) => {
    next();
}));
// middleware to handle error
app.use(errorMiddleware)
module.exports = app;
