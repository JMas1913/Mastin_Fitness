const db = require('../db')
const Core = require('../models/exercise')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const corework = [
    { name: 'Plank', reps: '1 min', weight: 'Body-weight', sets: '3', type: 'core' },
    { name: 'Side plank', reps: '1 min', weight: 'Body-weight', sets: '3', type: 'core' },
    { name: 'Opposite knee to elbow plank', reps: '1 min', weight: 'Body-weight', sets: '3', type: 'core' },
    { name: 'Same knee to elbow plank', reps: '1 min', weight: 'Body-weight', sets: '3', type: 'core' },
    { name: 'Twisting hip drop plank', reps: '1 min', weight: 'Body-weight', sets: '3', type: 'core' },
    ]

    await Core.insertMany(corework)
    console.log("Created some core exercises!")
}
const run = async () => {
    await main()
    db.close()
}

run()