const CustomError = require("../../helpers/error/CustomError");
const customErrorHandler = (err, req, res, next) => {
  let customError = err;

  if (err.name === "SyntaxError") {
    //Unexpected Syntax
    customError = new CustomError("Beklenmeyen Sözdizimi", 400);
  }
  if (err.name === "ValidationError") {
    customError = new CustomError(err.message, 400);
  }
  if (err.code === 11000) {
    customError = new CustomError(
      //Duplicate Key Found : Check Your Input
      "Yinelenen Anahtar Bulundu: Girişinizi Kontrol Edin",
      400
    );
  }
  if (err.name === "CastError") {
    //Please provide a valid id
    customError = new CustomError("Lütfen geçerli bir id girin", 400);
  }
  console.log(customError.message, customError.status);
  console.log(customError);

  res.status(customError.status || 500).json({
    success: false,
    message: customError.message,
  });
};

module.exports = customErrorHandler;
