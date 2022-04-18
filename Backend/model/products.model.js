const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: [100, "Product name cannot exceed 100 chracters"],
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: [100, "Product name cannot exceed 100 chracters"],
  },
  rating: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
    maxlength: [5, "Product name cannot exceed 100 chracters"],
    default: 0.0,
  },
  category: {
    type: String,
    required: true,
    enum: {
      values: [
        "Electronics",
        "Cemeras",
        "Books",
        "shoes",
        "Laptop",
        "Clothes",
        "Accessories",
        "Sports",
        "Health",
        "Headphones",
      ],
      message: "Please Select correct category for Product",
    },
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  saller:{
      type: String,
      required: true,
  },
  stock:{
      type: Number,
      required: [true,]
  },
  numofreviews:{
      type: Number,
      required: [true,]
  },
  reviews:[
      {
          name:{
              type: String,
              required: true,
          },
          rating:{
              type: Number,
              required: true
          },
          comment:{
              type: String,
              required: true
          }
      }
  ],
  created_at:{
      type: Date,
      default:Date.now
  },
  is_deleted:{
      type: Boolean,
      default:false
  }
});
const PRODUCT = mongoose.model("Product", ProductSchema);

module.exports = PRODUCT;
