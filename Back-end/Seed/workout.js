const db = require('../db')
const Workout = require('../models/workout')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const program = [
    { name: 'Squat', reps: 'Max', weight: 'Body-weight', sets: '3', type: 'legs' },
    { name: 'Front lunge', reps: 'Max', weight: 'Body-weight', sets: '3', type: 'legs'  },
    { name: 'Push-ups', reps: 'Max', weight: 'Body-weight', sets: '3', type: 'pushing' },
    { name: 'Military Push-ups', reps: 'Max', weight: 'Body-weight', sets: '3', type: 'pushing'  },
    { name: 'Chin-ups', reps: 'Max', weight: 'Body-weight', sets: '3', type: 'pulling' },
    { name: 'Pull-ups', reps: 'Max', weight: 'Body-weight', sets: '3', type: 'pulling' },
    { name: 'Opposite knee to elbow plank', reps: '1 min', weight: 'Body-weight', sets: '3', type: 'core' },
    { name: 'Same knee to elbow plank', reps: '1 min', weight: 'Body-weight', sets: '3', type: 'core' },
    ]

    await Workout.insertMany(program)
    console.log("Created a workout!")
}
const run = async () => {
    await main()
    db.close()
}

run()