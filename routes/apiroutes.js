const router = require("express").Router()
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
        console.log(dbWorkout)
        res.json(dbWorkout)
    }).catch((error)=>{
        console.log(error)
    })
})

router.post("/api/workouts", (req, res)=>{
    Workout.create({}).then((dbWorkout)=>{
        res.json(dbWorkout)
    }).catch((error)=>{
        console.log(error)
    })
})

router.delete("/api/workouts", ({body}, res)=>{
    Workout.findByIdAndDelete(body.id).then(()=>{
        res.json(true)
    }).catch((error)=>{
        console.log(error)
    })
})

router.put("/api/workouts/:id", ({body,params}, res)=>{
    Workout.findByIdAndUpdate(params.id,
       {$push:{exercise:body}}, {new:true, runValidators:true} ).then((dbWorkout)=>{
        res.json(dbWorkout)
    }).catch((error)=>{
        console.log(error)
    })
})

router.get("/api/workouts/range", (req, res)=>{
    Workout.aggregate([
        {
            $addFields:{
                totalDuration:{
                    $sum:"$exercise.duration"
                }
            }
        }
    ]).sort({_id:-1})
    .limit(7)
    .then((dbWorkout)=>{
        res.json(dbWorkout)
    }).catch((error)=>{
        console.log(error)
    })
})

module.exports = router;


