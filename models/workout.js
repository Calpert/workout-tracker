const mongoose = require("mongoose")
const Schema = mongoose.Schema
const workoutSchema = new Schema(
    {
        day:{
            type:Date,
            default:() => new Date()
        },
        exercises:[
            {
                type:{
                    type: String,
                    trim:true,
                    required:"Enter in a type of exercise"
                },
                weight:{
                    type: Number
                },
                duration:{
                    type: Number,
                    required:"Enter in the length of your exercise"
                },
                reps:{
                    type: Number
                },
                sets:{
                    type: Number
                },
                distance:{
                    type: Number
                },
            },
        ]

    }
    // {
    //     toJSON:{
    //         virtuals:true
    //     },
    // }



)
// workoutSchema.virtual("totalDuration").get(function(){
//     return this.exercise.reduce((total, exercises)=>{
//         return total + exercises.duration
//     },0)
// })
const Workout = mongoose.model("workout", workoutSchema)
module.exports = Workout