const router = require("express").Router
const Workout = require("../models/workout")

router.get("/api/workouts", (req, res)=>{
    Workout.aggregate([
        {
            $addFields:{
                totalDuration:{
                    $sum:"$exercise.duration"
                }
            }
        }
    ]).then((dbWorkout)=>{
        res.json(dbWorkout)
    }).catch((error)=>{
        console.log(error)
    })
})