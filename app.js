const express = require("express");
const app = express();
const bodyParser= require('body-parser');
app.use(express.json());
app.use(bodyParser.json());

// Imports Routes;
const form = require("./routes/formRoute");

app.use("/api/v1",form);

module.exports = app;
