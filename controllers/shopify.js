const axios = require("axios");
const Shopify = require("../models/Shopify");
const asyncErrorWrapper = require("express-async-handler");
require("dotenv").config();

const username = process.env.SHOPIFY_API_KEY;
const password = process.env.SHOPIFY_API_SECRET_KEY;
const SHOPIFY_URL = process.env.SHOPIFY_URL;

const getAllProducts = async (req, res, next) => {
  let data = [];
  await axios
    .get(SHOPIFY_URL + "products.json", {
      auth: {
        username: username,
        password: password,
      },
    })
    .then((response) => {
      data = response.data;
    });
  res.status(200).json({
    success: true,
    data: data,
  });
};

const createProduct = asyncErrorWrapper(async (req, res, next) => {
  let newData = [];
  let url = SHOPIFY_URL + "products.json";
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
  let url = `${SHOPIFY_URL}products/${req.params.id}.json`;
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

const deleteProductById = asyncErrorWrapper(async (req, res, next) => {
  let url = `${SHOPIFY_URL}products/${req.params.id}.json`;
  await axios.delete(url, {
    auth: {
      username: username,
      password: password,
    },
  });
  res.status(200).json({
    success: true,
    data: {},
  });
});

module.exports = {
  getAllProducts,
  createProduct,
  updateProductById,
  deleteProductById,
};
