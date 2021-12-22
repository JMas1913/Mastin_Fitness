import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'

function ListofExercises(props) {
  const showExercise = (exercise) => {
    props.history.push(`/listofexercises/${exercise.id}`)
  }

  return (
    <div key={props.exercises}>
      { props.exercises.exercises &&
      props.exercises.exercises.map((exercise) => (
        <div className="exercise-card" onClick={() => showExercise(exercise)}>
          <h3>{exercise.name}</h3>
        </div>
      ))}

      <div>
        <button>
          Delete an Exercise
        </button>
        <div>

        </div>
      </div>





    </div>
  )
}

export default ListofExercises