const db = require('../db')
const Pull = require('../models/exercise')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const pulls = [
        { name: 'Chin-ups', reps: 'Max', weight: 'Body-weight', sets: '3', type: 'pulling' },
        { name: 'Pull-ups', reps: 'Max', weight: 'Body-weight', sets: '3', type: 'pulling' },
        { name: 'Supermans', reps: 'Max', weight: 'Body-weight', sets: '3', type: 'pulling' },
        { name: 'Overhead Lat-pull', reps: '10-12', weight: 'Heavy enough to fail between 10-12', sets: '3', type: 'pulling'  },
        { name: 'Renegade Rows', reps: '10-12', weight: 'Heavy enough to fail between 10-12', sets: '3', type: 'pulling'  },
        { name: 'Biceps Curls', reps: '10-12', weight: 'Heavy enough to fail between 10-12', sets: '3', type: 'pulling'  },
        { name: 'Hammer Curls', reps: '10-12', weight: 'Heavy enough to fail between 10-12', sets: '3', type: 'pulling'  },
    ]

    await Pull.insertMany(pulls)
    console.log("Created some pulling exercises!")
}
const run = async () => {
    await main()
    db.close()
}

run()