const User = require("../../models/User");
const CustomError = require("../../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");

const checkUserExist = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);

  if (!user) {
    //There is no such user with that id
    return next(new CustomError("Böyle bir kullanıcı yok", 400));
  }

  next();
});

module.exports = { checkUserExist };
