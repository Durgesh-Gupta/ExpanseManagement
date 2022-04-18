const UserModel = require("../model/User.model");

const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("../middlewares/catchAsyncError");

// Registration
exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await UserModel.create({
    name,
    email,
    password,
    avatar: {
      public_id: "demo",
      url: "demo"
    }
  });
const token=user.getJwtToken();
  res.status(201).json({
    success: true,
    token,
  });
});
