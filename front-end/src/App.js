import React, { useEffect, useState } from 'react'
import './styles/App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/NavBar'
import Listings from './components/Listings'
import ExerciseDetails from './components/ExerciseDetails'
import ExerciseForm from './components/ExerciseForm'
import Workout from './components/Workout'
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
    console.log(res.data)
    setExercises(res.data)
  }

  const getProfiles = async () => {
    const res = await axios.get("http://localhost:3001/api/profiles")
    setProfiles(res.data)
  }

  const postExercise = async () => {
    const res = await axios({
      url: "http://localhost:3001/api/exercises",
      method: 'post',
      data: newExercise 
    })
    console.log(`postexercise : ${res.data}` )
    setExercises(res.data)
  }

  const postProfile = async () => {
    const res = await axios({
      url: "http://localhost:3001/api/newprofile",
      method: 'post',
      data: newProfile
    })
    setProfiles(res.data)
  }



  useEffect(() => {
    getProfiles()
    getExercises()
  }, [])

  const addExercise = (e) => {
    e.preventDefault()
    postExercise()
    const currentExercises = exercises.exercises
    const addExercise = {
      ...newExercise,
    }
    currentExercises.push(addExercise)
    setExercises(currentExercises)
    setNewExercise({ name: '', reps: '', weight: '', sets: '', type: '' })
  }

  const addProfile = (e) => {
    e.preventDefault()
    const currentProfiles = profiles
    const addProfile = {
      ...newProfile,
    }
    currentProfiles.push(addProfile)
    setProfiles(currentProfiles)
    setNewProfile({ name: '', age: '', sex: '', goal: '' })
  }

  const handleChangeExercise = (e) => {
    setNewExercise({ ...newExercise, [e.target.name]: e.target.value })
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
          path="/listings/:name"
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
              newProfile={newProfile}
              handleChange={handleChangeProfile}
              addProfile={addProfile}
            />
          )}
        />

      </Switch>
    </main>
  </div>
)
}

export default App