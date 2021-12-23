import React, { useEffect, useState } from 'react'
import './styles/App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/NavBar'
import ListofExercises from './components/ListofExercises'
import ListofProfiles from './components/ListofProfiles'
import ExerciseDetails from './components/ExerciseDetails'
import ExerciseForm from './components/ExerciseForm'
import ProfileForm from './components/ProfileForm'
import Workout from './components/Workout'
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



//====CREATE====

  const postExercise = async () => {
    const res = await axios({
      url: "http://localhost:3001/api/exercise/create",
      method: 'post',
      data: newExercise 
    })
    console.log(`postexercise : ${res.data}` )
    setExercises(res.data)
  }

  const postProfile = async () => {
    const res = await axios({
      url: "http://localhost:3001/api/profile/create",
      method: 'post',
      data: newProfile
    })
    setProfiles(res.data)
  }

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
          exact path="/listofexercises"
          component={(props) => <ListofExercises {...props} exercises={exercises} />}
        />
        <Route
          path="/listofexercises/:id"
          component={(props) => <ExerciseDetails {...props} exercises={exercises} setExercises={setExercises} />}
        />
        <Route
          path="/newexercise"
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
          component={(props) => <Workout {...props} exercises={exercises} />}
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
        <Route
          exact path="/listofprofiles"
          component={(props) => <ListofProfiles {...props} profiles={profiles} />}
        />

      </Switch>
    </main>
  </div>
)
}

export default App