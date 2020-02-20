const express = require("express");
const path = require("path");

const router = express.Router();

//homepage route
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//get workouts route
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

module.exports = router;