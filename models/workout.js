const mongoose = require("mongoose");

const Schema = new mongoose.Schema;

const workoutApp = new Schema({
    day: {
        type: Date,
        default: Date.now
      },
      exercises: [{
        type: { type: String },
        name: { type: String },
        duration: { type: Number },
        weight: { type: Number },
        reps: { type: Number },
        sets: { type: Number },
        distance: { type: Number },
      }]
});

const workOut = mongoose.model("Exercise", workoutApp);

module.exports = workOut;