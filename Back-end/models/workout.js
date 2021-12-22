const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Workout = new Schema(
    {
        name: { type: String, required: true },
        reps: { type: String, required: true },
        weight: { type: String, required: true },
        sets: { type: String, required: true },
        type: { type: String, required: true}
    },
    { timestamps: true },
)

module.exports = mongoose.model('workout', Workout)