const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.post('/exercise/create', controllers.createExercise)

router.get('/exercises/read', controllers.getAllExercises)

router.get('/exercises/read/:id', controllers.getExerciseById)

router.put('/exercise/update/:id', controllers.updateExercise)

router.delete('/exercise/delete/:id', controllers.deleteExercise)

router.post('/profile/create', controllers.createProfile)

router.get('/profiles/read', controllers.getAllProfiles)

router.get('/profile/read/:id', controllers.getProfileById)

router.put('/profile/update/:id', controllers.updateProfile)

router.delete('/profiles/delete/:id', controllers.deleteProfile)


module.exports = router;