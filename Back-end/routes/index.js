const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.post('/exercise', controllers.createExercise)

router.get('/exercises', controllers.getAllExercises)

router.get('/exercises/:id', controllers.getExerciseById)

router.put('/exercises/:id', controllers.updateExercise)

router.delete('/exercises/:id', controllers.deleteExercise)

router.post('/newprofile', controllers.createProfile)

router.get('/profiles', controllers.getAllProfiles)

router.get('/profiles/:id', controllers.getProfileById)

router.put('/profiles/:id', controllers.updateProfile)

router.delete('/profiles/:id', controllers.deleteProfile)










module.exports = router;