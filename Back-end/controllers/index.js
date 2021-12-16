const Exercise = require('../models/workout');

const createExercise = async (req, res) => {
    try {
        const exercise = await new Exercise(req.body)
        await exercise.save()
        return res.status(201).json({
            exercise,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllExercises = async (req, res) => {
    try {
        const exercises = await Exercise.find()
        return res.status(200).json({ exercises })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getExerciseById = async (req, res) => {
    try {
        const { id } = req.params;
        const exerciseId = await Exercise.findById(id)
        if (exerciseId) {
            return res.status(200).json({ exerciseId });
        }
        return res.status(404).send('Exercise with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateExercise = async (req, res) => {
    try {
        const { id } = req.params;
        await Exercise.findByIdAndUpdate(id, req.body, { new: true }, (err, exercise) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!exercise) {
                res.status(500).send('Exercise not found!');
            }
            return res.status(200).json(plant);
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteExercise = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Exercise.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Exercise deleted");
        }
        throw new Error("Exercise not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    createExercise,
    getAllExercises,
    getExerciseById,
    updateExercise,
    deleteExercise
}