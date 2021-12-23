const Exercise = require('../models/exercise');
const Profile = require('../models/profile');

const createExercise = async (req, res) => {
    console.log(req.body)
    try {
        const exercise = await Exercise.create(req.body)
        await exercise.save()
        return res.status(200).json({
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
    console.log(req.params)
    console.log(req.body)
    try {
        const { id } = req.params;
        await Exercise.findOneAndUpdate({_id:id}, req.body, { new: true }, (err, exercise) => {
            
            return res.status(200).json(exercise);
        })
    } catch (error) {
        // return res.status(500).send(error.message);
        console.log(error)
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

// ---------------------------------------------------------------------------

const createProfile = async (req, res) => {
    try {
        const profile = await new Profile(req.body)
        await profile.save()
        return res.status(201).json({
            profile,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllProfiles = async (req, res) => {
    try {
        const profiles = await Profile.find()
        return res.status(200).json({ profiles })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getProfileById = async (req, res) => {
    try {
        const { id } = req.params;
        const profileId = await Profile.findById(id)
        if (profileId) {
            return res.status(200).json({ profileId });
        }
        return res.status(404).send('Profile with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateProfile = async (req, res) => {
    try {
        const { id } = req.params;
        await Profile.findByIdAndUpdate(id, req.body, { new: true }, (err, profile) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!profile) {
                res.status(500).send('Profile not found!');
            }
            return res.status(200).json(profile);
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Profile.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Profile deleted");
        }
        throw new Error("Profile not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}




module.exports = {
    createExercise,
    getAllExercises,
    getExerciseById,
    updateExercise,
    deleteExercise,
    createProfile,
    getAllProfiles,
    getProfileById,
    updateProfile,
    deleteProfile,
}