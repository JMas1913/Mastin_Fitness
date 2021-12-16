const db = require('../db')
const Workout = require('../models/workout')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const chest = [
        { exercise: '', reps: '', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Aloe_vera_flower_inset.png' },
        { exercise: '', reps: '', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg/2560px-Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg' },
        { exercise: '', reps: '', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Dypsis_lutescens1.jpg/1280px-Dypsis_lutescens1.jpg' },
        { exercise: '', reps: '', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hierbabuena_0611_Revised.jpg/1920px-Hierbabuena_0611_Revised.jpg' },
        { exercise: '', reps: '', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Dracaena_draco.jpg' }
    ]

    await Workout.insertMany(chest)
    console.log("Created some chest exercise!")
}

const main = async () => {
    const back = [
        { exercise: '', reps: '', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Aloe_vera_flower_inset.png' },
        { exercise: '', reps: '', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg/2560px-Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg' },
        { exercise: '', reps: '', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Dypsis_lutescens1.jpg/1280px-Dypsis_lutescens1.jpg' },
        { exercise: '', reps: '', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hierbabuena_0611_Revised.jpg/1920px-Hierbabuena_0611_Revised.jpg' },
        { exercise: '', reps: '', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Dracaena_draco.jpg' }
    ]

    await Workout.insertMany(back)
    console.log("Created some back exercise!")
}

const main = async () => {
    const arms = [
        { exercise: '', reps: '', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Aloe_vera_flower_inset.png' },
        { exercise: '', reps: '', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg/2560px-Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg' },
        { exercise: '', reps: '', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Dypsis_lutescens1.jpg/1280px-Dypsis_lutescens1.jpg' },
        { exercise: '', reps: '', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hierbabuena_0611_Revised.jpg/1920px-Hierbabuena_0611_Revised.jpg' },
        { exercise: '', reps: '', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Dracaena_draco.jpg' }
    ]

    await Workout.insertMany(arms)
    console.log("Created some arm exercises!")
}

const main = async () => {
    const abs = [
        { exercise: '', reps: '', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Aloe_vera_flower_inset.png' },
        { exercise: '', reps: '', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg/2560px-Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg' },
        { exercise: '', reps: '', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Dypsis_lutescens1.jpg/1280px-Dypsis_lutescens1.jpg' },
        { exercise: '', reps: '', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hierbabuena_0611_Revised.jpg/1920px-Hierbabuena_0611_Revised.jpg' },
        { exercise: '', reps: '', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Dracaena_draco.jpg' }
    ]

    await Workout.insertMany(abs)
    console.log("Created some ab exercises!")
}

const main = async () => {
    const legs = [
        { exercise: '', reps: '', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Aloe_vera_flower_inset.png' },
        { exercise: '', reps: '', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg/2560px-Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg' },
        { exercise: '', reps: '', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Dypsis_lutescens1.jpg/1280px-Dypsis_lutescens1.jpg' },
        { exercise: '', reps: '', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hierbabuena_0611_Revised.jpg/1920px-Hierbabuena_0611_Revised.jpg' },
        { exercise: '', reps: '', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Dracaena_draco.jpg' }
    ]

    await Workout.insertMany(legs)
    console.log("Created some leg exercises!")
}

const run = async () => {
    await main()
    db.close()
}

run()