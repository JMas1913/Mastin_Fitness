const db = require('../db')
const Push = require('../models/exercise')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const pushes = [
        { name: 'Push-ups', reps: 'Max', weight: 'Body-weight', sets: '3', type: 'pushing' },
        { name: 'Military Push-ups', reps: 'Max', weight: 'Body-weight', sets: '3', type: 'pushing'  },
        { name: 'Diamond Push-ups', reps: 'Max', weight: 'Body-weight', sets: '3', type: 'pushing'  },
        { name: 'Wide-fly Push-ups', reps: 'Max', weight: 'Body-weight', sets: '3', type: 'pushing'  },
        { name: 'Spider-Man Push-ups', reps: 'Max', weight: 'Body-weight', sets: '3', type: 'pushing'  },
        { name: 'Cross-body Alternating Shoulder Press', reps: '10-12', weight: 'Heavy enough to fail between 10-12', sets: '3', type: 'pushing'  },
        { name: 'L-Raises', reps: '10-12', weight: 'Heavy enough to fail between 10-12', sets: '3', type: 'pushing'  },
        { name: 'Bench Dips', reps: 'Max', weight: 'Body-weight', sets: '3', type: 'pushing'  },
        { name: 'Triceps Press-down', reps: '10-12', weight: 'Heavy enough to fail between 10-12', sets: '3', type: 'pushing'  }
    ]

    await Push.insertMany(pushes)
    console.log("Created some pushing exercises!")
}
const run = async () => {
    await main()
    db.close()
}

run()