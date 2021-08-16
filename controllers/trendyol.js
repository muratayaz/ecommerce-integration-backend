const axios = require("axios");
const asyncErrorWrapper = require("express-async-handler");

const username = process.env.TRENDYOL_API_KEY;
const password = process.env.TRENDYOL_API_SECRET_KEY;
const suppliersID = process.env.TRENDYOL_API_SUPPLIERS_ID;
const TRENDYOL_URL = process.env.TRENDYOL_URL;

const getAllProducts = asyncErrorWrapper(async (req, res, next) => {
  let dataTrendyol = [];
  let url = TRENDYOL_URL + suppliersID + "/products";
  await axios
    .get(url, {
      auth: {
        username: username,
        password: password,
      },
    })
    .then((response) => {
      dataTrendyol = response.data.content;
    });
  res.status(200).json({
    success: true,
    data: dataTrendyol,
  });
});

const createProductById = asyncErrorWrapper(async (req, res, next) => {
  let newData = [];
  let url = TRENDYOL_URL + suppliersID + "/v2/products";
  await axios
    .post(url, req.body, {
      auth: {
        username: username,
        password: password,
      },
    })
    .then((response) => {
      newData = response.data;
    });
  res.status(201).json({
    success: true,
    data: newData,
  });
});

const updateProductById = asyncErrorWrapper(async (req, res, next) => {
  let newData = [];
  let url = TRENDYOL_URL + suppliersID + "/v2/products";
  await axios
    .put(url, req.body, {
      auth: {
        username: username,
        password: password,
      },
    })
    .then((response) => {
      newData = response.data;
    });
  res.status(201).json({
    success: true,
    data: newData,
  });
});

module.exports = {
  getAllProducts,
  createProductById,
  updateProductById,
};
