const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Profile = new Schema(
    {
        name: { type: String, required: true },
        age: { type: String, required: true },
        sex: { type: String, required: true },
        goal: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('profile', Profile)