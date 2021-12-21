const db = require('../db')
const Profile = require('../models/profile')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const profiles = [
    { name: 'Jonathan', age: '34', sex: 'male', goal: 'lose 10 lbs' },
    { name: 'Deborah', age: '71', sex: 'female', goal: 'lose 5 lbs' },
    { name: 'Jason', age: '45', sex: 'male', goal: 'lose 7 lbs' },
    { name: 'Jane', age: '25', sex: 'female', goal: 'lose 10 lbs' },
    { name: 'David', age: '39', sex: 'male', goal: 'lose 20 lbs' },
    ]

    await Profile.insertMany(profiles)
    console.log("Created some profiles!")
}
const run = async () => {
    await main()
    db.close()
}

run()