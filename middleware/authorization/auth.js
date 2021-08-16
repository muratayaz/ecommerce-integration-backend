const CustomError = require("../../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const {
  isTokenIncluded,
  getAccessTokenFromHeader,
} = require("../../helpers/authorization/tokenHelpers");

const getAccessToRoute = (req, res, next) => {
  const { JWT_SECRET_KEY } = process.env;
  if (!isTokenIncluded(req)) {
    //401: Unauthorized
    //403: Forbidden
    return next(
      //You are not authorized to access this route
      new CustomError("Erişim yetkiniz yok", 401)
    );
  }
  const accessToken = getAccessTokenFromHeader(req);

  jwt.verify(accessToken, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return next(
        //You are not authorized to access this route
        new CustomError("Erişim yetkiniz yok", 401)
      );
    }
    req.user = {
      id: decoded.id,
      name: decoded.name,
    };
    next();
  });
};
module.exports = {
  getAccessToRoute,
};
