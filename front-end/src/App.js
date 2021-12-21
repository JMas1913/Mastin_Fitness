import React, { useEffect, useState } from 'react'
import './styles/App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/NavBar'
import Listings from './components/Listings'
import ExerciseDetails from './components/ExerciseDetails'
import ExerciseForm from './components/ExerciseForm'
import ProfileForm from './components/ProfileForm'
import axios from 'axios'


function App() {
  const [exercises, setExercises] = useState([])
  const [newExercise, setNewExercise] = useState({
    name: '',
    reps: '',
    weight: '',
    sets: '',
    type: ''
  })

  const [profiles, setProfiles] = useState([])
  const [newProfile, setNewProfile] = useState({

    name: '',
    age: '',
    sex: '',
    goal: ''
  })

  const getExercises = async () => {
    const res = await axios.get("http://localhost:3001/api/exercises")
    setExercises(res.data)
  }

  const getProfiles = async () => {
    const res = await axios.get("http://localhost:3001/api/newprofile")
      setProfiles(res.data)
  }

  useEffect(() => {
    getProfiles()
    getExercises()
  }, [])

  const addExercise = (e) => {
    e.preventDefault()
    const currentExercises = exercises.exercises
    console.log(currentExercises)
    console.log(exercises)
    const addExercise = {
      ...newExercise,
      id: parseInt(exercises.exercises.length + 1),
      exercise: parseInt(newExercise.exercise)
    }
    currentExercises.push(addExercise)
    setExercises(currentExercises)
    setNewExercise({ name: '', reps: '', weight: '', sets: '', type: '' })
  }

  const handleChangeExercise = (e) => {
    setNewExercise({ ...newExercise, [e.target.name]: e.target.value })
  }

  const addProfile = (e) => {
    e.preventDefault()
    const currentProfiles = profiles
    const addProfile = {
      ...newProfile,
      id: parseInt(profiles.length + 1),
      profiles: parseInt(newProfile.profiles)
    }
    currentProfiles.push(addProfile)
    setProfiles(currentProfiles)
    setNewProfile({ id: '', name: '', age: '', sex: '', goal: '' })
  }

  const handleChangeProfile = (e) => {
    setNewProfile({ ...newProfile, [e.target.profiles]: e.target.value })
  }




return (
  <div className="App">
    <header>
      <Nav />
    </header>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact path="/Listings"
          component={(props) => <Listings {...props} exercises={exercises} />}
        />
        <Route
          path="/listings/:id"
          component={(props) => <ExerciseDetails {...props} exercises={exercises} />}
        />
        <Route
          path="/new"
          render={(props) => (
            <ExerciseForm
              {...props}
              newExercise={newExercise}
              handleChange={handleChangeExercise}
              addExercise={addExercise}
            />
          )}
        />
        <Route
          exact path="/workout"
          component={(props) => <Listings {...props} workout={Math.random.exercises} />}
        />
        <Route
          path="/newprofile"
          render={(props) => (
            <ProfileForm
              {...props}
            />
          )}
        />

      </Switch>
    </main>
  </div>
)
}

export default App