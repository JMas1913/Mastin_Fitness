import React, { useEffect, useState } from 'react'
import './styles/App.css'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/NavBar'
import Listings from './components/Listings'
import ExerciseDetails from './components/ExerciseDetails'
import ExerciseForm from './components/ExerciseForm'
import ProfileForm from './components/ProfileForm'
import axios from 'axios'


function App() {
  const [newExercise, setNewExercise] = useState({
    name: '',
    reps: '',
    weight: '',
    sets: ''
  })

  // const [profiles, setProfiles] = useState(profileArr)
  // const [newProfile, setNewProfile] = useState({

  //   name: '',
  //   age: '',
  //   sex: '',
  //   goal: ''
  // })

  useEffect(() => {
    async function getExercises() {
      const res = await axios.get("http://localhost:3001/seed/exercises")
    }
    getExercises ()
  }, [])

  const addExercise = (e) => {
    e.preventDefault()
    const currentExercises = exercises
    const addExercise = {
      ...newExercise,
      id: parseInt(exercises.length + 1),
      exercise: parseInt(newExercise.exercise)
    }
    currentExercises.push(addExercise)
    setExercises(currentExercises)
    setNewExercise({ id: '', exercise: '', reps: '', weight: '', sets: '' })
  }

  const handleChange = (e) => {
    setNewExercise({ ...newExercise, [e.target.name]: e.target.value })
  }

  // const addProfile = (e) =>{
  //   e.preventDefault()
  //   const currentProfiles = profiles
  //   const addProfile = {
  //     ...newProfile,
  //     id: parseInt(profiles.length + 1),
  //     profiles: parseInt(newProfile.profiles)
  //   }
  //   currentProfiles.push(addProfile)
  //   setProfiles(currentProfiles)
  //   setNewProfile({id: '', name: '', age: '', sex: '', goal: ''})
  // }

  // const handleChange = (e) => {
  //   setNewProfile({...newProfile, [e.target.profiles]: e.target.value})
  // }



  return (
    <div className="App">
      <header>
        <Nav/>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component= {Home} />
          <Route 
            exact path="/Listings" 
            component= {(props) => <Listings {...props} exercises={exercises}/>}
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
                handleChange={handleChange}
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