const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
require('dotenv').config();

// setting our port for Heroku and local
const PORT = process.env.PORT || 8000;

const app = express();

app.use(logger("dev"))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static("public"))

// connect to the database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true })

// importing my routes
const routes = require("./routes/routes")

app.use(routes)

// server is listening
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});