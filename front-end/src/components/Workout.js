import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'

function Workout(props) {

  const showWorkout = (exercise) => {
    Math.random(props.exercises.exercises.legs)
    Math.random(props.exercises.exercises.legs)
    Math.random(props.exercises.exercises.push)
    Math.random(props.exercises.exercises.push)
    Math.random(props.exercises.exercises.pull)
    Math.random(props.exercises.exercises.pull)
    Math.random(props.exercises.exercises.arms)
    Math.random(props.exercises.exercises.arms)
    Math.random(props.exercises.exercises.core)
    Math.random(props.exercises.exercises.core)
  }

  const backBtn = () => {
    <Route exact path="/" component= {Home} />
    return 
  }

  return (
    <div key={props.exercises}>
      { props.exercises.exercises &&
      props.exercises.exercises.map((exercise) => (
        <div className="workout-card" onClick={() => showWorkout(exercise)}>
          <h3>{exercise.name}</h3>
        </div>
      ))}
    </div>
    
  )
}

export default Workout