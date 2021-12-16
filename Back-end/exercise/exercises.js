const db = require('../db')
const Workout = require('../models/workout')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const push = async () => {
    const chest = [
        { exercise: 'Push-ups', reps: 'Max', weight: 'Body-weight', sets: '3', },
        { exercise: 'Military Push-ups', reps: 'Max', weight: 'Body-weight', sets: '3', },
        { exercise: 'Diamond Push-ups', reps: 'Max', weight: 'Body-weight', sets: '3', },
        { exercise: 'Wide-fly Push-ups', reps: 'Max', weight: 'Body-weight', sets: '3', },
        { exercise: 'Spider-Man Push-ups', reps: 'Max', weight: 'Body-weight', sets: '3', }
    ]

    await Workout.insertMany(chest)
    console.log("Created some chest exercise!")
}

const pull = async () => {
    const back = [
        { exercise: 'Chin-ups', reps: 'Max', weight: 'Body-weight', sets: '3', },
        { exercise: 'Pull-ups', reps: 'Max', weight: 'Body-weight', sets: '3', },
        { exercise: 'Supermans', reps: 'Max', weight: 'Body-weight', sets: '3', },
        { exercise: 'Overhead Lat-pull', reps: '10-12', weight: 'Heavy enough to fail between 10-12', sets: '3', },
        { exercise: 'Renegade Rows', reps: '10-12', weight: 'Heavy enough to fail between 10-12', sets: '3', }
    ]

    await Workout.insertMany(back)
    console.log("Created some back exercise!")
}

const armsAndshoulders = async () => {
    const arms = [
        { exercise: 'Cross-body Alternating Shoulder Press', reps: '10-12', weight: 'Heavy enough to fail between 10-12', sets: '3', },
        { exercise: 'L-Raises', reps: '10-12', weight: 'Heavy enough to fail between 10-12', sets: '3', },
        { exercise: 'Biceps Curls', reps: '10-12', weight: 'Heavy enough to fail between 10-12', sets: '3', },
        { exercise: 'Hammer Curls', reps: '10-12', weight: 'Heavy enough to fail between 10-12', sets: '3', },
        { exercise: 'Bench Dips', reps: 'Max', weight: 'Body-weight', sets: '3', },
        { exercise: 'Triceps Press-down', reps: '10-12', weight: 'Heavy enough to fail between 10-12', sets: '3', }
    ]

    await Workout.insertMany(arms)
    console.log("Created some arm exercises!")
}

const core = async () => {
    const abs = [
        { exercise: 'Plank', reps: '1 min', weight: 'Body-weight', sets: '3', },
        { exercise: 'Side plank', reps: '1 min', weight: 'Body-weight', sets: '3', },
        { exercise: 'Opposite knee to elbow plank', reps: '1 min', weight: 'Body-weight', sets: '3', },
        { exercise: 'Same knee to elbow plank', reps: '1 min', weight: 'Body-weight', sets: '3', },
        { exercise: 'Twisting hip drop plank', reps: '1 min', weight: 'Body-weight', sets: '3', }
    ]

    await Workout.insertMany(abs)
    console.log("Created some ab exercises!")
}

const lowerBody = async () => {
    const legs = [
        { exercise: 'Squat', reps: 'Max', weight: 'Body-weight', sets: '3', },
        { exercise: 'Front lunge', reps: 'Max', weight: 'Body-weight', sets: '3', },
        { exercise: 'Side lunge', reps: 'Max', weight: 'Body-weight', sets: '3', },
        { exercise: 'Transverse lunge', reps: 'Max', weight: 'Body-weight', sets: '3', },
        { exercise: 'Alternating curtsy lunge', reps: 'Max', weight: 'Body-weight', sets: '3', }
    ]

    await Workout.insertMany(legs)
    console.log("Created some leg exercises!")
}

const workouts = async () => {
    Math.random.push()
    Math.random.push()
    Math.random.pull()
    Math.random.pull()
    Math.random.armsAndshoulders()
    Math.random.armsAndshoulders()
    Math.random.lowerBody()
    Math.random.lowerBody()
    Math.random.core()
    Math.random.core()

}

const run = async () => {
    await workouts()
    db.close()
}

run()