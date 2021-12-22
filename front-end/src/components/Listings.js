import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'

function Listings(props) {
  console.log("listings page")
  const showExercise = (exercise) => {
    props.history.push(`/listings/${exercise.id}`)
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