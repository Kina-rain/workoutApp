const express = require("express");
const path = require("path");
const workout = require("../models/workout");
const mongojs = require("mongojs");

const router = express.Router();

//homepage route
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//get workouts route
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//get stats route
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/api/workouts", (req, res) => {
    workout.find({})
    .then(workoutResult => {
        res.json(workoutResult);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

router.post("/api/workouts", ({body}, res) => {
    console.log(body);
    workout.create(body)
        .then(dbResult => {
            res.json(dbResult);
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(400).json(err)
        });
});

router.put("/api/workouts/:id", (req, res) => {
    console.log("Put successful")
    let body = req.body;

    workout.update(
      { _id: mongojs.ObjectId(req.params.id) },
      {
        $push: {
          exercises: {
            type: body.type,
            name: body.name,
            duration: body.duration,
            weight: body.weight,
            reps: body.reps,
            sets: body.sets,
            distance: body.distance
          }
        }
      })
      .then(dbResult => {
        res.json(dbResult)
      })
      .catch(err => {
        res.status(400).json(err)
      })
  })

  router.get("/api/workouts/range", (req, res) => {
    workout.find({})
    .then(workoutResult => {
        res.json(workoutResult);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

module.exports = router;