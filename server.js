require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const connectDatabase = require("./helpers/database/connectDatabase");
const customErrorHandler = require("./middleware/errors/customErrorHandler");
const cors = require("cors");

const routers = require("./routers");

// MongoDb Connection
connectDatabase();

const app = express();

// Security
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;

// Routers Middleware
app.use("/api", routers);

// Error Handling
app.use(customErrorHandler);

app.get("*", function (req, res) {
  res.status(404).send("Whoops! 404 Page Not Found");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
