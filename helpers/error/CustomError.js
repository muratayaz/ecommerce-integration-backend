class CustomError extends Error {
  constructor(messsage, status) {
    super(messsage);
    this.status = status;
  }
}
module.exports = CustomError;
