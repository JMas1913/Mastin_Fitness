import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'

function Listings(props) {

  const showExercise = (exercise) => {
    props.history.push(`/listings/${exercise.id}`)
  }

  const backBtn = () => {
    <Route exact path="/" component= {Home} />
    return 
  }

  return (
    <div key={props.exercises}>
      { props.exercises.exercises &&
      props.exercises.exercises.map((exercise) => (
        <div className="exercise-card" onClick={() => showExercise(exercise)}>
          <h3>{exercise.name}</h3>
        </div>
      ))}
    </div>
    
  )
}

export default Listings