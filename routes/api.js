var express = require("express");

var router = express.Router();

// var path = require("path");

const Workout = require('../models/workout.js');


router.get("/api/workouts", function (req, res) {
    Workout.find()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
});

router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        // "runValidators" will ensure new exercises meet our schema requirements
        { new: true, runValidators: true }
    )
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
});




module.exports = router;