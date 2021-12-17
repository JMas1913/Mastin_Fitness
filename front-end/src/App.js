import React, { useState } from 'react'
import exerciseArr from './data/exercises'
import './styles/App.css'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/NavBar'
import Listings from './components/Listings'
import ExerciseDetails from './components/ExerciseDetails'
import ExerciseForm from './components/ExerciseForm'


function App() {
  const [exercises, setExercises] = useState(exerciseArr)
  const [newExercise, setNewExercise] = useState({
    id: '',
    exercise: '',
    reps: '',
    weight: '',
    sets: ''
  })

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
    setNewExercise({ ...newExercise, [e.target.exercise]: e.target.value })
  }

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

        </Switch>
      </main>
    </div>
  )
}

export default App