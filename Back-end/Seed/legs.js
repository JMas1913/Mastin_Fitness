const db = require('../db')
const Leg = require('../models/exercise')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const legs = [
        { name: 'Squat', reps: 'Max', weight: 'Body-weight', sets: '3', type: 'legs' },
        { name: 'Front lunge', reps: 'Max', weight: 'Body-weight', sets: '3', type: 'legs'  },
        { name: 'Side lunge', reps: 'Max', weight: 'Body-weight', sets: '3', type: 'legs'  },
        { name: 'Transverse lunge', reps: 'Max', weight: 'Body-weight', sets: '3', type: 'legs'  },
        { name: 'Alternating curtsy lunge', reps: 'Max', weight: 'Body-weight', sets: '3', type: 'legs'  }
        ]

    await Leg.insertMany(legs)
    console.log("Created some lower body exercises!")
}
const run = async () => {
    await main()
    db.close()
}

run()