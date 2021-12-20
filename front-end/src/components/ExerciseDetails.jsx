import React from 'react'
import Exercises from '../data/exercises'
import {useEffect, useState} from 'react'

function ExerciseDetails(props) {
  
  const  [selectExercise, setExercise] = useState('')

  useEffect(() => {
    let selectExercise = props.exercises.find(
      (exercise) => exercise.id === parseInt(props.match.params.id)
    )
    setExercise(selectExercise)
  }, [])
  
  
    return selectExercise ? (
      <div className='details'>
        <div className='detail-header'>
          <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h2>{selectExercise.name}</h2>
          </div>
        </div>
        <div className='info-wrapper'>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <h3>Reps: {selectExercise.reps}</h3>
            <h3>Weight: {selectExercise.weight}</h3>
            <h3>Sets: {selectExercise.sets}</h3>
            <h3>Exercise ID: {selectExercise.id}</h3>
          </div>
        </div>
      </div>
  ) : null;     
}


export default ExerciseDetails;